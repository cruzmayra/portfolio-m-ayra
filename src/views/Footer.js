import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer>
            <section className="container">
                <h3 className="title">Hey!</h3>
                <div className="column-container">
                    <div className="first-column">
                        <div>
                            <p>Gracias por llegar al final de esta página. Si quieres saber más de mí o sobre lo qyue estoy trabajando, consulta los enlaces de la derecha.</p>
                        </div>
                        <div>
                            <p>
                                Alternativamente, mira esta elegante hoja de papel.
                                <br></br>
                                <Link to="#">Descarga mi CV</Link>
                            </p>
                        </div>
                    </div>
                    <div className="second-column">
                        <div>
                            <p>Mantente en contacto</p>
                            <a href="tomail:velazquez.leonora@gmail.com">micorreo</a>
                        </div>
                        <div>
                            <p>Encuentrame también en:</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
