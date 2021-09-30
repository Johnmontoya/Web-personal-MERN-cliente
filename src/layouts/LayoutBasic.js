import React from "react";
import { Route, Switch } from "react-router-dom"
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props){

    const { routes } = props
    const { Content, Footer } = Layout

    return(
        <Layout>
            <Layout>
                <Content>
                    <LoadRouters routes={routes} {...props} />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
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