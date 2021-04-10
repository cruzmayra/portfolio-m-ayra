import React from 'react'

export const Bio = () => {
  return (
    <section id="bio">
      <h2 className='title'>Acerca de mí</h2>
        <p>
        Soy desarrolladora frontend radicada en Ciudad de México, tengo dos años desarrollando páginas y aplicaciones web.
        </p>
        <p>
          He trabajado con herramientas como Javascript, HTML, CSS. He construido SPA con Reactjs, React Hooks y React Router. También he creado sitios con WordPress, uno de ellos con un tema a la medida. Tengo conocimientos de PHP trabajando con Laravel.
        </p>
        <p>
          Soy egresada de la quinta generación de <a href="https://www.laboratoria.la/" target="_blank" rel="noopener noreferrer">Laboratoria</a> México, con especialización en Desarrollo Web Frontend. Antes de eso trabaje como asistente y auxiliar administrativa.
        </p>
        <p>
          Me gusta encontrar inspiración en el trabajo de los demás y aprender por mi cuenta.
        </p>
        <div className="get-cv">
          <a href={'/Mayra-Cruz-Resume.pdf'}><button >DESCARGA MI CV</button></a>
          
        </div>
    </section>
  )
}
