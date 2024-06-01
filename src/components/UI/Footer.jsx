import React from "react";
import { VscGithubAlt } from "react-icons/vsc";

function Footer() {
  return (
    <footer>
      <h2>Made by Alexsander©</h2>
      <p>
        <ul>
          <a href="https://github.com/alesk1v9">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;