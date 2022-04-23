import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
    return (
        <footer>
            <section className="container">
                <h3 className="title">Mantente en contacto</h3>
                <div className="column-container">
                    
                    <p>Gracias por llegar al final <span aria-label="Imagen de destellos" role="img">✨</span>. Si quieres saber más de mí, lo que estoy aprendiendo, en qué estoy trabajando o colaborando...</p>
                    
                    <p>Enviame un correo a: <a href="tomail:yo.mera@mayracruz.com.mx">yo.mera@mayracruz.com.mx</a></p>

                    <p>Mira mi CV <a href={'/Mayra-Cruz-Resume.pdf'} target={"_blank"} rel={"noreferrer"}>en este enlace.</a></p>
                    
                    <p>O bien, encuentrame acá:</p>
                    <div className='footer-links-container'>
                        <a className='footer-link' href='https://www.linkedin.com/in/cruz-mayra/' target={"_blank"} rel={"noreferrer"}>
                            <FontAwesomeIcon className='link-icon' icon={['fab', 'linkedin-in']} />
                        </a>
                        <a className='footer-link' href='https://github.com/cruzmayra' target={"_blank"} rel={"noreferrer"}>
                            <FontAwesomeIcon className='link-icon' icon={['fab', 'github']} />
                        </a>
                        <a className='footer-link' href='https://codepen.io/m_ayra' target={"_blank"} rel={"noreferrer"}>
                            <FontAwesomeIcon className='link-icon' icon={['fab', 'codepen']} />
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}
