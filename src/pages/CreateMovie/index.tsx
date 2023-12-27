import { useEffect, useState } from "react";
import React from "react";
import "../CreateMovie/CreateMovies.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import MovieActions from "../../redux/middleware/movies";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";
import { Alert } from "antd";
import { RcFile } from "antd/es/upload";
import { baseURL } from "../../config/constant";
import { useNavigate } from "react-router-dom";

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, "I was closed.");
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
    keyPrefix: "CreateMovies",
  });
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [title, setTitle] = useState<string>("");
  const [publishYear, setPublishYear] = useState<string>("");
  const [showError, setShowError] = useState(false);
  const [imageBase64, setImageBase64] = useState<string>();

  const navigate = useNavigate();

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleChange = async (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      console.log(info.file.originFileObj);
      const getBaseUrl = await getBase64(info.file.originFileObj);
      setImageUrl(info.file.originFileObj);
      setImageBase64(getBaseUrl);
    }
  };

  const handleSubmit = async () => {
    if (title === "" || publishYear === "" || imageUrl === undefined) {
      message.error("All the fields are required ");
      setShowError(true);
      return;
    } else {
      const values = await MovieActions.uploadImage(imageUrl);
      console.log(values);
      const payload = {
        title: title,
        year: publishYear,
        poster: `${baseURL}/uploads/${values?.data?.path}`,
      };

      const finalValue = await MovieActions.addMovie(payload);
      console.log(finalValue);
    }

    setTitle("");
    setPublishYear("");
    setImageBase64(undefined);
    setImageUrl(undefined);
    setLoading(false);
    setShowError(false);

    navigate("/app/movies");
  };

  const handleCancle = () => {
    setTitle("");
    setPublishYear("");
    setImageUrl(undefined);
  };

  const uploadButton = (
    <div className="plus-icon-bottom-text">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        {t("Add_movie")}
      </div>
    </div>
  );
  return (
    <div className="createMovies">
      <div className="create-movies-main-container">
        {/* Desktop design */}
        <div className="create-movies-box">
          <div className="create-movies-heading">
            <p className="create-movie-title">{t("Create_movie")}</p>
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
                >
                  {imageBase64 ? (
                    <img
                      src={imageBase64}
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
                    placeholder={t("title")}
                    value={title}
                    className="create-movie-form-input"
                    style={{ width: "100%" }}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Input
                    placeholder={t("publish_year")}
                    className="create-movie-form-input"
                    type="number"
                    value={publishYear}
                    style={{ width: "50%" }}
                    onChange={(e) => setPublishYear(e.target.value)}
                  />
                </div>
                <div className="form-buttons">
                  <button className="btn_cancle" onClick={handleCancle}>
                    {t("Cancel_btn")}
                  </button>
                  <button className="btn_submit" onClick={handleSubmit}>
                    {t("Submit_btn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Design */}
        <div className="create-movies-mobile-box">
          <div className="create-movies-heading">
            <p className="create-movie-title">{t("Create_movie")}</p>
          </div>
          <div className="form-inputs">
            <Input
              placeholder={t("title")}
              value={title}
              className="create-movie-form-input"
              style={{ width: "100%" }}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder={t("publish_year")}
              className="create-movie-form-input"
              type="number"
              value={publishYear}
              style={{ width: "50%" }}
              onChange={(e) => setPublishYear(e.target.value)}
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
            <button className="btn_cancle" onClick={handleCancle}>
              {t("Cancel_btn")}
            </button>
            <button className="btn_submit" onClick={handleSubmit}>
              {t("Submit_btn")}
            </button>
          </div>
        </div>
      </div>
      {showError && (
        <Alert
          message="ALL fields required"
          // description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closable
          onClose={() => setShowError(false)}
        />
      )}
    </div>
  );
};

export default CreateMovies;
