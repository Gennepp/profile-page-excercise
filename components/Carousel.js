import React from 'react';
import 'antd/dist/antd.css';
import '/Users/kanchanok/Desktop/app-name/index.css';
import { Carousel, Image } from 'antd';

const contentStyle = {
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#364d79',
};

const Carouselx = () => {
    return (
        <Carousel autoplay>
            {/* <div style={contentStyle}>
                <Image src= "./img/genhead.png" ></Image>
                {/* <h3 style={contentStyle}>1</h3> 
             </div> */} 
            <Image src = "./img/Head01.png" style = {contentStyle}> </Image>
            <div>
            <Image src = "./img/Head02.png" style = {contentStyle}> </Image>
                {/* <h3 style={contentStyle}>2</h3> */}
            </div>
            {/* <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div> */}
        </Carousel>


  
);

};


export default Carouselx


