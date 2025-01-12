import org.bytedeco.opencv.opencv_core.RectVector;
import org.bytedeco.opencv.opencv_core.Scalar;

// Handle image directory and lists
import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.bytedeco.javacv.*;
import org.bytedeco.opencv.opencv_core.*;
import org.bytedeco.opencv.opencv_imgproc.*;
import org.bytedeco.opencv.opencv_objdetect.*;

import static org.bytedeco.opencv.global.opencv_core.*;
import static org.bytedeco.opencv.global.opencv_imgproc.*;
import static org.bytedeco.opencv.global.opencv_objdetect.*;

// Facial recognition imports
import org.bytedeco.opencv.opencv_face.LBPHFaceRecognizer;
import org.bytedeco.opencv.global.opencv_face;
import org.bytedeco.opencv.global.opencv_imgcodecs;

public class FaceRecognition {

    public static void main(String[] args) {
        trainRecognizer("src/images"); // Train the face recognizer using images in the directory

        // Load the Haar Cascade XML file
        String haarCascadePath = "data/haarcascade_frontalface_alt.xml";
        CascadeClassifier faceCascade = new CascadeClassifier(haarCascadePath);

        // Check if the cascade file is loaded properly
        if (faceCascade.empty()) {
            System.out.println("Error loading Haar cascade file: " + haarCascadePath);
            return;
        }

        // Open the default webcam
        OpenCVFrameGrabber grabber = new OpenCVFrameGrabber(0);
        CanvasFrame canvas = new CanvasFrame("Face Detection & Recognition");
        canvas.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);

        // Load trained face recognizer (LBPH)
        LBPHFaceRecognizer faceRecognizer = LBPHFaceRecognizer.create();
        faceRecognizer.read("face_recognizer_model.xml"); // Load the pre-trained model

        try {
            grabber.start(); // Start capturing video

            OpenCVFrameConverter.ToMat converter = new OpenCVFrameConverter.ToMat();
            Frame frame;

            // Continuous loop to process each frame
            while (canvas.isVisible() && (frame = grabber.grab()) != null) {
                // Convert the frame to Mat
                Mat mat = converter.convert(frame);

                // Detect and recognize faces
                detectAndRecognizeFaces(mat, faceCascade, faceRecognizer);

                // Show the processed frame
                canvas.showImage(converter.convert(mat));
            }

            grabber.stop(); // Stop capturing video
            canvas.dispose(); // Close the canvas
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Method to detect and recognize faces in a frame
    public static void detectAndRecognizeFaces(Mat mat, CascadeClassifier faceCascade, LBPHFaceRecognizer recognizer) {
        // Convert to grayscale for better detection
        Mat gray = new Mat();
        cvtColor(mat, gray, COLOR_BGR2GRAY);

        // Equalize histogram for better results
        equalizeHist(gray, gray);

        // Detect faces
        RectVector faces = new RectVector();
        faceCascade.detectMultiScale(gray, faces);

        // Draw rectangles around detected faces and recognize them
        for (int i = 0; i < faces.size(); i++) {
            Rect face = faces.get(i);

            // Draw green rectangle
            Scalar green = new Scalar(0, 255, 0, 0);
            rectangle(mat, face, green);

            // Crop the face region for recognition
            Mat faceROI = new Mat(gray, face);

            // Recognize the face (predict the label and confidence)
            int[] label = new int[1];
            double[] confidence = new double[1];
            recognizer.predict(faceROI, label, confidence);

            // Display recognition results
            if (confidence[0] < 100) {
                String text = "Person " + label[0];
                putText(mat, text, new Point(face.x(), face.y() - 10),
                        FONT_HERSHEY_SIMPLEX, 1, green, 2, LINE_AA, false);
                System.out.println("Recognized face as: " + text);
            } else {
                String text = "Unknown";
                Scalar red = new Scalar(0, 0, 255, 0);
                putText(mat, text, new Point(face.x(), face.y() - 10),
                        FONT_HERSHEY_SIMPLEX, 1, red, 2, LINE_AA, false);
                System.out.println("Unknown face");
            }
        }
    }

    // Method to train the face recognizer using images in a directory
    public static void trainRecognizer(String imageDirectory) {
        // Create an instance of the LBPHFaceRecognizer
        LBPHFaceRecognizer recognizer = LBPHFaceRecognizer.create();

        // Lists to hold the training images and labels
        List<Mat> images = new ArrayList<>();
        List<Integer> labels = new ArrayList<>();

        File folder = new File(imageDirectory);
        File[] listOfFiles = folder.listFiles();

        if (listOfFiles == null) {
            System.out.println("No files found in directory: " + imageDirectory);
            return;
        }

        int label = 0;

        // Loop through all image files in the directory and read them
        for (File file : listOfFiles) {
            if (file.isFile() && file.getName().endsWith(".jpg")) {
                // Read the image and convert it to grayscale
                Mat image = opencv_imgcodecs.imread(file.getAbsolutePath(), opencv_imgcodecs.IMREAD_GRAYSCALE);

                // Add the image and label to the lists
                images.add(image);
                labels.add(label);

                label++; // Increment the label for the next person
            }
        }

        // Convert the labels list to an array
        int[] labelsArray = labels.stream().mapToInt(Integer::intValue).toArray();

        // Train the recognizer using the images and labels
        recognizer.train(images, labelsArray);
        recognizer.save("face_recognizer_model.xml"); // Save the trained model
    }
}
