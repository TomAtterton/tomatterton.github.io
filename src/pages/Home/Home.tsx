import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa";



const Home = ({name = 'Tom Atterton', jobTitle = 'Mobile Developer'}) =>
	<div className='container'>
		<div className='content'>
		<span className='name'>{name}</span>
		<span className='jobTitle'>{jobTitle}</span>
		<>
			<div className="socialLinks">
				<a className='socialLink' href={"https://github.com/TomAtterton"} target="_blank" rel="noreferrer">
					<FaGithub/>
				</a>
				<a className='socialLink' href={"https://www.linkedin.com/in/tom-atterton-48a84274/"} target="_blank" rel="noreferrer">
					<FaLinkedin/>
				</a>
			</div>
		</>
		</div>
	</div>


export default Home
