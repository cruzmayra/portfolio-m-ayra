import React, { useContext } from 'react'
import { Hero } from './components/Hero'
import { MasonryLayout } from './components/MasonryLayout'
import { PortfolioContext } from './../../PortfolioContext'

export const Home = () => {
    const { work } = useContext(PortfolioContext)

    return (
        <div className="container">
            <Hero />
            <MasonryLayout items={work} title={'Mi trabajo'} />
        </div>
    )
}