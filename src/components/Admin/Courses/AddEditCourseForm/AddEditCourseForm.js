import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { KeyOutlined, GiftOutlined, DollarOutlined, LinkOutlined } from "@ant-design/icons";

import { getAccessTokenApi } from "../../../../api/auth";
import { addCourseApi, updateCourseApi } from "../../../../api/courses";

import "./AddEditCourseForm.scss";

export default function AddEditCourseForm(props){
    const { setIsVisibleModal, setReloadCourses, course } = props;
    const [ courseData, setCourseData ] = useState({})

    useEffect(() => {
        course ? setCourseData(course) : setCourseData({})
    }, [course])

    const addCourse = e => {
        if(!courseData.idCourse){
            notification.error({
                message: "El id del curso es obligatorio"
            })
        } else {
            const accesToken = getAccessTokenApi()

            addCourseApi(accesToken, courseData)
                .then(response => {
                                        
                    if(response.code === 200){
                        notification.success({
                            message: response.message
                        })
                    }else{
                        notification.warning({
                            message: response.message
                        })
                    }
                    setReloadCourses(true)
                    setIsVisibleModal(false)
                    setCourseData({})
                })
                .catch(() => {
                    notification.error({
                        message: "Error del servidor, intentalo mas tarde"
                    })
                })
        }       
    }

    const updateCourse = () => {
        const accesToken  = getAccessTokenApi()

        updateCourseApi(accesToken, course._id, courseData)
            .then(response => {
                if(response.code === 200){
                    notification.success({
                        message: response.message
                    })
                }else{
                    notification.warning({
                        message: response.message
                    })
                }
                setReloadCourses(true)
                setIsVisibleModal(false)
                setCourseData({})
            })
            .catch(() => {
                notification.error({
                    message: "Error del servidor, intentalo mas tarde"
                })
            })
    }
    
    return (
        <div className="add-edit-course-form">
            <AddEditForm 
                course={course}
                addCourse={addCourse}
                updateCourse={updateCourse}
                courseData={courseData}
                setCourseData={setCourseData}
            />
        </div>
    )
}

function AddEditForm(props){
    const { course, addCourse, updateCourse, courseData, setCourseData } = props;

    return (
        <Form className="form-add-edit" onFinish={course ? updateCourse : addCourse}>
            <Form.Item>
                <Input
                    prefix={<KeyOutlined />}
                    placeholder="ID del curso"
                    value={courseData.idCourse}
                    onChange={e => setCourseData({ ...courseData, idCourse: e.target.value})}
                    disabled={course ? true : false}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LinkOutlined />}
                    placeholder="Url del curso"
                    value={courseData.url}
                    onChange={e => setCourseData({ ...courseData, url: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<GiftOutlined />}
                    placeholder="Cupon de descuento"
                    value={courseData.coupon}
                    onChange={e => setCourseData({ ...courseData, coupon: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<DollarOutlined />}
                    placeholder="Precio del curso"
                    value={courseData.price}
                    onChange={e => setCourseData({ ...courseData, price: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    {course ? "Actualizar Curso" : "Crear Curso"}
                </Button>
            </Form.Item>
        </Form>
    )
}