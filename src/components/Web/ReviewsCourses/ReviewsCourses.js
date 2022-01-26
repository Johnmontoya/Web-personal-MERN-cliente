import react from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/avatar.jpg";

import "./ReviewsCourses.scss";

export default function ReviewsCourses(){
    return (
        <Row className="reviews-courses">            
            <Col lg={4} />
                <Col lg={16} className="reviews-courses__title">
                    <h2>Forma partes de los +35 mil estudiantes</h2>
                </Col>
            <Col lg={4} /> 
            
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardReview 
                            name="Alonso Campos"
                            subtitle="Alumno de Udemy"
                            avatar={AvatarPersona}
                            review="un curso excelente, no mas que decir."
                        />
                    </Col>
                    <Col md={8}>
                        <CardReview 
                            name="David Campos"
                            subtitle="Alumno de Udemy"
                            avatar={AvatarPersona}
                            review="un curso excelente, no mas que decir."
                        />
                    </Col>
                    <Col md={8}>
                        <CardReview 
                            name="Valentina Campos"
                            subtitle="Alumna de Udemy"
                            avatar={AvatarPersona}
                            review="un curso excelente, no mas que decir."
                        />
                    </Col>
                </Row>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardReview 
                            name="Felipe Campos"
                            subtitle="Alumno de Udemy"
                            avatar={AvatarPersona}
                            review="un curso excelente, no mas que decir."
                        />
                    </Col>
                    <Col md={8}>
                        <CardReview 
                            name="Cristina Campos"
                            subtitle="Alumno de Udemy"
                            avatar={AvatarPersona}
                            review="un curso excelente, bien explicado todo y muy breve en los videos."
                        />
                    </Col>
                    <Col md={8}>
                        <CardReview 
                            name="Daniela Campos"
                            subtitle="Alumna de Udemy"
                            avatar={AvatarPersona}
                            review="un curso excelente, no mas que decir, todo un profesional."
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />                   
        </Row>
    )
}

function CardReview(props){
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
        <Card className="reviews-courses__card">
            <p>{review}</p>
            <Meta 
                avatar={<Avatar src={avatar} />}
                title={name}
                description={subtitle}
            />
        </Card>
    ) 
}