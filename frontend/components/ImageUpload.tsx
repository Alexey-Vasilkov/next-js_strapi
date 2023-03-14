import { ChangeEvent, FormEvent, useState } from "react";

import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";

interface IImageUploadProps {
  evtId: string | Blob;
  imageUploaded: () => void;
}

function ImageUpload({ evtId, imageUploaded }: IImageUploadProps) {
  const [image, setImage] = useState<string | Blob>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "events");
    formData.append("refId", evtId);
    formData.append("field", "image");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className="btn" />
      </form>
    </div>
  );
}

export default ImageUpload;
