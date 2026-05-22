import React, { useState } from "react";

export default function Task15_FileUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const clearFile = () => {
    setFile(null);
  };

  return (
    <div className="card p-4 mb-5 shadow-sm border-secondary">
      <h3 className="text-secondary">15. File Upload with Preview</h3>
      
      <input type="file" className="form-control mt-3" onChange={handleChange} />
      
      {file && (
        <div className="mt-3 p-3 bg-light rounded text-center border">
          {/* Check if file is image */}
          {file.type.startsWith("image/") ? (
            <img src={URL.createObjectURL(file)} alt="preview" width="200" className="rounded shadow-sm mb-3" />
          ) : (
            <p className="fw-bold">{file.name}</p>
          )}
          <br />
          <button className="btn btn-danger btn-sm" onClick={clearFile}>Clear File</button>
        </div>
      )}
    </div>
  );
}