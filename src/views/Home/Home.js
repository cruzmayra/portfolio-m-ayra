import React from 'react'
import { Hero } from './components/Hero'
import { MasonryLayout } from './components/MasonryLayout'

export const Home = () => {

    return (
        <div className="container">
            <Hero />
            <MasonryLayout />
        </div>
    )
}