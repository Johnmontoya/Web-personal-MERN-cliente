import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJSHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";
import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import css from "../../../assets/img/jpg/css-grid.jpg";

import "./MainCourses.scss";

export default function MainCourses(){
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourses
                            image = {reactJSHooks}
                            title = {"React Hooks"}
                            subtitle = {"Intermedio - React / javascript"}
                            link ="https://react.com"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourses
                            image = {reactNative}
                            title = {"React Native"}
                            subtitle = {"Avanzado - React / mobile"}
                            link ="https://reactnative.com"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourses
                            image = {wordPress}
                            title = {"WordPress"}
                            subtitle = {"Intermedio - WordPress"}
                            link ="https://wordpress.com"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourses
                            image = {prestaShop}
                            title = {"PrestaShop"}
                            subtitle = {"Intermedio - PrestaShop"}
                            link ="https://prestashop.com"
                        />
                    </Col>                    
                </Row>
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourses
                            image = {javaScript}
                            title = {"JavaScript Es6"}
                            subtitle = {"Bascio - javascript / es6"}
                            link ="https://javascript.com"
                        />
                    </Col>
                    <Col md={6} />
                    <Col md={6} />
                    <Col md={6}>
                        <CardCourses
                            image = {css}
                            title = {"CSS Grid"}
                            subtitle = {"Intermedio - CSS / Grid"}
                            link ="https://css.com"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
            <Col lg={24} className="home-courses__more">
                <Link to="/courses">
                    <Button>Ver más</Button>
                </Link>
            </Col>
        </Row>
    )
}

function CardCourses(props){
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title} />}
                actions={[
                    <Button>
                        Ingresar
                    </Button>
                ]}
            >
                <Meta
                    title={title}
                    subtitle={subtitle}
                ></Meta>
            </Card>
        </a>
    )
}