import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserAddOutlined,
        LockOutlined } from "@ant-design/icons"; 

import {emailValidation,
    minLengthValidation} from "../../../utils/formValidation";
import "./RegisterForm.scss";

export default function RegisterForm(){

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    })

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    })

    const changeForm = (e) => {
        if(e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            })
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    }

    const inputValidation = e => {
        const { type, name } = e.target

        if(type === "email"){
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target)
            })
        }

        if(type === "password"){
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(e.target, 6)
            })
        }

        if(type === "checkbox"){
            setFormValid({
                ...formValid,
                [name]: e.target.checked
            })
        }
    }

    const register = e => {
        
        const { email, password, repeatPassword, privacyPolicy} = formValid

        const emailVal = inputs.email
        const passwordVal = inputs.password
        const repeatPasswordVal = inputs.repeatPassword
        const privacyPolicyVal = inputs.privacyPolicy

        if(!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal){
            notification.error({
                message: "Todos los campos son obligatorios"
            })
        } else {
            if(passwordVal !== repeatPasswordVal){
                notification.error({
                    message: "Las contraseñas tienen que ser iguales"
                })
            } else {

            }
        }
    }

    return (
        <Form className="register-form" onFinish={register} onChange={changeForm}>
            <Form.Item>
                <Input 
                    prefix={<UserAddOutlined style={{ color: "rgba(0,0,0,.25)"}} />}
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    className="register-form__input"
                    value={inputs.email}
                    onChange={inputValidation}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    value={inputs.password}
                    onChange={inputValidation}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="repeatPassword"
                    placeholder="repetir Contraseña"
                    className="register-form__input"
                    value={inputs.repeatPassword}
                    onChange={inputValidation}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                name="privacyPolicy"
                checked={inputs.privacyPolicy}
                onChange={inputValidation}>
                    He leido y acepto la politica de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}