import React from "react";
import { Route, Switch } from "react-router-dom"
import { Layout, Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";

import "./LayoutBasic.scss";

export default function LayoutBasic(props){

    const { routes } = props
    const { Footer } = Layout

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
            <Footer>Footer</Footer>
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