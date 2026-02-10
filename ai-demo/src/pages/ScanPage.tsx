import { useRef, useState } from "react";
import { LuScanLine } from "react-icons/lu";
import { BsCamera } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";

const ScanPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUpload, setIsUpload] = useState(false);
  const [uploadFile, setUploadFile] = useState<string | null>(null);
  const handleScanButton = () => {
    const input = inputRef.current;
    if (input) {
      input.click();
    }
  };

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUpload(true);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64string = reader.result as string; // The result is a base64 encoded string
        setUploadFile(base64string);
      };
      reader.onerror = () => {
        console.error("Error reading file");
      };
      console.log("Uploaded file:", file);
    }
  };

  const clearUpload = () => {
    setIsUpload(false);
    setUploadFile(null);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="rounded-2xl bg-white w-full h-full shadow flex items-center justify-center flex-col p-4 gap-4">
        {isUpload && uploadFile ? (
          <>
            <img
              src={uploadFile}
              alt="upload-file-img"
              className="rounded-lg object-fill max-h-96 h-96"
            />
            <button
              onClick={clearUpload}
              className="bg-blue-primary w-full text-white rounded-lg h-14 inline-flex items-center gap-3 justify-center text-lg"
            >
              <LuScanLine size={25} /> Scan อีกครั้ง
            </button>
          </>
        ) : (
          <>
            <div className="h-96 flex items-center justify-center flex-col gap-2">
              <div className="rounded-full bg-blue-primary p-5 relative">
                <LuScanLine size={50} className="text-white" />
                <div className="absolute -top-3.5 -right-1 rounded-full bg-white text-blue-primary shadow-xl p-2 ">
                  <IoMdPhotos size={20} className=" text-blue-primary" />
                </div>
              </div>
              <span className="text-zinc-700 font-semibold text-2xl">
                เริ่มสแกนรูปภาพของคุณ
              </span>
              <span className="text-zinc-700 text-center">
                ถ่ายภาพหรือเลือกภาพจากอัลบั้ม<br></br> เพื่อให้ AI ตรวจสอบ
              </span>
            </div>
            <input
              ref={inputRef}
              onChange={handleUploadFile}
              type="file"
              accept="image/*"
              name="upload-file"
              className="hidden"
            />
            <button
              onClick={handleScanButton}
              className="bg-blue-primary w-full text-white rounded-lg h-14 inline-flex items-center gap-3 justify-center text-lg"
            >
              <BsCamera size={25} /> เลือกภาพหรือถ่ายรูป
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ScanPage;
