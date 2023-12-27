import { useState } from "react";
import React from "react";
import "../CreateMovie/CreateMovies.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Input } from "antd";
import { useTranslation } from "react-i18next";

const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file: any) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const CreateMovies = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "branch",
  });
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url: any) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
          color: "white",
        }}
      >
        Drop an image here
      </div>
    </div>
  );
  return (
    <div className="createMovies">
      <div className="create-movies-main-container">
        {/* Desktop design */}
        <div className="create-movies-box">
          <div className="create-movies-heading">
            <p className="create-movie-title">Create a new movie</p>
          </div>
          <div className="create-movie-form">
            <div className="create-movie-form-row">
              <div className="create-movie-col-6">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader custom-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                  style={{ width: "900px", height: "2000px" }}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
              <div className="create-movie-col-6">
                <div className="form-inputs">
                  <Input
                    placeholder="Title"
                    className="create-movie-form-input"
                    style={{ width: "100%" }}
                  />
                  <Input
                    placeholder="Publishing year"
                    className="create-movie-form-input"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="form-buttons">
                  <button className="btn_cancle"> Cancel</button>
                  <button className="btn_submit"> submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Design */}
        <div className="create-movies-mobile-box">
          <div className="create-movies-heading">
            <p className="create-movie-title">Create a new movie</p>
          </div>
          <div className="form-inputs">
            <Input placeholder="Title" className="create-movie-form-input" />
            <Input
              placeholder="Publishing year"
              className="create-movie-form-input"
            />
          </div>
          <div className="upload-box">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader custom-uploader"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
              style={{ width: "900px", height: "2000px" }}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div className="form-buttons">
            <button className="btn_cancle"> Cancel</button>
            <button className="btn_submit"> submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMovies;
