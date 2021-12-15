import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '/Users/kanchanok/Desktop/app-name/index.css';;
import { Card, Col, Row } from 'antd';

const Cardcons = () => {
    return (
        <div className="site-card-wrapper">
            <Col span={22} offset={1}>
                <Row gutter={16} justify="center">
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default Cardcons


