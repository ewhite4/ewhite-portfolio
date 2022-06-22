import React from "react";

function About() {

    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
                <p>Where is my pet?</p>
            </div>
        </section>
    );
}

export default About;
