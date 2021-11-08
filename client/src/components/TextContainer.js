import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import ircIcon from "../icons/irc-icon.png";

import "../index.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Bravo68web's IRC{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      {/*<h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>*/}
    </div>
    {users ? (
      <div>
        <h1>Active Members 🌍</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <img alt="Online Icon" src={onlineIcon} />
                {name}
              </div>
            ))}
          </h2>
          <br />
          {/* <img src={ircIcon} alt="IRC Icon" height="200px" width="200px"></img> */}
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;