import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { HomeOutlined } from "@ant-design/icons";

import "./MenuSider.scss";

function MenuSider(props){
    const { Sider } = Layout
    const { menuCollapsed, location } = props

    return(
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key="/admin">
                    <Link to={"/admin"}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/users">
                    <Link to={"/admin/users"}>
                        <HomeOutlined />
                        <span className="nav-text">Usuarios</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/menu">
                    <Link to={"/admin/menu"}>
                        <HomeOutlined />
                        <span className="nav-text">Menu</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/courses">
                    <Link to={"/admin/courses"}>
                        <HomeOutlined />
                        <span className="nav-text">Cursos</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/blog">
                    <Link to={"/admin/blog"}>
                        <HomeOutlined />
                        <span className="nav-text">Blog</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default withRouter(MenuSider);