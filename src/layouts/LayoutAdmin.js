import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import './LayoutAdmin.scss';

export default function LayoutAdmin(props){

    const { routes } = props
    const { Header, Content, Footer} = Layout

    return(
        <Layout>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <LoadRouters routes={routes} />
                </Content>
                <Footer>
                    Footer
                </Footer>
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