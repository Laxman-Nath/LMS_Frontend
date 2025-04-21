const cloud_name = "dr53i0bjh";
const cloud_preset = "lms_frontend";

export const uploadToCloudinary = async (file, fileType) => {
  if (!file || !fileType) {
    throw new Error("File and fileType must be provided");
  }

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", cloud_preset);
  data.append("cloud_name", cloud_name);

  try {
    // Send request to Cloudinary
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
      { method: "POST", body: data }
    );

    // Check for response success
    if (!res.ok) {
      throw new Error(`Upload failed: ${res.statusText}`);
    }

    const fileData = await res.json();

    // Check if fileData contains a URL
    if (fileData.url) {
      console.log("File uploaded successfully. URL:", fileData.url);
      return fileData.url;
    } else {
      throw new Error("File uploaded, but no URL returned");
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error; // Rethrow error to allow further handling if needed
  }
};
