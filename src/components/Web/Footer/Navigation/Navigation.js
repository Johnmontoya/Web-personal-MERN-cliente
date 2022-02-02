import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { BookOutlined, CodeOutlined, DatabaseOutlined, ArrowRightOutlined } from "@ant-design/icons";

import "./Navigation.scss";

export default function Navigation(){
    return (
        <div className="navigation-footer">
            <Row>
                <Col>
                    <h3>NAVEGACIÓN</h3>
                </Col>            
            </Row>
            <Row>
                <Col md={12}>
                    <RenderListLeft />
                </Col>
                <Col md={12}>
                    <RenderListRight />
                </Col>
            </Row>
        </div>
    )
}

function RenderListLeft(){
    return (
        <ul>
            <li>
                <a href="https://cursos.online.com">
                    <BookOutlined /> Cursos Online
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <CodeOutlined /> Desarrollo Web
                </Link>
            </li>
            <li>
                <a href="https://basededatos.online.com">
                    <DatabaseOutlined /> Base de datos
                </a>
            </li>
            <li>
                <a href="https://politica.privacidad.com">
                    <ArrowRightOutlined /> Politica de privacidad
                </a>
            </li>
        </ul>
    )
}

function RenderListRight(){
    return (
        <ul>
            <li>
                <a href="https://sistemas.online.com">
                    <BookOutlined /> Sistemas / Servidores
                </a>
            </li>
            <li>
                <Link to="https://cms.online.com">
                    <CodeOutlined /> CMS
                </Link>
            </li>
            <li>
                <a href="https://portafolio.online.com">
                    <DatabaseOutlined /> Portafolio
                </a>
            </li>
            <li>
                <a href="https://cookies.online.com">
                    <BookOutlined /> Politica de Cookies
                </a>
            </li>
        </ul>
    )
}