import React from "react";
import LogoWhite from "../../../../assets/img/png/logo.png";
import SocialLinks from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo(){
    return (
        <div className="my-info">
            <img src={LogoWhite} alt="logo" />
            <h4>
                Entra en el mundo del desarrollo web, deja que tu 
                imaginacion explore el poder del control.
            </h4>
            <SocialLinks />
        </div>
    )
}