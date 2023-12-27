import { useEffect, useState } from "react";
import { Col, Row, Card, Pagination, PaginationProps } from "antd";
import "./index.scss";
import { useTranslation } from "react-i18next";
import Utils from "../../redux/utils";
import Attributes from "../../redux/middleware/attributes";
import { useLocation, useNavigate } from "react-router-dom";
import MovieActions from "../../redux/middleware/movies";

const { Meta } = Card;

const MoviesList = () => {
  const location = useLocation();
  const { successMessage } = location.state || {};

  const navigate = useNavigate();

  const { getMovieList } = Attributes;

  const [limit, setLimit] = useState(6);
  const [pagination, setPagination] = useState(1);
  const [movieList, setMovieList] = useState<any[]>([]);

  useEffect(() => {
    fetchingMoviesData();
  }, [limit, pagination]);

  const fetchingMoviesData = async () => {
    const response = await MovieActions.getMovies(limit, pagination);
    if (response?.success) {
      setMovieList(response?.data.movies);
    }
  };

  const { removeCurrentUser } = Utils;
  const handleLogout = () => {
    removeCurrentUser();
    navigate("/auth");
  };

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>Prev</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getMovieList();
        console.log(movieData);

        setMovies(movieData?.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [movies]);

  const { t } = useTranslation("translation", {
    keyPrefix: "MovieList",
  });
  const cardStyle = {
    borderRadius: "12px",
    background: "var(--Card-color, #092C39)",
    backdropFilter: "blur(100px)",
    border: "none",
    padding: "10px",
    // height: "400px",
  };
  return (
    <>
      <div className="movies-container">
        <div className="custom-container">
          <div className="heading-movies">
            <div className="add-movie">
              <h2>{t("My_Movies")}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={() => navigate("/app/create")}
              >
                <g clip-path="url(#clip0_3_576)">
                  <path
                    d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_576">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="logout-section" onClick={handleLogout}>
              <p>{t("Logout")}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_6_82)">
                  <path
                    d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_82">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="movies-card">
            <Row gutter={[16, 16]}>
              {movieList.map((movie) => (
                <Col key={movie._id} xs={24} sm={12} md={6} lg={6}>
                  <Card
                    hoverable
                    style={{ ...cardStyle }}
                    cover={
                      <img
                        alt="example"
                        className="card-image"
                        src={movie.poster}
                      />
                    }
                  >
                    <Meta
                      title={movie.title}
                      description={movie.year}
                      className="card-content"
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className="pagination-section">
            <Pagination
              total={2}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSize={1}
              itemRender={itemRender}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
