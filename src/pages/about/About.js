import React, { useState } from "react";
import "./About.css";
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { markGithub } from "react-icons-kit/oct/markGithub";

import Olga from "./images/Olga.png";
import Nikki from "./images/Nikki.jpeg";
import Alejandro from "./images/Alejandro.jpg";
import Alena from "./images/Alena.jpg";
import Alzhan from "./images/Alzhan.jpg";
import Daria from "./images/Daria.png";
import Dylan from "./images/Dylan.jpg";
import Huseyin from "./images/Huseyin.png";
import Jukari from "./images/Jukari.jpg";
import Miguel from "./images/Miguel.png";

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

  const teamMembers = [
    {
      name: "Olga Musteata",
      imageUrl: "john.jpg", // Replace with image URL or import the image using require
      linkedinUrl: "www.linkedin.com/in/olga-musteata",
      gitUrl: "https://github.com/koral14",
    },
    {
      name: "Jukari Richardson",
      imageUrl: "john.jpg", // Replace with image URL or import the image using require
      linkedinUrl: "https://www.linkedin.com/in/jukari-richardson-7768a7203/",
      gitUrl: "https://github.com/Jukari-Richardson",
    },
    {
      name: "Daria Fetko",
      imageUrl: "john.jpg", // Replace with image URL or import the image using require
      linkedinUrl: "https://www.linkedin.com/in/dariafetko/",
      gitUrl: "https://github.com/Daria1911",
    },
    {
      name: "Alzhan Braliyev",
      imageUrl: "john.jpg", // Replace with image URL or import the image using require
      linkedinUrl: "https://www.linkedin.com/in/alzhan-braliyev/",
      gitUrl: "https://github.com/Alzhan-B",
    },
    {
      name: "Alejandro Patino Camargo",
      imageUrl: "john.jpg", // Replace with image URL or import the image using require
      linkedinUrl: "https://www.linkedin.com/in/alejandropatinoc/",
      gitUrl: "https://github.com/Alejandro-Patino-Camargo",
    },
    {
      name: "Elena Demidenko",
      imageUrl: "john.jpg", // Replace with image URL or import the image using require
      linkedinUrl: "https://www.linkedin.com/in/elenademi/",
      gitUrl: "https://github.com/elenademi",
    },
  ];

  return (
    <div className="about">
      <p className="about-text">
        Welcome to <span>SkillStacks</span>, a cutting-edge application designed
        to revolutionize the learning experience for IT students. Upon creating
        an account, users can effortlessly craft decks filled with flashcards.
        These flashcards serve as dynamic tools, including questions, answers,
        brief hints, and even direct links to resource pages, nurturing a
        well-rounded learning journey.
        <br />
        <br />
        Whether you prefer to keep your decks private for personal use or
        contribute to the collective knowledge, SkillStacks provides the
        flexibility to make your learning journey truly your own.
      </p>
      <h2 className="h2-about">Meet our team...</h2>
      <ul className="members">
        <div className="students">
          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Alejandro Patino</p>
                <p className="job-title">Front-End</p>
              </div>
              <img src={Alejandro} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                Based in the San Fransico Bay Area, Alejandro is a
                first-generation college student with a human-centered approach
                to the web. He aims to empower underrepresented communities by
                helping businesses establish a robust online presence through
                personalized websites. With a keen eye for design and a strong
                technical skillset, he is committed to bridging the digital
                divide.
              </ReadMore>
              <div className="media-icons">
                <a
                  href={teamMembers[4].linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="linkedin-icon" icon={linkedin} size={24} />
                </a>
                {teamMembers[4].gitUrl && (
                  <a
                    href={teamMembers[4].gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="github-icon" icon={markGithub} size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Daria Fetko</p>
                <p className="job-title">Front-End</p>
              </div>
              <img src={Daria} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                Experienced front-end developer with over three years in web
                application development. Returning to the job market after
                maternity leave, I bring a passion for creating outstanding user
                experiences. Proven ability to handle multiple tasks, adapt
                quickly to new technologies, and collaborate effectively with
                teams to deliver top-notch results. Skilled problem-solver known
                for translating complex ideas into simple, actionable solutions.
                Dedicated to advancing in the field and delivering excellence in
                every project.
              </ReadMore>
              <div className="media-icons">
                <a
                  href={teamMembers[2].linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="linkedin-icon" icon={linkedin} size={24} />
                </a>
                {teamMembers[2].gitUrl && (
                  <a
                    href={teamMembers[2].gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="github-icon" icon={markGithub} size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Alzhan Braliyev</p>
                <p className="job-title">Front-End</p>
              </div>
              <img src={Alzhan} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                Originally from Kazakhstan, currently based in Charlotte, NC.
                Project and program manager with 15+ years of results-driven
                experience in the fields of education, environment protection
                and sustainable development, with expertise in international
                program development. Skilled and knowledgeable in Waterfall and
                Agile methodologies, stakeholder management, and
                people-management with a proven record in leading
                cross-functional teams, managing complex projects and innovative
                strategy development.
              </ReadMore>
              <div className="media-icons">
                <a
                  href={teamMembers[3].linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="linkedin-icon" icon={linkedin} size={24} />
                </a>
                {teamMembers[3].gitUrl && (
                  <a
                    href={teamMembers[3].gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="github-icon" icon={markGithub} size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Elena Demidenko</p>
                <p className="job-title">Front-End</p>
              </div>
              <img src={Alena} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                Elena is an experienced education professional from the Triangle
                area in NC, currently learning programming. Her goal is to
                transition into an e-learning developer role and integrate her
                educational experience with technology, creating innovative and
                captivating online learning experiences.
              </ReadMore>
              <div className="media-icons">
                <a
                  href={teamMembers[5].linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="linkedin-icon" icon={linkedin} size={24} />
                </a>
                {teamMembers[5].gitUrl && (
                  <a
                    href={teamMembers[5].gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="github-icon" icon={markGithub} size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Olga Musteață</p>
                <p className="job-title">Back-End</p>
              </div>
              <img src={Olga} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                Olga moved to California in 2018, hoping to fulfill the American
                dream. She holds a foreign BA in Computer Science, a certificate
                in Database Management , an A+ certificate, and a Front End
                Development certificate from CTD. Step by step she keeps moving
                towards her goal of becoming a professional web developer.
              </ReadMore>
              <div className="media-icons">
                <a
                  href={teamMembers[0].linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="linkedin-icon" icon={linkedin} size={24} />
                </a>
                {teamMembers[0].gitUrl && (
                  <a
                    href={teamMembers[0].gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="github-icon" icon={markGithub} size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Jukari Richardson</p>
                <p className="job-title">Back-End</p>
              </div>
              <img src={Jukari} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                A San Francisco Bay Area native, Jukari is a programming student
                acquiring skills as a full-stack developer through access to
                organizations like Code The Dream. Working as full time
                tradesman as a member of the Northern California Regional
                Carpenter's Union he is motivated to transition into the
                technology space and acquire a new skillset as a web developer.
                Having gained certification from Code The Dream's Intro Course,
                Node.js learning cohort and moving onto attain a React.js
                certificate he has made significant strides toward his ultimate
                goal. He aims to use his skillset to impact his community and
                the world in a positive fashion to integrate human values with
                technological innovation.
              </ReadMore>
              <div className="media-icons">
                <a
                  href={teamMembers[1].linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="linkedin-icon" icon={linkedin} size={24} />
                </a>
                {teamMembers[1].gitUrl && (
                  <a
                    href={teamMembers[1].gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="github-icon" icon={markGithub} size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <h2 className="h2-about">...and our mentors</h2>
        <div className="mentors">
          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Dylan DiGioia</p>
                <p className="job-title">Mentor</p>
              </div>
              <img src={Dylan} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                Dylan is a software engineer who served as a mentor for this
                project. He has had a great time seeing SkillStacks come
                together as a full stack app through the extensive efforts of
                the team members.
              </ReadMore>
            </div>
          </div>

          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Nikki Graybeal</p>
                <p className="job-title">Mentor</p>
              </div>
              <img src={Nikki} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                Nikki Graybeal is an apprentice frontend developer with Code the
                Dream. As a self-taught developer and former teacher, she enjoys
                the opportunity to collaborate with and mentor others at CTD.
              </ReadMore>
            </div>
          </div>

          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Miguel Mayorga</p>
                <p className="job-title">Mentor</p>
              </div>
              <img src={Miguel} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                Miguel is a software engineer who served as a mentor for this
                project. He has had a great time seeing SkillStacks come
                together as a full stack app through the extensive efforts of
                the team members.
              </ReadMore>
            </div>
          </div>

          <div className="profile-pic">
            <div className="name-position-img">
              <div className="name-title">
                <p className="participant-name">Huseyin Gumus</p>
                <p className="job-title">Mentor</p>
              </div>
              <img src={Huseyin} alt="Avatar" className="profile-image" />
            </div>
            <div className="card-content">
              <ReadMore>
                Huseyin is a software engineer who served as a mentor for this
                project. He has had a great time seeing SkillStacks come
                together as a full stack app through the extensive efforts of
                the team members.
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
  );
};
export default About;

