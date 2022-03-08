import React from "react";

const List = () => {
  return (
    <>
      <div className="row justify-content-center text-center">
        <div className="col-sm-12 col-md-6">
          <h3>Front End</h3>
          <hr className="text-light mt-1" />
          <ul>
            <li>HTML, CSS and JavaScript Knowledge</li>
            <li>CSS Frameworks and libraries: Bootstrap, Material UI</li>
            <li>JavaScript Frameworks and libraries: React</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6">
          <h3>Back End</h3>
          <hr className="text-light mt-1" />
          <ul>
            <li>JavaScript Framework: Node.js, Express.js</li>
            <li>Database management: Mongo DB, MySQL</li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center text-center mt-3">
        <div className="col-sm-12 col-md-6">
          <h3>Teamwork / Business</h3>
          <hr className="text-light mt-1" />
          <ul>
            <li>Agile methodologies: Scrum methodology</li>
            <li>Trello &amp; Slack</li>
            <li>Git &amp; Github</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6">
          <h3>Other abilities</h3>
          <hr className="text-light mt-1" />
          <ul>
            <li>Important knowledge in math and physics</li>
            <li>Great leadership</li>
            <li>
              Proficiency in English, Native in Spanish, and little knowledge of
              German (A2)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default List;
