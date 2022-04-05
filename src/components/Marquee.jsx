import React from "react";
import "./marquee.css";

const Marquee = () => {
  const width = window.innerWidth;

  return (
    <>
      <div className="marquee">
        <div className="vignette"></div>
        <div className="marquee--inner1">
          {width > 768 ? (
            <div>
              <div className="marquee__icon">
                <img src="/img/icons/react.png" alt="react" />
              </div>
              <div className="marquee__icon" style={{ width: "45px" }}>
                <img src="/img/icons/javascript.png" alt="javascript" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/mongo.png" alt="mongo" />
              </div>
              <div className="marquee__icon" style={{ width: "63px" }}>
                <img src="/img/icons/html.png" alt="html" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/css.png" alt="css" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/git.png" alt="git" />
              </div>
              <div className="marquee__icon inv">
                <img src="/img/icons/express.png" alt="express" />
              </div>
              <div className="marquee__icon inv">
                <img src="/img/icons/github.png" alt="github" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/node.png" alt="node" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/trello.png" alt="trello" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/bootstrap.png" alt="bootstrap" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/material.png" alt="material" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/mysql.png" alt="mysql" />
              </div>
              <div className="marquee__icon" style={{ width: "40px" }}>
                <img src="/img/icons/slack.png" alt="slack" />
              </div>
              <div className="marquee__icon" style={{ width: "40px" }}>
                <img src="/img/icons/jest.png" alt="jest" />
              </div>
              <div className="marquee__icon" style={{ width: "37px" }}>
                <img src="/img/icons/passport.png" alt="passport" />
              </div>
            </div>
          ) : (
            <div>
              <div className="marquee__icon">
                <img src="/img/icons/react.png" alt="react" />
              </div>
              <div className="marquee__icon" style={{ width: "45px" }}>
                <img src="/img/icons/javascript.png" alt="javascript" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/mongo.png" alt="mongo" />
              </div>
              <div className="marquee__icon" style={{ width: "63px" }}>
                <img src="/img/icons/html.png" alt="html" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/css.png" alt="css" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/git.png" alt="git" />
              </div>
              <div className="marquee__icon inv">
                <img src="/img/icons/express.png" alt="express" />
              </div>
              <div className="marquee__icon" style={{ width: "37px" }}>
                <img src="/img/icons/passport.png" alt="passport" />
              </div>
            </div>
          )}
        </div>
        <div className="marquee--inner2">
          {width > 768 ? (
            <div>
              <div className="marquee__icon">
                <img src="/img/icons/react.png" alt="react" />
              </div>
              <div className="marquee__icon" style={{ width: "45px" }}>
                <img src="/img/icons/javascript.png" alt="javascript" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/mongo.png" alt="mongo" />
              </div>
              <div className="marquee__icon" style={{ width: "63px" }}>
                <img src="/img/icons/html.png" alt="html" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/css.png" alt="css" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/git.png" alt="git" />
              </div>
              <div className="marquee__icon inv">
                <img src="/img/icons/express.png" alt="express" />
              </div>
              <div className="marquee__icon inv">
                <img src="/img/icons/github.png" alt="github" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/node.png" alt="node" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/trello.png" alt="trello" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/bootstrap.png" alt="bootstrap" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/material.png" alt="material" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/mysql.png" alt="mysql" />
              </div>
              <div className="marquee__icon" style={{ width: "40px" }}>
                <img src="/img/icons/slack.png" alt="slack" />
              </div>
              <div className="marquee__icon" style={{ width: "40px" }}>
                <img src="/img/icons/jest.png" alt="jest" />
              </div>
              <div className="marquee__icon" style={{ width: "37px" }}>
                <img src="/img/icons/passport.png" alt="passport" />
              </div>
            </div>
          ) : (
            <div>
              <div className="marquee__icon inv">
                <img src="/img/icons/github.png" alt="github" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/node.png" alt="node" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/trello.png" alt="trello" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/bootstrap.png" alt="bootstrap" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/material.png" alt="material" />
              </div>
              <div className="marquee__icon">
                <img src="/img/icons/mysql.png" alt="mysql" />
              </div>
              <div className="marquee__icon" style={{ width: "40px" }}>
                <img src="/img/icons/slack.png" alt="slack" />
              </div>
              <div className="marquee__icon" style={{ width: "40px" }}>
                <img src="/img/icons/jest.png" alt="jest" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Marquee;
