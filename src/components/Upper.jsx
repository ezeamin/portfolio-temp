import React from 'react';
import "./upper.css";

const Upper = () => {
    return (
        <div className='row justify-content-between'>
            <div className='col-sm-12 col-md-7'>
                <h1 className='fw-bold upper__title'>Hi!</h1>
                <h3>I'm <strong>Ezequiel Amin</strong>, Argentine MERN Full Stack Developer.</h3>
                <p className="lower__description">
          I'm studying to be a Computer Science Engineer by the end of 2025.
          Among other things, I love math and programming. I believe my studies
          mix them both greatly, and that's why I love what I study and what I
          do. </p>
            </div>
            <div className='upper__profilePic col-sm-12 col-md-5'>
                <img src="/img/eze.jpg" alt="Ezequiel Amin" />
            </div>
        </div>
    );
};

export default Upper;