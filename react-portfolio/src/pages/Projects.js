import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/NavBar';

const distanceCalculatorImg = require('../images/distance-calculator-image.png');
const taskManagerImg = require('../images/task-manager-image.png');
const weatherAppImg = require('../images/weather-app-image.png');
const yelpForCouplesImg = require('../images/yelp-for-couples-image.png');
const choreChartImg = require('../images/chore-chart-image.png');

export default function Projects() {
    const projectList = [
        {
            title: 'Chore Chart',
            repo_link: 'https://github.com/oguerra9/chore-chart',
            deploy_link: 'https://oguerra9.github.io/chore-chart/#/calendar/3',
            skills: 'React',
            imgSrc: choreChartImg,
            short_desc: 'Team project to help manage household chores between roommates',
            long_desc: ''
        },
        {
            title: 'Yelp for Couples',
            repo_link: 'https://github.com/oguerra9/yelp-for-couples',
            deploy_link: 'https://oguerra9.github.io/yelp-for-couples/',
            skills: 'React, Firebase',
            imgSrc: yelpForCouplesImg,
            short_desc: 'Website to help couples or groups decide what to eat and where.',
            long_desc: ''
        },
        {
            title: 'Task Manager',
            repo_link: 'https://github.com/oguerra9/task-tracker',
            deploy_link: 'https://oguerra9.github.io/task-tracker/',
            skills: 'React, Google Firebase',
            imgSrc: taskManagerImg,
            short_desc: 'Website for users to create, edit, and delete tasks.',
            long_desc: ''
        },
        {
            title: 'Distance Calculator',
            repo_link: 'https://github.com/oguerra9/distance-calculator-SL23',
            deploy_link: 'https://oguerra9.github.io/distance-calculator-SL23/',
            skills: 'JavaScript, Google Maps API',
            imgSrc: distanceCalculatorImg,
            short_desc: 'Website used to calculate the distance between two geographic points and display the location of each.',
            long_desc:''
        },
        {
            title: 'Weather App',
            repo_link: 'https://github.com/oguerra9/weatherApp',
            deploy_link: 'https://oguerra9.github.io/weatherApp/',
            skills: 'JavaScript',
            imgSrc: weatherAppImg,
            short_desc: 'Website where users can enter the name of a location and see the current weather as well as a 5 day forecast.',
            long_desc: ''
        }
        
        // {
        //     title: '',
        //     repo_link: '',
        //     deploy_link: '',
        //     skills: '',
        //     imgSrc: '',
        //     short_desc: '',
        //     long_desc: ''
        // }
    ];

    return (
        <>
        <NavBar />
        <div>
            <h1 className='p-2'>Past Projects</h1>
            <div id="projectDisplay" className="d-flex flex-wrap justify-content-center">
                {projectList.map(project => (
                    <Container key={project.title} className="col-lg-5 m-4">
                        <Card className="bg-dark text-white" id='projectCard'>
                            <a href={project.deploy_link} target="_blank" rel="noreferrer" id="deployRef">
                                {/* <Card.Img src={require('../images/task-manager-image.png')} alt="Card image" /> */}
                                <Card.Img id="cardImg" src={project.imgSrc} alt="Card image" />
                                <Card.ImgOverlay className="d-flex flex-column" id='projectOverlay'>
                                    <div id="projectInfo">
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text>{project.short_desc}</Card.Text>
                                        <Card.Text>{project.skills}</Card.Text>
                                    </div>
                                        <a href={project.repo_link} target="_blank" rel="noreferrer" id="repoIcon">
                                            <img src={require("../images/github-mark-white.png")} id="githubIcon" alt="github icon"></img>
                                        </a>
                                </Card.ImgOverlay>
                            </a>
                        </Card>
                    </Container>
                ))}
            </div>
        </div>
        </>
    );
}