import React, { createContext, useState } from 'react'

const initialState = {
    work: {
        "dlr-site": {
            "title": "dlR site",
            "period": "2019",
            "description": [
                "Proyecto nacido de la necesidad de alinear la imagen del sitio web con los valores de la empresa y su nueva manera de hacer investigación de mercados."
            ],
            "link": "https://delarivagroup.com/",
            "source-code": false,
            "code-link": "",
            "previewImage": "dlRsiteCard.jpg",
            "heroImage": "dlRsiteHero.jpg"
        },
        "purrgram": {
            "title": "Purrgram",
            "period": "noviembre 2019",
            "description": [
                "Purrrgram es una pequeña aplicación web que te permite ver las más bellas imágenes de gatos en internet y guardar en tu perfil tus favoritas."
            ],
            "link": "https://samaya-prueba-frontend-b01vh8zor.now.sh/",
            "source-code": true,
            "code-link": "https://github.com/cruzmayra/purrgram-project",
            "previewImage": "purrgramCard.jpg",
            "heroImage": "purrgramHero.jpg"
        },
        "lab-car": {
            "title": "LabCar",
            "period": "junio 2018",
            "description": [
                "Proyecto individual que replica la página de Lab-Car con la utilización, en ese momento, por primera vez de un framework (Bootstrap) y la aplicación del responsive design."
            ],
            "link": "https://cruzmayra.github.io/lab-car-boilerplate/",
            "source-code": true,
            "code-link": "https://github.com/CruzMayra/lab-car-boilerplate",
            "previewImage": "labCarCard.jpg",
            "heroImage": "labCardHero.jpg"
        },
        "pokedex": {
            "title": "Pokédex",
            "period": "abril 2018",
            "description": [
                "Aplicación que emula la enciclopedia virtual que los entrenadores llevan consigo en la serie, para consultar las fichas de las diversas especies Pokémon.",
                "Proyecto individual que hace uso de una GrahpQL API para realizar una sola petición por medio de jQuery. Aprovecha el manejo del DOM para crear de manera dinámina los modales con la información particular de cada pokémon."
            ],
            "link": "https://cruzmayra.github.io/pokedex/",
            "source-code": true,
            "code-link": "https://github.com/CruzMayra/pokedex",
            "previewImage": "pokedexCard.jpg",
            "heroImage": "pokedexHero.jpg"
        }   
    },
    me: {
        "sobre-mi": {
            "title": "Sobre mí",
            "period": "",
            "description": [],
            "link": "",
            "source-code": true,
            "code-link": "",
            "previewImage": "",
            "heroImage": ""
        }   
    }
}

export const PortfolioContext = createContext(initialState)

export const PortfolioProvider = ({children}) => {
    const [work, setWork] = useState(initialState.work)
    const [me, setMe] = useState(initialState.me)

    return (
        <PortfolioContext.Provider value={{work, me}}>
            {children}
        </PortfolioContext.Provider>
    )
}
