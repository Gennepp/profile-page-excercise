import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '/Users/kanchanok/Desktop/app-name/index.css';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const Subcard = () => {
    return (
        <Col span={22} offset={2}>
            <Row>
                <Col span= {8} offset={1}  >
                    <Card

                        hoverable
                        style={{ width: 240 }}
                        cover={<img src="/img/Cof.jpg" />}
                    >
                        <Meta title="Create website" description="https://kanchanok61010071.herokuapp.com/" />
                        {/* <a href="https://kanchanok61010071.herokuapp.com/"></a> */}
                    </Card>

                </Col>

                <Col span= {8} >
                    <Card

                        hoverable
                        style={{ width: 240 }}
                        cover={<img src="/img/Dic.jpg" />}
                    >
                        <Meta title="Design UX/UI and develop" description="Slang dictionary app" />
                    </Card>

                </Col>

                <Col  >
                    <Card

                        hoverable
                        style={{ width: 240 }}
                        cover={<img src="/img/Mov.jpg" />}
                    >
                        <Meta title="Design UX/UI " description=" for Movie booking app" />
                    </Card>

                </Col>
            </Row>
        </Col>
    );
};

export default Subcard