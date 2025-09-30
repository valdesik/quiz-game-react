import { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 400,
    height: 300,
    facingMode: 'user',
};

export default function WebcamCapture({ onCapture }: { onCapture: (file: File) => void }) {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);

    const capture = () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setCapturedImage(imageSrc);

            // Convert Base64 to Blob
            const byteString = atob(imageSrc.split(',')[1]);
            const mimeString = imageSrc.split(',')[0].split(':')[1].split(';')[0];
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const uintArray = new Uint8Array(arrayBuffer);

            for (let i = 0; i < byteString.length; i++) {
                uintArray[i] = byteString.charCodeAt(i);
            }

            // Create a File instead of a Blob
            const file = new File([uintArray], 'capture.jpg', { type: mimeString });
            onCapture(file);
        }
    };

    const retake = () => {
        setCapturedImage(null);
    };

    return (
        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded shadow-md">
            {capturedImage ? (
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={capturedImage}
                        alt="captured"
                        className="rounded shadow"
                        style={{ width: '400px', objectFit: 'contain' }}
                    />
                    <button
                        onClick={retake}
                        className="bg-blue-500 text-white px-4 py-2 max-lg:w-2 rounded hover:bg-blue-600"
                    >
                        Retake Photo
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-4">
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        className="rounded shadow"
                    />
                    <button
                        onClick={capture}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Take Photo
                    </button>
                </div>
            )}
        </div>
    );
}