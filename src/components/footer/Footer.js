import React from "react";
import "./Footer.css";
import linkedinLogo from "./LinkedIn_logo_initials.png.webp";
import git from "./GitHub-logo.png";
import { Link } from "react-router-dom";

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
function Footer() {
  return (
    <div className="footer">
      <div className="footer-copyright">
        <p> Meet the team: </p>
        <p>SkillStacks. 2023</p>
      </div>

      <div className="mobile-link">
        <Link to="/about">About Page</Link>
      </div>

      <div className="teamMembers">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-details">
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinLogo} className="member-image" />
              </a>
              <a href={member.gitUrl} target="_blank" rel="noopener noreferrer">
                <img src={git} className="git-image" />
              </a>
              <p>{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
