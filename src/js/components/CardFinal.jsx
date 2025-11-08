import React from "react";
import Card from "../components/Card.jsx";

const CardFinal = () => {
    let cardInformation = [
        {
            urlImageCard: "https://elements-resized.envatousercontent.com/elements-video-cover-images/624b1f70-bad8-4002-b9d3-0f76f748d32c/video_preview/video_preview_0002.jpg?w=500&cf_fit=cover&q=85&format=auto&s=67c2625160059d729c5cfb6b6ab509fd48c1a96c9c13087e8032efaaec5eb1a5",
            packagesNames: "Paquete: Semilla",
            packagesDescription: "Transforma tu idea en el esqueleto profesional de un curso[...]"
        },
        {
            urlImageCard: "https://www.bizneo.com/blog/wp-content/uploads/2020/07/Estrategia-de-Crecimiento-Empresarial.jpg",
            packagesNames: "Paquete: Crecimiento",
            packagesDescription: "Dale vida a tu estructura con actividades para tus estudiantes[...]"
        },
        {
            urlImageCard: "https://mexico.unir.net/wp-content/uploads/sites/6/2024/12/funciones-docente-universidad.jpg",
            packagesNames: "Paquete: Potencial",
            packagesDescription: "Refuerza el aprendizaje de tus alumnos con recursos clave[...]"
        },
        {
            urlImageCard: "https://www.agustinmedina.com/wp-content/uploads/676767.jpeg",
            packagesNames: "Paquete: Éxito",
            packagesDescription: "Paquete todo incluido para curso de alto impacto y calidad[...]"
        }
    ]
    return (
        cardInformation.map((item, index, array) => {
            return (
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3
                m-auto m-sm-auto m-md-auto ms-xl-3 ms-xxl-3
                text-center" >
                    <Card key={index}
                        urlImageCardProps={item.urlImageCard}
                        packagesNamesProps={item.packagesNames}
                        packagesDescriptionProps={item.packagesDescription}
                    />
                </div>
            )
        })
    )
}

export default CardFinal;