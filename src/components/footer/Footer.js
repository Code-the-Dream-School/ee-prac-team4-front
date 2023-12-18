import React from "react";
import "./Footer.css";
import { Icon } from "react-icons-kit";
import { markGithub } from "react-icons-kit/oct/markGithub";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="repo-link">
          <Icon icon={markGithub} size={24} className="github" />
          <a
            className="link-text"
            href="https://github.com/Code-the-Dream-School/ee-prac-team4-front"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Repo
          </a>
        </div>

        <div className="repo-link">
          <Icon icon={markGithub} size={24} className="github" />
          <a
            className="link-text"
            href="https://github.com/Code-the-Dream-School/ee-prac-team4-back"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend Repo
          </a>
        </div>
        <div className="about-text-foot">
          <a id="about-text" className="link-text" href="/about">
            Meet The Devs
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; SkillStacks 2023</p>
      </div>
    </div>
  );
}

export default Footer;
