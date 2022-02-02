import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Rate, notification } from "antd";
import { getCoursesDataUdemyApi } from "../../../../api/courses";

import "./CourseList.scss";

export default function CourseList(props){
    const { courses } = props;
    //console.log(courses)


    return(
        <div className="courses-list">
            <Row>
                {courses.map(course => (
                    <Col md={8} key={course._id} className="courses-list__course">
                        <Course course={course} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

function Course(props){
    const { course } = props;
    const [courseInfo, setCourseInfo] = useState({});
    const [urlCourse, setUrlCourse] = useState("")
    const { Meta } = Card;

    useEffect(() => {
        getCoursesDataUdemyApi(course.idCourse)
            .then(response => {
                if(response?.code !== 200){
                    notification.warning({
                        message: response.message
                    }) 
                } else {
                    setCourseInfo(response.data)
                    mountUrl(response.data.url)
                }
            })
            .catch(() => {
                notification.error({
                    message: "Error del servidor, intentelo mas tarde."
                })
            })
    }, [course])

    const mountUrl = url => {
        if(!course.link){
            const baseUrl = `https://www.udemy.com${url}`;
            const finalUrl = baseUrl + (course.coupon ? `?couponCode=${course.coupon}` : "")
            setUrlCourse(finalUrl)
        } else {
            setUrlCourse(course.link)
        }
    }

    return (
        <a href={urlCourse} target="_blank" rel="noopener noreferrer">
            <Card
                cover={<img src={courseInfo.image_480x270} alt={courseInfo.title} />}
            >
                <Meta title={courseInfo.title} description={courseInfo.headline} />
                <Button>
                    Entrar en el curso
                </Button>
                <div className="courses-list__course-footer">
                    <span>{course.price ? `${course.price}` : courseInfo.price}</span>
                    <div>
                        <Rate disabled defaultValue={5} />
                    </div>
                </div>
            </Card>
        </a>
    )
}