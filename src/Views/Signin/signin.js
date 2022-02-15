//React
import React from "react";

//UI Library
import { Layout, Card, Row, Col } from "antd";

//CSS
import "./signin.css";

function Signin() {
  return (
    <Layout className="SigninLayout">
      <Row style={{ width: "100%" }} justify="center">
        <Col span={14}>
          <Card className="signinCard" bordered={false}>
          <Row style={{ width: "100%" }} justify="center">
          <Col span={12}>
            <div style={{backgroundColor:'#502989', borderRadius:"20px",height:'74vh', display:"flex", justifyContent:'center', alignItems:'center '}}>
            <h1>aple</h1>
            </div>
            
          </Col>
          <Col span={12}></Col>
          </Row>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Signin;
