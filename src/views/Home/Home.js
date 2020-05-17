import React from 'react'
import { Hero } from './components/Hero'
import {myWork} from './../../resources/my-work'

export const Home = () => {
    return (
        <div>
            <div className="container">
                <Hero />
                <div className="masonry">
                    <h2 className='title'>Mi trabajo</h2>
                    {
                        Object.values(myWork).map((item) => {
                            return <div className='item'>
                                {
                                    item.title
                                }
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}