import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Pat",
    lastName: "Goral",
    initials: "PG", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🚴',
            text: 'cycling enthusiast'
        },
        {
            emoji: '🌎',
            text: 'based in Atlanta, GA'
        },
        {
            emoji: "💻",
            text: "junior software engineer"
        },
        {
            emoji: "📧",
            text: "patgoral@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/patgoral/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/Patgoral",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
      
      
      
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hey, I'm Pat.  As a lifelong tinkerer with a passion for both computers and cycling, I am constantly seeking out new challenges to tackle. My extensive experience in solving complex problems in the cycling world has honed my ability to think critically and find creative solutions. Now, as I shift my focus to the tech world, I am eager to apply these same problem-solving skills to software development. I approach each project, no matter how big or small, with enthusiasm and a commitment to finding the best possible solution. Whether working independently or collaborating with a team, I am always eager to take on the next puzzle and push myself to new heights.",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Git', 'Github', 'Bootstrap', 'Html5', 'Css3', 'Express', 'Mongoose', 'MongoDb', 'Nodejs', 'Amazon S3'],
            exposedTo: ['Django', 'Python', 'postgreSql']
        }
    ,
    hobbies: [
        {
            label: 'Cycling',
            emoji: '🚴'
        },
        {
            label: 'Camping',
            emoji: '🏕️'
        },
        {
            label: 'Running',
            emoji: '🏃🏻‍♂️'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Trackr - Adventure Race Leaderboard",
            live: "https://trackr-client.onrender.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Patgoral/TRACKR-Client", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "StubCrud - Event Registration App",
            live: "https://stubcrudclient.onrender.com/",
            source: "https://github.com/Melendezj18/Stub-Crud",
            image: mock2
        },
        {
            title: "Service Ticket Manager",
            live: "https://patgoral.github.io/project2-client/",
            source: "https://github.com/Patgoral/project2-client",
            image: mock3
        },
        {
            title: "Crocs Slot Machine",
            live: "https://patgoral.github.io/slot-machine-project/",
            source: "https://github.com/Patgoral/slot-machine-project",
            image: mock4
        },
       
    ]
}