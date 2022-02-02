import React from "react";
import { Route, Switch } from "react-router-dom"
import { Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";
import Footer from "../components/Web/Footer";

import "./LayoutBasic.scss";

export default function LayoutBasic(props){

    const { routes } = props

    return (
        <>
            <Row>
                <Col md={4} />
                <Col md={16}>
                    <MenuTop />                
                </Col>
                <Col md={4} />
            </Row>
            <LoadRouters routes={routes} {...props} />
            <Footer />
        </>
    )
}

function LoadRouters({ routes }){

    return (
        <Switch>
            {
            routes.map((routes, index) => (
                <Route 
                    key={index}
                    path={routes.path}
                    exact={routes.exact}
                    component={routes.component}
                />
            ))}
        </Switch>
    )
}