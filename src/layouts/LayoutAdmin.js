import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn";

import './LayoutAdmin.scss';
import { Fragment } from "react";

export default function LayoutAdmin(props){

    const { routes } = props
    const [ menuCollapsed, setMenuCollapsed ] = useState(false)
    const { Header, Content, Footer} = Layout

    const user = null

    if(!user){
        return (
            <Fragment>
                <Redirect to="/admin/login" />
                <Route path="/admin/login" component={AdminSignIn} />
            </Fragment>
        )
    }

    return(
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed}/>
            <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px"}}>
                <Header className="layout-admin__header">
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
                </Header>
                <Content className="layout-admin__content">
                    <LoadRouters routes={routes} />
                </Content>
                <Footer className="layout-admin__footer">
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