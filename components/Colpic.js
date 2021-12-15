import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '/Users/kanchanok/Desktop/app-name/index.css';
import { Row, Col, Button, Modal, Image, } from 'antd';

const Colpics = () => {


    return (

        <Row >
            

            <Image.PreviewGroup>
                <Col style={colStyle} >
                    <Image src="./img/Cat2.jpg" style={Pic}></Image>
                </Col>

                <Col style={colStyle1}>
                    <Image src="./img/Cat.JPG" style={Pic1}></Image>
                </Col>

                <Col style={colStyle2}>
                    <Image src="./img/Cat3.JPG" style={Pic2}></Image>
                </Col>

                <Col style={colStyle3}>
                    <Image src="./img/Cat4.JPG" style={Pic3}></Image>
                </Col>
 
            </Image.PreviewGroup>
        </Row>

    );
}

const Pic = {
    width: '170px',
    height: '220px',
    marginTop: '20px',
    marginLeft: '60px'
};

const Pic1 = {
    width: '170px',
    height: '220px',
    marginTop: '20px',
    marginLeft: '60px'
};

const Pic2 = {
    width: '170px',
    height: '220px',
    marginTop: '20px',
    marginLeft: '60px'
};

const Pic3 = {
    width: '170px',
    height: '220px',
    marginTop: '20px',
    marginLeft: '60px'
};


const colStyle = {
    width: '260px',
    height: '260px',
    textAlign: 'center',
    background: '#ee582a',
    borderRadius: '100px',
    border: '2px solid black',
    marginTop: '20px',
    marginLeft: '120px'
};

const colStyle1 = {
    width: '260px',
    height: '260px',
    textAlign: 'center',
    background: '#f186bb',
    borderRadius: '100px',
    border: '2px solid black',
    marginTop: '20px',
    marginLeft: '50px'
};

const colStyle2 = {
    width: '260px',
    height: '260px',
    textAlign: 'center',
    background: '#56c7ae',
    borderRadius: '100px',
    border: '2px solid black',
    marginTop: '20px',
    marginLeft: '50px'
};

const colStyle3 = {
    width: '260px',
    height: '260px',
    textAlign: 'center',
    background: '#f6bd40',
    borderRadius: '100px',
    border: '2px solid black',
    marginTop: '20px',
    marginLeft: '50px'
};

const btn = {

    height: '50px',
    color: '#fff',
    // lineHeight: '260px',
    textAlign: 'center',
    background: '#2241e5',
    borderRadius: '20px',
    border: '2px solid black',
    // marginTop: '50px'
};



export default Colpics