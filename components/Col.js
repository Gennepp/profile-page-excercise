import React, { useState } from 'react';

// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '/Users/kanchanok/Desktop/app-name/index.css';
import { Row, Col, Button, Modal, Image, } from 'antd';

import {
    MailOutlined, 
    PhoneOutlined,
    InstagramOutlined,
    GithubOutlined,
    VideoCameraOutlined,
    HeartOutlined,
    GlobalOutlined,
    CoffeeOutlined
} from '@ant-design/icons';





const Colunderhead = () => {
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)

    return (

        <Row >
            <Modal
                visible={visible}
                title="Profile"
                onCancel={() => { setVisible(false) }}
                footer={null}
            >

                <Image src="/img/genprof.JPG" />
                <p> My name is Kanchanok Hlowngam </p>
                <p><MailOutlined /> kanchanok5595@gmail.com</p>
                <p><PhoneOutlined /> 081-1915595 </p>
                <p><InstagramOutlined />  Gennepp</p>
                {/* <p><GithubOutlined /> https://github.com/Gennepp </p> */}
                {/* <a href =" ">Facebook</a> */}
                <a href ="https://github.com/Gennepp "><GithubOutlined /> Gennepp</a>
                
            </Modal>

            <Modal
                visible={visible1}
                title="Education"
                onCancel={() => { setVisible1(false) }}
                footer={null}
            >     <Row justify="center">
                    <Col span={15} style={{textAlign: "center"}}><Image src="/img/kmitl.png" width={300} /></Col>
                    <p> </p>
                    <Col span={15} style={{textAlign: "center"}}>
                        <p>4th year Information Engineering student </p>
                        <p>King Mongkut's Institute of Technology Ladkrabang </p></Col>
                </Row>

            </Modal>

            <Modal
                visible={visible2}
                title="Hobbies"
                onCancel={() => { setVisible2(false) }}
                footer={null}
            >
                
                <p><VideoCameraOutlined /> Watching movies</p>
                <p><HeartOutlined /> Pet my cat</p>
                <p><GlobalOutlined /> Plant Flowers</p>
                <p><CoffeeOutlined /> Cooking</p>
            </Modal>


            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }} style={colStyle} >
                <Button style={btn} onClick={() => { setVisible(true) }} >Profile</Button>
            </Col>

            <Col xs={{ span: 15, offset: 1 }} lg={{ span: 6, offset: 2 }} style={colStyle1} >
                <Button style={btn}  onClick={() => { setVisible1(true) }} >Education</Button>
            </Col>

            <Col xs={{ span: 15, offset: 1 }} lg={{ span: 6, offset: 2 }} style={colStyle2}>
                <Button style={btn} onClick={() => { setVisible2(true) }} >Hobbies</Button>
            </Col>

            {/* <Col xs={{ span: 15, offset: 1 }} lg={{ span: 6, offset: 2 }} style={colStyle3}>
                <Button style={btn} onClick={() => { setVisible(true) }} >Gen ka</Button>
            </Col> */}

        </Row>

    );
}


const colStyle = {
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#f6bd40',
    borderRadius: '20px',
    border: '2px solid black',
    marginTop: '50px'
};

const colStyle1 = {
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#f186bb',
    borderRadius: '20px',
    border: '2px solid black',
    marginTop: '50px'
};

const colStyle2 = {
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#56c7ae',
    borderRadius: '20px',
    border: '2px solid black',
    marginTop: '50px'
};

const btn = {

    height: '50px',
    color: '#fff',
    // lineHeight: '260px',
    textAlign: 'center',
    background: '#2241e5',
    borderRadius: '20px',
    border: '1px solid black',
    // marginTop: '50px'
};

// const colStyle3 = {
//     width : '50%',
//     height: '20px',
//     lineHeight: '260px',
//     textAlign: 'center',
//     background: '#2241e5',
//     borderRadius: '20px',
//     border: '2px solid black',
//     marginTop: '50px'
// };

export default Colunderhead