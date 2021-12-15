import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '/Users/kanchanok/Desktop/app-name/index.css';
import { Divider } from 'antd';
import Card from "../components/Card.js" ;
import Colpics from "../components/Colpic.js" ;

const Div = () => {
    
    return (
  <>
    <Divider plain></Divider>
    <p> </p>
    <Divider plain> recent project
</Divider>
    <Card/>
    
    <Divider plain></Divider>
    <Divider orientation="left" plain>I'm also a CAT person</Divider>
    <Colpics/>

    
  </>
);


    };

    export default Div
