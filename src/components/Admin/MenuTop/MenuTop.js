import React from "react";

import { Button } from "antd";
import { MenuUnfoldOutlined, 
    PoweroffOutlined, 
    MenuFoldOutlined } from "@ant-design/icons"

import Logo from '../../../assets/img/png/logo.png';
import './MenuTop.scss';

export default function MenuTop(props){

    const { menuCollapsed, setMenuCollapsed} = props

    const menuNavbar = () => {
        setMenuCollapsed(!menuCollapsed)
    }

    return(
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" 
                src={Logo}
                alt="logo"/>
                <Button type="link" onClick={menuNavbar}>                    
                    {
                        menuCollapsed ?
                        <MenuUnfoldOutlined /> :
                        <MenuFoldOutlined />
                        
                    }
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link">
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}