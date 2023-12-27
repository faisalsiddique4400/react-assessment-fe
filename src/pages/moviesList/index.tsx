import React from 'react';
import { Col, Row, Card, Pagination, PaginationProps } from 'antd';
import './index.scss';

const { Meta } = Card;

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Prev</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

const MoviesList = () => {
  const cardStyle = {
    borderRadius: '12px',
    background: 'var(--Card-color, #092C39)',
    backdropFilter: 'blur(100px)',
    border: 'none',
    padding: '10px'
  };
  return (
    <div className='movies-container'>
      <div className='custom-container'>
        <div className='heading-movies'>
          <h2>My movies</h2>
          <p>Logout</p>
        </div>
        <div className='movies-card'>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test-new.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test-1.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test-new.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test-1.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test-new.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test-1.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Card
                hoverable
                style={{ ...cardStyle }}
                cover={<img alt="example" src="/images/test-new.svg" />}
              >
                <Meta title="Movie" description="2021" className='card-content' />
              </Card>
            </Col>
          </Row>
        </div>
        <div className='pagination-section'>
          <Pagination total={2}
            itemRender={itemRender}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSize={1}
          />
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
