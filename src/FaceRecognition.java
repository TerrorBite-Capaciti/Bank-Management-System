import org.bytedeco.javacv.*;
import org.bytedeco.opencv.opencv_core.*;
import org.bytedeco.opencv.opencv_imgproc.*;
import org.bytedeco.opencv.opencv_objdetect.*;

import static org.bytedeco.opencv.global.opencv_core.*;
import static org.bytedeco.opencv.global.opencv_imgproc.*;
import static org.bytedeco.opencv.global.opencv_objdetect.*;

//Facial recognition  imports
import org.bytedeco.opencv.opencv_face.LBPHFaceRecognizer;
import org.bytedeco.opencv.opencv_core.Mat;
import org.bytedeco.opencv.opencv_core.Rect;
import org.bytedeco.opencv.opencv_imgcodecs.Imgcodecs;
import org.bytedeco.opencv.opencv_imgproc.Imgproc;
import org.bytedeco.opencv.global.opencv_face;
import org.bytedeco.opencv.global.opencv_imgcodecs;
import org.bytedeco.opencv.global.opencv_imgproc;


public class FaceRecognition {

    public static void main(String[] args) {

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


                // Detect and annotate faces, recognise faces
                detectFaces(mat, faceCascade, faceRecognizer);


                // Show the processed frame
                canvas.showImage(converter.convert(mat));
            }

            grabber.stop(); // Stop capturing video
            canvas.dispose(); // Close the canvas
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Method to detect and recognise faces in a frame
    public static void detectAndRecognizeFaces(Mat mat, CascadeClassifier faceCascade, LBPHFaceRecognizer recognizer) {
        // Convert to grayscale for better detection
        Mat gray = new Mat();
        opencv_imgproc.cvtColor(mat, gray, opencv_imgproc.COLOR_BGR2GRAY);

        // Equalize histogram for better results
        opencv_imgproc.equalizeHist(gray, gray);

        // Detect faces
        RectVector faces = new RectVector();
        faceCascade.detectMultiScale(gray, faces);

        // Draw rectangles around detected faces
        for (int i = 0; i < faces.size(); i++) {
            Rect face = faces.get(i);
            opencv_imgproc.rectangle(mat, face, new Scalar(0, 255, 0, 0)); // Green rectangle
        }


            // Crop the face region for recognition
            Mat faceROI = gray.apply(face);

            // Recognise the face (predict the label and confidence)
            int[] label = new int[1];
            double[] confidence = new double[1];
            recognizer.predict(faceROI, label, confidence);

            // If the confidence is below a certain threshold,  print the label
            if (confidence[0] < 100) {
                System.out.println("Recognized face as: " + label[0]);
                opencv_core.putText(mat, "Person " + label[0], new opencv_core.Point(face.x(), face.y() - 10),
                        opencv_core.FONT_HERSHEY_SIMPLEX, 1, new Scalar(0, 255, 0, 0), 2, opencv_core.LINE_AA, false);
            } else {
                System.out.println("Unknown face");
                opencv_core.putText(mat, "Unknown", new opencv_core.Point(face.x(), face.y() - 10),
                        opencv_core.FONT_HERSHEY_SIMPLEX, 1, new Scalar(0, 0, 255, 0), 2, opencv_core.LINE_AA, false);
            }
        }
    }

    // Method to train the face recognizer using images in a directory
    public static void trainRecognizer(String imageDirectory) {
        // instance of the LBPHFaceRecognizer
        LBPHFaceRecognizer recognizer = LBPHFaceRecognizer.create();

        // Lists to hold the training images and labels
        List<Mat> images = new ArrayList<>();
        List<Integer> labels = new ArrayList<>();

        
        File folder = new File(imageDirectory);
        File[] listOfFiles = folder.listFiles();

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
