import React, { useContext } from 'react'
import { PortfolioContext } from './../../../PortfolioContext'

export const ListWork = () => {
    const { work } = useContext(PortfolioContext)

    return (
        <React.Fragment>
            {
                Object.values(work).map((item) => {
                    return <WorkCard
                        key={item.title}
                        title={item.title}
                        period={item.period}
                        previewImage={item.previewImage} />
                })
            }
        </React.Fragment>
    )
}

const WorkCard = ({title, period, previewImage}) => {

    return (
        <div className="work-card">
            <div className="work-header">
                <img src={require(`./../../../resources/images/${previewImage}`)} alt={title} />
            </div>
            <div className="work-body">
                <h3>{title}</h3>
                <p>{period}</p>
            </div>
        </div>
    )
}
