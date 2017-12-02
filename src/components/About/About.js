import React, {Component} from 'react';
import './About.css';
import facebook from './img/006-facebook-logo.svg';
import twitter from './img/001-twitter-logo-silhouette.svg';
import github from './img/002-github-logo.svg';
import dribble from './img/001-dribble-logo.svg';
import behance from './img/005-behance-logo.svg';

class About extends React.Component {
    render () {
        return (
            <section className="color-section" id="about">
                <div className="container">
                    <h2> we are modest. </h2>
                    <div className="about">
                        <div className="about__mission">
                            <p> Lorem ipsum dolor sit amet, lobortis consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum quismagna congue, vel sodales arcu vestibulum.
                                Nunc lobortis dui magna, quis lacusullamcorper at. </p>
                            <p> Phasellus sollicitudin ante eros ornare, <span> sit amet luctus lorem semper </span>. Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio
                                convallis eget. vel sodalessollicitudin arcu vestibulum </p>
                            <div className="social social--big">
                                <a href="#">
                                    <img src={facebook} alt="facebook" />
                                </a>
                                <a href="#">
                                    <img src={twitter} alt="twitter" />
                                </a>
                                <a href="#">
                                    <img src={github} alt="github" />
                                </a>
                                <a href="#">
                                    <img src={dribble} alt="dribble" />
                                </a>
                                <a href="#">
                                    <img src={behance} alt="behance" />
                                </a>
                            </div>
                        </div>
                        <aside className="about__goals">
                            <ul>
                                <li>
                                    <h3> Dedication to the customers </h3>
                                    <p> Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae trique nisi, vitae ulamcorper risus. </p>
                                </li>
                                <li>
                                    <h3> working closely with our clients </h3>
                                    <p> Sed blandit nisi urna, sed pellentesque enim consectetur vitae. Suspendisse ut vehicula nibh. </p>
                                </li>
                                <li>
                                    <h3> increase happiness </h3>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend laoreet euismod. </p>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
