import React from 'react';
import './Promo.css';

class Promo extends React.Component {
    render () {
        return (
            <section className="promo-section">
                <div className="container promo-section__container">
                    <div className="promo-section__holder">
                        <h1> welcome to our marketplace </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ... </p>
                        <div className="btn-holder">
                            <button className="btn" type="button" name="button"> view more </button>
                            <button className="btn" type="button" name="button"> video tour </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Promo;
