import React, { useEffect, useState } from "react";
import { Col, Row, Card, Pagination, PaginationProps } from "antd";
import "./index.scss";
import MovieActions from "../../redux/middleware/movies";
import { useTranslation } from "react-i18next";

const { Meta } = Card;

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

const MoviesList = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "MovieList",
  });
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

  const cardStyle = {
    borderRadius: "12px",
    background: "var(--Card-color, #092C39)",
    backdropFilter: "blur(100px)",
    border: "none",
    padding: "10px",
  };
  return (
    <div className="movies-container">
      <div className="custom-container">
        <div className="heading-movies">
          <h2>{t("My_Movies")}</h2>
          <p>{t("Logout")}</p>
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
            itemRender={itemRender}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSize={1}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
