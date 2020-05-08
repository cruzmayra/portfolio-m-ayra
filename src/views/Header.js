import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
	return(
		<header>
			<div className="container header-container">
				<div className='logo'>
					<Link to='/'>mayraCruz</Link>
				</div>
				<nav>
					<Link to="/sobre-mi" className="nav-item">Sobre mí</Link>
				</nav>
			</div>
		</header>
	)
}