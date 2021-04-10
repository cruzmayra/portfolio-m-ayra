import React, { useContext } from 'react'
import { Hero } from './components/Hero'
import { Bio } from './components/Bio' 
import { MasonryLayout } from './components/MasonryLayout'
import { PortfolioContext } from './../../PortfolioContext'

export const Home = () => {
    const { work } = useContext(PortfolioContext)

    return (
        <div className="container">
            <Hero />
            <Bio />
            <MasonryLayout items={work} title={'Mi trabajo'} />
        </div>
    )
}