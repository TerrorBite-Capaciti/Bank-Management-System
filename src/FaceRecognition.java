// Import required libraries from JavaCV and OpenCV
import org.bytedeco.javacv.*;
import org.bytedeco.opencv.opencv_core.*;
import org.bytedeco.opencv.opencv_imgproc.*;
import org.bytedeco.opencv.opencv_objdetect.*;

public class FaceRecognition {
    
    // Main method where the program starts execution
    public static void main(String[] args) {
        
        // Load the OpenCV library
        System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
        
        // Initialize the face detection cascade classifier using the Haar Cascade XML file
        CascadeClassifier faceCascade = new CascadeClassifier("data/haarcascade_frontalface_alt.xml");

        // Check if the cascade file is loaded properly
        if (faceCascade.empty()) {
            System.out.println("Error loading Haar cascade file.");
            return;
        }
        
        // Start capturing video from the default webcam (camera index 0)
        OpenCVFrameGrabber grabber = new OpenCVFrameGrabber(0);
        try {
            grabber.start();  // Start the video capture
            Frame frame;
            
            // Continuous loop to process each frame captured from the camera
            while ((frame = grabber.grab()) != null) {
                // Convert the current frame to an OpenCV Mat object for further processing
                Mat mat = new Java2DFrameConverter().convert(frame);
                
                // Detect faces in the current frame
                detectFace(mat, faceCascade);
            }
        } catch (FrameGrabber.Exception e) {
            e.printStackTrace();
        }
    }

    // Method to detect faces in a frame
    public static void detectFace(Mat mat, CascadeClassifier faceCascade) {
        // Convert the frame to grayscale for better face detection
        Mat gray = new Mat();
        cvtColor(mat, gray, COLOR_BGR2GRAY);

        // Detect faces in the grayscale image
        RectVector faces = new RectVector();
        faceCascade.detectMultiScale(gray, faces);

        // Draw rectangles around detected faces
        for (int i = 0; i < faces.size(); i++) {
            Rect face = faces.get(i);
            rectangle(mat, face, Scalar.GREEN);  // Draw green rectangle around the face
        }

        // Display the processed frame (with face rectangles) on the screen
        new Java2DFrameConverter().convert(mat);
    }
}
