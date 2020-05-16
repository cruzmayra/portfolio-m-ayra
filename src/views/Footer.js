import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
    return (
        <footer>
            <section className="container">
                <h3 className="title">Hey!</h3>
                <div className="column-container">
                    <div className="first-column">
                        <div>
                            <p>Gracias por llegar al final de esta página. Si quieres saber más de mí o sobre qué estoy trabajando, consulta los enlaces de la derecha.</p>
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
                            <a href="tomail:velazquez.leonora@gmail.com">velazquez.leonora@gmail.com</a>
                        </div>
                        <div>
                            <p>Encuentrame también en:</p>
                            <div className='footer-links-container'>
                                <a className='footer-link' href='https://www.linkedin.com/in/cruz-mayra/' target='_blank'>
                                    <FontAwesomeIcon className='link-icon' icon={['fab', 'linkedin-in']} />
                                </a>
                                <a className='footer-link' href='https://github.com/cruzmayra' target='_blank'>
                                    <FontAwesomeIcon className='link-icon' icon={['fab', 'github']} />
                                </a>
                                {/* <a className='footer-link' href='https://codepen.io/m_ayra' target='_blank'>
                                    <FontAwesomeIcon className='link-icon' icon={['fab', 'codepen']} />
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
