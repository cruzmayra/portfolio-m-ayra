import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PortfolioContext } from '../../PortfolioContext'

export const Page = () => {
    let { id } = useParams()
    const { work } = useContext(PortfolioContext)
    const project = work[id]
    return (
        <React.Fragment>
            <section className="hero-page">
                <img src={require(`./../../resources/images/${project.heroImage}`)} />
            </section>
            <section className="container">
                <div className="description-page">
                    <div className="page-column-one">
                        <h1 className="title">{project.title}</h1>
                    </div>
                    <div className="page-column-two">
                        {
                            project.description.map((parrafo, index) => {
                            return <p key={index}>{parrafo}</p>
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}