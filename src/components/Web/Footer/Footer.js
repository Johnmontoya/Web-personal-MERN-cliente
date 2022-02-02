import React from "react";
import { Layout, Row, Col } from "antd"; 
import MyInfo from "./MyInfo";
import Navigation from "./Navigation";
import Newsletter from "../Newsletter";

import "./Footer.scss";

export default function Footer(){
    const { Footer } = Layout;


    return(
        <Footer className="footer">
            <Row>
                <Col md={4} />
                <Col md={16}>
                    <Row>
                        <Col md={8}> <MyInfo /> </Col>
                        <Col md={8}> <Navigation /> </Col>
                        <Col md={8}> <Newsletter /> </Col>
                    </Row>
                    <Row className="footer__copyright">
                        <Col md={12}>
                            2022 ALL RIGHTS RESERVED
                        </Col>
                        <Col md={12}>
                            JOHNMONTOYA | DESARROLLADOR WEB
                        </Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </Footer>
    )
}