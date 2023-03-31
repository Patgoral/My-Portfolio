import self from '../img/self.png'
import mock1 from '../img/mock1.png'
import mock2 from '../img/mock2.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import {Link} from "react-router-dom";




export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']


export const info = {
	firstName: 'Pat',
	lastName: 'Goral',
	initials: 'PG', 
	position: 'a Full Stack Developer',
	selfPortrait: self, 
	gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
	baseColor: colors[0],
	miniBio: [
		{
			emoji: '💻',
			text: 'Junior Software Engineer',
		},
        {
			emoji: '🌎',
			text: 'Based in Atlanta, GA',
		},
		{
			emoji: '🚴',
			text: 'Cycling Enthusiast',
		},
	

		{
			emoji: '📧',
			text: <a href="mailto:patgoral@gmail.com">patgoral@gmail.com,</a>
		},
        {
			emoji: '📂',
			text: <Link to="/resume">Resume</Link>,
		},
	],
	socials: [
		{
			icon: '',
			label: '',
		},
		{
			icon: '',
			label: 'resume',
		},
		{
			link: 'https://www.linkedin.com/in/patgoral/',
			icon: 'fa fa-linkedin',
			label: 'linkedin',
		},
		{
			link: 'https://github.com/Patgoral',
			icon: 'fa fa-github',
			label: 'github',
		},

	
	],
	bio: "I'm a passionate problem solver with a lifelong interest in software and bicycles. Skilled in critical thinking and finding creative solutions, I have extensive experience solving complex problems from my time in the cycling world. I approach software development projects with enthusiasm and unwavering commitment to finding the best possible solution.",
	skills: {
		proficientWith: [
			'JavaScript',
			'React',
			'Git',
			'Github',
			'Bootstrap',
			'Html5',
			'Css3',
			'Express',
			'Mongoose',
			'MongoDb',
			'NodeJs',
			'Amazon S3',
		],
		exposedTo: ['Django', 'Python', 'postgreSql', 'Ruby'],
	},
	hobbies: [
		{
			label: 'Cycling',
			emoji: '🚴',
		},
		{
			label: 'Camping',
			emoji: '🏕️',
		},
		{
			label: 'Running',
			emoji: '🏃🏻‍♂️',
		},
		{
			label: 'Cooking',
			emoji: '🌶',
		},
		
	],
	portfolio: [
		{
			title: 'Friedclay.com - Adventure Tracking App',
			live: 'https://friedclay.com/', 
			source: 'https://github.com/Patgoral/TRACKR-Client', 
			image: mock1,
		},
		{
			title: 'StubCrud - Event Registration App',
			live: 'https://stubcrudclient.onrender.com/',
			source: 'https://github.com/Melendezj18/Stub-Crud',
			image: mock2,
		},
		{
			title: 'Service Ticket Manager',
			live: 'https://patgoral.github.io/project2-client/',
			source: 'https://github.com/Patgoral/project2-client',
			image: mock3,
		},
		{
			title: 'Crocs Slot Machine',
			live: 'https://patgoral.github.io/slot-machine-project/',
			source: 'https://github.com/Patgoral/slot-machine-project',
			image: mock4,
		},
      
	],
}
