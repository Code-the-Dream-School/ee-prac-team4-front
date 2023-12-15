
import React, { useState } from 'react';
import "./About.css";
import Olga from './images/Olga.png';
import Nikki from './images/Nikki.jpeg';
import Alejandro from './images/Alejandro.jpg';
import Alena from './images/Alena.jpg';
import Alzhan from './images/Alzhan.jpg';
import Daria from './images/Daria.png';
import Dylan from './images/Dylan.jpg';
import Huseyin from './images/Huseyin.png';
import Jukari from './images/Jukari.jpg';
import Miguel from './images/Miguel.png';

const About = () => {

    const ReadMore = ({ children }) => {
        const text1 = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? text1.slice(0, 150) : text1}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...read more" : " show less"}
            </span>
          </p>
        );
        };    

    return (
        <div className="about">
            <p className="about-text">
                Welcome to <span>SkillStacks</span>, a cutting-edge application designed to revolutionize the learning experience for IT students. 
                Upon creating an account, users can effortlessly craft decks filled with flashcards. These flashcards serve as dynamic tools, 
                including questions, answers, brief hints, and even direct links to resource pages, nurturing a well-rounded learning journey.<br/><br/>
                Whether you prefer to keep your decks private for personal use or contribute to the collective knowledge, 
                SkillStacks provides the flexibility to make your learning journey truly your own. 
            </p>
            <h2 className='h2-about'>Meet our team...</h2>
            <ul className="members">

                <div className='students'>
                    <div className="profile-pic">
                        <div className="name-position-img">
                            <div className="name-title">
                                <p className="participant-name">Alejandro Patino</p>
                                <p className="job-title">Front-End</p>
                            </div>
                            <img
                                src={Alejandro}
                                alt="Avatar"
                                className="profile-image"
                            />
                        </div>
                        <div className="card-content">
                            <ReadMore>
                                Lorem ipsum dolor sit amet. Non consectetur accusamus rem architecto enim 
                                est ipsum quis est fuga porro qui officia deserunt eos sint nostrum qui sunt optio. 
                                Aut fugit maiores in sapiente dignissimos qui molestias molestiae et eius dolores vel consequatur 
                                laboriosam est repellendus dolor. Ab atque doloribus et nemo sint hic cumque atque 33 commodi placeat et 
                                voluptas voluptas hic voluptatibus minima et neque libero. 
                                Et officiis laborum est quia eaque ea sequi sequi eum placeat voluptas est veritatis dolorem id quis odit.
                            </ReadMore>
                        </div>
                    </div>

                    <div className="profile-pic">
                        <div className="name-position-img">
                            <div className="name-title">
                                <p className="participant-name">Daria Fetko</p>
                                <p className="job-title">Front-End</p>
                            </div>
                            <img
                                src={Daria}
                                alt="Avatar"
                                className="profile-image"
                            />
                        </div>
                        <div className="card-content">
                            <ReadMore>
                                Lorem ipsum dolor sit amet. Non consectetur accusamus rem architecto enim 
                                est ipsum quis est fuga porro qui officia deserunt eos sint nostrum qui sunt optio. 
                                Aut fugit maiores in sapiente dignissimos qui molestias molestiae et eius dolores vel consequatur 
                                laboriosam est repellendus dolor. Ab atque doloribus et nemo sint hic cumque atque 33 commodi placeat et 
                                voluptas voluptas hic voluptatibus minima et neque libero. 
                                Et officiis laborum est quia eaque ea sequi sequi eum placeat voluptas est veritatis dolorem id quis odit.
                            </ReadMore>
                        </div>
                    </div>

                    <div className="profile-pic">
                        <div className="name-position-img">
                            <div className="name-title">
                                <p className="participant-name">Alzhan Braliyev</p>
                                <p className="job-title">Front-End</p>
                            </div>
                            <img
                                src={Alzhan}
                                alt="Avatar"
                                className="profile-image"
                            />
                        </div>
                        <div className="card-content">
                            <ReadMore>
                                Originally from Kazakhstan, currently based in Charlotte, NC. 
                                Project and program manager with 15+ years of results-driven experience in the fields of education, 
                                environment protection and sustainable development, with expertise in international program development. 
                                Skilled and knowledgeable in Waterfall and Agile methodologies, stakeholder management, and people-management 
                                with a proven record in leading cross-functional teams, managing complex projects and innovative strategy development.
                            </ReadMore>
                        </div>
                    </div>

                    <div className="profile-pic">
                        <div className="name-position-img">
                            <div className="name-title">
                                <p className="participant-name">Alena Demidenko</p>
                                <p className="job-title">Front-End</p>
                            </div>
                            <img
                                src={Alena}
                                alt="Avatar"
                                className="profile-image"
                            />
                        </div>
                        <div className="card-content">
                            <ReadMore>
                                Lorem ipsum dolor sit amet. Non consectetur accusamus rem architecto enim 
                                est ipsum quis est fuga porro qui officia deserunt eos sint nostrum qui sunt optio. 
                                Aut fugit maiores in sapiente dignissimos qui molestias molestiae et eius dolores vel consequatur 
                                laboriosam est repellendus dolor. Ab atque doloribus et nemo sint hic cumque atque 33 commodi placeat et 
                                voluptas voluptas hic voluptatibus minima et neque libero. 
                                Et officiis laborum est quia eaque ea sequi sequi eum placeat voluptas est veritatis dolorem id quis odit.
                            </ReadMore>
                        </div>
                    </div>

                    <div className="profile-pic">
                        <div className="name-position-img">
                            <div className="name-title">
                                <p className="participant-name">Olga Musteață</p>
                                <p className="job-title">Back-End</p>
                            </div>
                            <img
                                src={Olga}
                                alt="Avatar"
                                className="profile-image"
                            />
                        </div>
                        <div className="card-content">
                            <ReadMore>
                                Olga moved to California in 2018, hoping to fulfill the
                                American dream. She holds a foreign BA in Computer
                                Science, a certificate in Database Management , an A+
                                certificate, and a Front End Development certificate
                                from CTD. Step by step she keeps moving
                                towards her goal of becoming a professional web
                                developer.
                            </ReadMore>
                        </div>
                    </div>

                    <div className="profile-pic">
                        <div className="name-position-img">
                            <div className="name-title">
                                <p className="participant-name">Jukari Richardson</p>
                                <p className="job-title">Back-End</p>
                            </div>
                            <img
                                src={Jukari}
                                alt="Avatar"
                                className="profile-image"
                            />
                        </div>
                        <div className="card-content">
                            <ReadMore>
                                Lorem ipsum dolor sit amet. Non consectetur accusamus rem architecto enim 
                                est ipsum quis est fuga porro qui officia deserunt eos sint nostrum qui sunt optio. 
                                Aut fugit maiores in sapiente dignissimos qui molestias molestiae et eius dolores vel consequatur 
                                laboriosam est repellendus dolor. Ab atque doloribus et nemo sint hic cumque atque 33 commodi placeat et 
                                voluptas voluptas hic voluptatibus minima et neque libero. 
                                Et officiis laborum est quia eaque ea sequi sequi eum placeat voluptas est veritatis dolorem id quis odit.
                            </ReadMore>
                        </div>
                    </div>

                </div>
                <h2 className='h2-about'>...and our mentors</h2>
                <div className='mentors'>
                    <div className="profile-pic">
                        <div className="name-position-img">
                            <div className="name-title">
                                <p className="participant-name">Dylan DiGioia</p>
                                <p className="job-title">Mentor</p>
                            </div>
                            <img
                                src={Dylan}
                                alt="Avatar"
                                className="profile-image"
                            />
                        </div>
                        <div className="card-content">
                            <ReadMore>
                                Dylan is a software engineer who served as a mentor for
                                this project. He has had a great time seeing SkillStacks
                                come together as a full stack app through the extensive
                                efforts of the team members. 
                            </ReadMore>
                    </div>
                </div>

                <div className="profile-pic">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="participant-name">Nikki Graybeal</p>
                            <p className="job-title">Mentor</p>
                        </div>
                        <img
                            src={Nikki}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <div className="card-content">
                        <ReadMore>
                            Nikki Graybeal is an apprentice frontend developer with
                            Code the Dream. As a self-taught developer and former
                            teacher, she enjoys the opportunity to collaborate with
                            and mentor others at CTD.
                        </ReadMore>
                    </div>
                </div>

                <div className="profile-pic">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="participant-name">Miguel Mayorga</p>
                            <p className="job-title">Mentor</p>
                        </div>
                        <img
                            src={Miguel}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <div className="card-content">
                        <ReadMore>
                            Miguel is a software engineer who served as a mentor for
                            this project. He has had a great time seeing SkillStacks
                            come together as a full stack app through the extensive
                            efforts of the team members. 
                        </ReadMore>
                    </div>
                </div>

                <div className="profile-pic">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="participant-name">Huseyin Gumus</p>
                            <p className="job-title">Mentor</p>
                        </div>
                        <img
                            src={Huseyin}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <div className="card-content">
                        <ReadMore>
                            Huseyin is a software engineer who served as a mentor for
                            this project. He has had a great time seeing SkillStacks
                            come together as a full stack app through the extensive
                            efforts of the team members.
                        </ReadMore>
                    </div>
                </div>
                </div>    
            </ul>
            <a
                className="button-swagger"
                href="http://localhost:8000/api/v1/api-docs/"
            >
                Swagger documentation
            </a>
        </div>
    )
}
export default About;
