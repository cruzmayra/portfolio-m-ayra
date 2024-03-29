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
            "sourceCode": false,
            "codeLink": "",
            "previewImage": "dlRsiteCard.jpg",
            "heroImage": "dlRsiteHero.jpg"
        },
        "purrgram": {
            "title": "Purrgram",
            "period": "noviembre 2019",
            "description": [
                "Purrgram es una aplicación web que te muestra un feed con las más bellas imágenes de gatos del internet acompañadas de una breve descripción que te facilitara saber si ese gato es ideal para ti. Si encuentras al indicado puedes conservar su foto marcandola como favorito y verla cuando quieras.",
                "Creada con la libreria React Native Web, obtiene las imágenes de gatos a través de la API REST de Unsplash. Surge de un ejercicio para practicar React Hooks y dar primeros pasos para crear aplicaciones móviles. Para no gestionar, de momento, un backend el login y los datos del usuario, como nombre y favoritos, se maneja con localStorage pero permite a diferentes 'usuarios' manejar independientemente su información."
            ],
            "link": "https://samaya-prueba-frontend-b01vh8zor.now.sh/",
            "sourceCode": true,
            "codeLink": "https://github.com/cruzmayra/purrgram-project",
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
            "sourceCode": true,
            "codeLink": "https://github.com/CruzMayra/lab-car-boilerplate",
            "previewImage": "labCarCard.jpg",
            "heroImage": "labCarHero.jpg"
        },
        "pokedex": {
            "title": "Pokédex",
            "period": "abril 2018",
            "description": [
                "Aplicación que emula la enciclopedia virtual que los entrenadores llevan consigo en la serie, para consultar las fichas de las diversas especies Pokémon.",
                "Proyecto individual que hace uso de una GrahpQL API para realizar una sola petición por medio de jQuery. Aprovecha el manejo del DOM para crear de manera dinámina los modales con la información particular de cada pokémon."
            ],
            "link": "https://cruzmayra.github.io/pokedex/",
            "sourceCode": true,
            "codeLink": "https://github.com/CruzMayra/pokedex",
            "previewImage": "pokedexCard.jpg",
            "heroImage": "pokedexHero.jpg"
        },
        "asociacion-medica": {
            "title": "Web AMCMABC",
            "period": "2020",
            "description": [
                ""
            ],
            "link": "https://www.asociacionmedica-abc.com/",
            "sourceCode": false,
            "codeLink": "",
            "previewImage": "abcCard.jpg",
            "heroImage": "abcHero.jpg"
        },
    },
    me: {
        "sobre-mi": {
            "title": "Sobre mí",
            "period": "",
            "description": [
                "Hola, soy Mayra. Soy desarrolladora frontend radicada en Ciudad de México, tengo dos años desarrollando páginas y aplicaciones web. También tengo cuatro años de experiencia en labores administrativas, con Excel como mi principal herramienta.",
                "He trabajado con herramientas como Javascript, HTML, CSS. He construido SPA con Reactjs, React Hooks y React Router. También he creado sitios con WordPress, uno de ellos con un tema a la medida. Tengo conocimientos de PHP trabajando con Laravel.",
                `Recientemente di una charla en el Meetup de la Comunidad de WordPress en Puebla.`,
                "Soy egresada de la quinta generación de Laboratoria México, con especialización en Desarrollo Web Frontend. Antes de eso trabaje como Asistente y auxiliar administrativa.",
                "Me gusta encontrar inspiración en el trabajo de los demás y aprender por mi cuenta."
            ],
            "link": "",
            "sourceCode": true,
            "codeLink": "",
            "previewImage": "meCard.jpg",
            "heroImage": "meHero.jpg"
        }   
    }
}

export const PortfolioContext = createContext(initialState)

export const PortfolioProvider = ({children}) => {
    const [work] = useState(initialState.work)
    const [me] = useState(initialState.me)

    return (
        <PortfolioContext.Provider value={{work, me}}>
            {children}
        </PortfolioContext.Provider>
    )
}
