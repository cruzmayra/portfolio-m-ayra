import React from 'react'
import { ListWork } from './ListWork'

export const MasonryLayout = ({items}) => {

    return (
        <section className="masonry">
            <h2 className='title'>Mi trabajo</h2>
            <ListWork items={items}/>
        </section>
    )
}