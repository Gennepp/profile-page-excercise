import React from "react";
import { Button, DatePicker, Typography, Image} from "antd";
import "../styles/antd.less";
import Carousel from "../components/Carousel.js" ;
import Col from "../components/Col.js" ;
import Div from "../components/Divider.js" ;
import Cardcons from "../components/Cardcon.js" ;


const index = () => {
  return (
    <div>
      <title> Gennepp </title>
      {/* <Typography.Text>Gen</Typography.Text> */}
      {/* <DatePicker /> */}
      {/* <Button type="default">Gen</Button> */}
      <Carousel />
      <Col />
      <Div/>
      {/* <Cardcons/> */}

    </div>

    
  );
};


export default index;
