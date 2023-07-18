import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar';

export default function Resume() {

    /*
        sectionHead: ''
        items: [
            {
                mainHead: ''
                subHead: ['']
                description
            }
        ]
    */

    // Atlanta, Georgia | (404)632-5450 | oliviaguerra731@gmail.com |linkedin.com/in/olivia-guerra-069951220/ | github.com/oguerra9 | Portfolio: oguerra9.github.io/oguerra-portfolio/
    let contactInfo = ['Atlanta, GA', '(404)632-5450', 'oliviaguerra731@gmail.com'];
    let resumeLinks = [
        {
            display: 'LinkedIn',
            link: 'https://linkedin.com/in/olivia-guerra-069951220/'   
        },
        {
            display: 'Github',
            link: 'https://github.com/oguerra9'
        },
        {
            display: 'Portfolio',
            link: 'https://oguerra9.github.io/oguerra-portfolio'
        }
    ];

    let sectionHeaders = ['education_and_training', 'skills', 'projects', 'accomplishments', 'employment'];
    let sectionContents = {};
    sectionContents['education_and_training'] = {
        title: 'Education and Training',
        contentItems: [
            {
                headerName: 'Bachelor of Software Engineering Degree',
                headerDetails: ['Auburn University', '2019 - May 2023'],
                description: ['Received top grades while completing comprehensive and rigorous coursework in Software Engineering, including cybersecurity (including computer and network security, cybersecurity threats and countermeasures, and digital forensics), Agile methodologies, Test-Driven Development (TDD), and Object-Oriented Programming (OOP) coding practices.']
            },
            {
                headerName: 'Georgia Tech Full-Stack Web Development Bootcamp',
                headerDetails: ['Georgia Institute of Technology', '2022'],
                description: ['Gained experience in JavaScript, HTML, CSS, MongoDB, ExpressJS, React, NodeJS, and RESTful API development while completing coursework and developing web applications.']
            }
        ]
    };

    sectionContents['skills'] = {
        title: 'Skills',
        contentItems: [
            {
                headerName: 'Programming Languages',
                headerDetails: ['Javascript, Python, HTML, CSS, Java, SQL'],
                description: ['']
            },
            {
                headerName: 'Frameworks and Libraries',
                headerDetails: ['React, ExpressJS, jQuery'],
                description: ['']
            },
            {
                headerName: 'Tools and Environments',
                headerDetails: ['CLI, Git, NodeJS, VSCode'],
                description: ['']
            },
            {
                headerName: 'Team Work',
                headerDetails: ['Led team to victory in the Lighthall SESL competition, worked well with team members to further develop the Zip Gameday mobile application'],
                description: ['']
            },
        ]
    };

    sectionContents['projects'] = {
        title: 'Projects',
        contentItems: [
            {
                headerName: 'Senior Design Project',
                headerDetails: ['Zip Game Day Application', '2023'],
                description: ['Played a key role in the full-stack development of the mobile application using Flutter, Dart, xCode, and Google’s Firebase Web Development Platform.']
            },
            {
                headerName: 'Chore Chart',
                headerDetails: ['2023'],
                description: ['Designed and planned a web application to allow users to create or join calendars with other users to collaborate and manage shared chores or events', 'Completed front-end development using React and Javascript']
            }
        ]
    };

    sectionContents['accomplishments'] = {
        title: 'Accomplishments',
        contentItems: [
            {
                headerName: 'Lighthall Software Engineering Super League Finalist',
                headerDetails: ['Season 3', '2023'],
                description: ['Made it through the final round while competing with other participants to create and deploy a mix of front-end and full-stack web applications offering a variety of services to users.']
            }
        ]
    };

    sectionContents['employment'] = {
        title: 'Employment',
        contentItems: [
            {
                headerName: 'Team Member',
                headerDetails: ["Bruster's Real Ice Cream", 'Atlanta, GA', '2018 - 2020'],
                description: ['Delivered exceptional service to customers while greeting incoming patrons, offering information on ice cream selection, taking and filling orders, processing sales transactions, and maintaining the cleanliness of the store.']
            }
        ]
    };

    const resumeData = [];
    return (
        <>
            <NavBar />
            <div id="resumeContainer">
                <h1 id="resumeNameHeader" className="p-2 mb-0">Olivia Guerra</h1>
                <div id="infoBar" className="d-flex col-12">
                    <div id="contactInfo" className="d-flex flex-wrap p-1 col-6">
                        {contactInfo.map(contactItem => (
                            <div className='p-1'> | {contactItem}</div>
                        ))}
                    </div>
                    <div id="resumeLinks" className='d-flex flex-wrap p-1 justify-content-end col-6'>
                        {resumeLinks.map(item => (
                            <div id="linkItem" className="p-1">| <a href={item.link}>{item.display}</a> </div>
                        ))}
                    </div>
                </div>
                
                <div id="resumeTitle" className="p-2 d-flex justify-content-center">Software Engineer</div>
                {sectionHeaders.map(sectionName => (
                    <div id='resumeSection' className="p-1">
                        <div id="sectionHeader" className="p-1">{sectionContents[`${sectionName}`].title}</div>
                            {sectionName === 'skills' ? (
                                <div id="sectionContents" className="p-1 mb-2">
                                    {sectionContents[`${sectionName}`].contentItems.map(contentItem => (
                                        <div id="contentItem">
                                            <div id="itemHeader" className='d-flex justify-space-between p-1 pb-0'>
                                                <div id="itemTitle" className='d-flex p-1 align-self-center'>{contentItem.headerName}:</div>
                                                <div id="itemDetails" className='d-flex p-1'>
                                                    {contentItem.headerDetails.map(detail => (
                                                        <div id="itemDetail">{` ${detail} `}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div id="sectionContents" className="p-1 mb-2">
                                    {sectionContents[`${sectionName}`].contentItems.map(contentItem => (
                                        <div id="contentItem">
                                            {console.log(contentItem)}
                                            <div id="itemHeader" className='d-flex justify-space-between p-1 pb-0'>
                                                <div id="itemTitle" className='d-flex p-1 align-self-center'>{contentItem.headerName}</div>
                                                <div id="itemDetails" className='d-flex p-1'>
                                                    {contentItem.headerDetails.map(detail => (
                                                        <div id="itemDetail">{` | ${detail} `}</div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div id="itemDescription">
                                                <ul id="descriptionList" className='mb-0'>
                                                    {contentItem.description.map(descriptor => (
                                                        <>
                                                            {descriptor.length > 0 ? (
                                                                <li id="descriptor" className='p-0 m-0'>{descriptor}</li>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        
                    </div>
                ))}
            </div>
        </>
    );
}