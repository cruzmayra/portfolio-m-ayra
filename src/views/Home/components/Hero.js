import React from 'react'

export const Hero = () => {
    return (
        <section className="hero">
            <div className="bio-container">
                <h2 className="greeting">¡Hola!</h2>
                <h1 className="main-title">Soy Mayra.</h1>
                <p className="bio">Desarrolladora frontend,</p>
                <p className="bio">radicada en CDMX.</p>
            </div>
            <div className="bio-image">
                <img
                    src={require('./../../../resources/images/eme-ayra-hero.png')}
                    alt="mujer escribiendo en una computadora"
                />
            </div>
        </section>
    )
}