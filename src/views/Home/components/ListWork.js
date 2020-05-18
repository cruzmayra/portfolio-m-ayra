import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PortfolioContext } from './../../../PortfolioContext'

export const ListWork = () => {
    const { work } = useContext(PortfolioContext)

    return (
        <React.Fragment>
            {
                Object.values(work).map((item, index) => {
                    return <WorkCard
                        key={item.title}
                        title={item.title}
                        period={item.period}
                        previewImage={item.previewImage}
                        url={Object.keys(work)[index]} />
                })
            }
        </React.Fragment>
    )
}

const WorkCard = ({title, period, previewImage, url}) => {

    return (
        <Link to={`/${url}`} className="work-card">
            <div className="work-header">
                <img src={require(`./../../../resources/images/${previewImage}`)} alt={title} />
            </div>
            <div className="work-body">
                <h3>{title}</h3>
                <p>{period}</p>
            </div>
        </Link>

    )
}
