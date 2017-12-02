import React, {Component} from 'react';
import './Features.css';
import feat1 from './img/feat1.jpg';
import feat2 from './img/feat2.jpg';
import feat3 from './img/feat3.jpg';
class Features extends React.Component {
    render () {
        return (
            <section className="color-section color-section--dark" id="features">
                <div className="container">
                    <h2> features. </h2>
                    <div className="features">
                        <div className="features__item">
                            <img src={feat1} alt="feature image" />
                            <h3> Product Design: Eames Chairs </h3>
                            <p> Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames. </p>
                        </div>
                        <div className="features__item">
                            <img src={feat2} alt="feature image" />
                            <h3> Elegant and Colorful Logos </h3>
                            <p> I’ve always found logo design to be one of the most challenging things to get right. There’s so much that a logo can say about a brand without actually saying it. </p>
                        </div>
                        <div className="features__item">
                            <img src={feat3} alt="feature image" />
                            <h3> A Showcase of Creative </h3>
                            <p> It’s always interesting to see another designer’s take on a famous website, app or even physical product. Different designers add their own personality and style. </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
