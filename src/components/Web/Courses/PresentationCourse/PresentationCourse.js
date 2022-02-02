import React from "react";
import AcademyLogo from "../../../../assets/img/png/academy-logo.png";

import "./PresentationCourse.scss";

export default function PresentationCourse(){
    return(
        <div className="presentation-course">
            <img src={AcademyLogo} alt="Cursos de Academia" />
            <p>
                En Udemy vas a encontrar los mejores cursos online de desarrollo web.
                Unete a nosotros y empiza tu camino como desarrollador web o desarrollador CMS.
                Sinceramente, estos cursos son el tipo de contenido que a mi me hubiera gustado
                encontrar cuando empce en el mundo de la programación.
            </p>
            <p>
                ¡Echale un vistazo y aprovecha las ofertas!
            </p>
        </div>
    )
}