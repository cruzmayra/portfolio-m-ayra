import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PortfolioContext } from '../../PortfolioContext'
import { meHero } from './../../resources/images/meHero.jpg'

export const Page = () => {
    let { id } = useParams()
    const { work, me } = useContext(PortfolioContext)
    const infoPage = id === 'sobre-mi' ? me[id] : work[id]
    console.log(infoPage)
    return (
        <React.Fragment>
            <section className="hero-page">
                <img src={require(`./../../resources/images/${infoPage.heroImage}`)} alt={infoPage.title}/>
            </section>
            <section className="container">
                <div className="description-page">
                    <div className="page-column-one">
                        <h1 className="title">{infoPage.title}</h1>
                    </div>
                    <div className="page-column-two">
                        {
                            infoPage.description.map((parrafo, index) => {
                            return <p key={index}>{parrafo}</p>
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}