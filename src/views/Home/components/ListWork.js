import React from 'react'

export const ListWork = ({items}) => {

    return (
        <React.Fragment>
            {
                Object.values(items).map((item, index) => {
                    return <WorkCard
                        key={item.title}
                        info={item} />
                })
            }
        </React.Fragment>
    )
}

const WorkCard = ({info}) => {
    const { previewImage, title, link, sourceCode, codeLink } = info
    return (
        <div className="work-card">
            <div className="work-header">
                <a href={link} target="_blank">
                    <img src={require(`./../../../resources/images/${previewImage}`)} alt={title} />
                </a>
            </div>
            <div className="work-body">
                <a href={codeLink}
                    target="_blank"
                    title={sourceCode ? "Código fuente" : ''}
                    className={sourceCode ? '' : 'isDisabled'}>
                    <h3>
                        {title}
                    </h3>
                </a>
            </div>
        </div>

    )
}
