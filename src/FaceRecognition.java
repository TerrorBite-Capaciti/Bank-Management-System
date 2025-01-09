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
        CanvasFrame canvas = new CanvasFrame("Face Detection");
        canvas.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);

        try {
            grabber.start(); // Start capturing video

            OpenCVFrameConverter.ToMat converter = new OpenCVFrameConverter.ToMat();
            Frame frame;

            // Continuous loop to process each frame
            while (canvas.isVisible() && (frame = grabber.grab()) != null) {
                // Convert the frame to Mat
                Mat mat = converter.convert(frame);

                // Detect and annotate faces
                detectFaces(mat, faceCascade);

                // Show the processed frame
                canvas.showImage(converter.convert(mat));
            }

            grabber.stop(); // Stop capturing video
            canvas.dispose(); // Close the canvas
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Method to detect faces in a frame
    public static void detectFaces(Mat mat, CascadeClassifier faceCascade) {
        // Convert to grayscale for better detection
        Mat gray = new Mat();
        cvtColor(mat, gray, COLOR_BGR2GRAY);

        // Equalize histogram for better results
        equalizeHist(gray, gray);

        // Detect faces
        RectVector faces = new RectVector();
        faceCascade.detectMultiScale(gray, faces);

        // Draw rectangles around detected faces
        for (int i = 0; i < faces.size(); i++) {
            Rect face = faces.get(i);
            rectangle(mat, face, new Scalar(0, 255, 0, 0)); // Green rectangle
        }
    }
}
