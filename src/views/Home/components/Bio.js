import React from 'react'

export const Bio = () => {
  return (
    <section id="bio">
      <h2 className='title'>Acerca de mí</h2>
        <p>
        Soy desarrolladora frontend radicada en Ciudad de México, tengo experiencia desarrollando sitios y aplicaciones web utilizando HTML, CSS y JavaScript; algunos con Reactjs y otros tantos con WordPress.
        </p>
        <p>
          El último año he comenzado a trabajar con PHP y Laravel, lo que me ha permitido satisfacer mi deseo de crecimiento constante.
        </p>
        <p>
          Soy egresada de la quinta generación de <a href="https://www.laboratoria.la/" target="_blank" rel="noopener noreferrer">Laboratoria</a> México, con especialización en Desarrollo Web Frontend. Antes de eso trabaje como asistente y auxiliar administrativa.
        </p>
        <p>
          Me gusta encontrar inspiración en el trabajo de los demás y aprender por mi cuenta.
        </p>
        <div className="get-cv">
          <a href={'/Mayra-Cruz-Resume.pdf'} target={"_blank"} rel={"noreferrer"}><button >DESCARGA MI CV</button></a>
          
        </div>
    </section>
  )
}
