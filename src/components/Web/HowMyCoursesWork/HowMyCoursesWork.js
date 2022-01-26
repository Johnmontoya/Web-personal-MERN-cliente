import React from "react";
import { Row, Col, Card } from "antd";
import { ClockCircleOutlined, 
        KeyOutlined, 
        MessageOutlined,
        UserOutlined,
        DollarCircleOutlined,
        CheckCircleOutlined  } from "@ant-design/icons";
import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork(){
    return(
        <div>
            <Row className="how-my-courses-work">
                <Col lg={24} className="how-my-courses-work__title">
                    <h2>¿Como funcionan mis cursos?</h2>
                    <h3>
                        Cada curso cuenta con contenido bajo la web de Udemy, activa las 24 
                        horas del dia los 365 dias del año.
                    </h3>
                </Col>
                <Col lg={4} />
                <Col lg={16}>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardInfo 
                                icon={<ClockCircleOutlined />}
                                title="Cursos y Clases" 
                                description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion de 10min"
                            />
                        </Col>
                        <Col md={8}>
                            <CardInfo 
                                icon={<KeyOutlined />}
                                title="Acceso las 24/7" 
                                description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion de 10min"
                            />
                        </Col>
                        <Col md={8}>
                            <CardInfo 
                                icon={<MessageOutlined />}
                                title="Aprendizaje colaborativo" 
                                description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion de 10min"
                            />
                        </Col>
                    </Row>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardInfo 
                                icon={<UserOutlined />}
                                title="Mejora tu perfil" 
                                description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion de 10min"
                            />
                        </Col>
                        <Col md={8}>
                            <CardInfo 
                                icon={<DollarCircleOutlined />}
                                title="Precios bajos" 
                                description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion de 10min"
                            />
                        </Col>
                        <Col md={8}>
                            <CardInfo 
                                icon={<CheckCircleOutlined />}
                                title="Certificados de finalización" 
                                description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion de 10min"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} />
            </Row>
        </div>
    )
}

function CardInfo(props){
    const { icon, title, description } = props;
    const { Meta } = Card;

    return (
        <Card className="how-my-courses-work__card">
            {icon}
            <Meta title={title} description={description} />
        </Card>
    )
}