import React from 'react';
import './Work.css';
import work1 from './img/work1.jpg';
import work2 from './img/work2.jpg';
import work3 from './img/work3.jpg';
import work4 from './img/work4.jpg';
import work5 from './img/work5.jpg';
import work6 from './img/work6.jpg';

class Work extends React.Component {
    render () {
        return (
            <section className="color-section color-section--dark" id="work">
                <div className="container">
                    <h2> lovely work. </h2>
                    <div className="portfolio">
                            <a className="portfolio__item" href="#work">
                                <img src={work1} alt="work1" />
                                <span> + </span>
                                <p> partnership guidlines </p>
                            </a>
                            <a className="portfolio__item" href="#work">
                                <img src={work2} alt="work2" />
                                <span> + </span>
                                <p> partnership guidlines </p>
                            </a>
                            <a className="portfolio__item" href="#work">
                                <img src={work3} alt="work3" />
                                <span> + </span>
                                <p> partnership guidlines </p>
                            </a>
                            <a className="portfolio__item" href="#work">
                                <img src={work4} alt="work4" />
                                <span> + </span>
                                <p> partnership guidlines </p>
                            </a>
                            <a className="portfolio__item" href="#work">
                                <img src={work5} alt="work5" />
                                <span> + </span>
                                <p> partnership guidlines </p>
                            </a>
                            <a className="portfolio__item" href="#work">
                                <img src={work6} alt="work6" />
                                <span> + </span>
                                <p> partnership guidlines </p>
                            </a>
                    </div>
                    <div className="btn-holder--center">
                        <button className="btn" type="button" name="button"> show me more </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;
