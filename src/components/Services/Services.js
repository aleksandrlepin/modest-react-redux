import React, {Component} from 'react';
import './Services.css';
import cogs from './img/004-cogs.svg';
import tools from './img/007-tool.svg';
import cell from './img/003-cell-phone.svg';
import schedule from './img/002-schedule-button.svg';

class Services extends React.Component {
    render () {
        return (
            <section className="color-section" id="services">
                <div className="container">
                    <h2> what we do. </h2>
                    <div className="services">
                        <article className="services__item">
                            <img src={cogs} alt="cogs" />
                            <h3> Easy theme Setup </h3>
                            <p> Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum. </p>
                        </article>
                        <article className="services__item">
                            <img src={tools} alt="tool" />
                            <h3> pixel perfect design </h3>
                            <p> Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum. </p>
                        </article>
                        <article className="services__item">
                            <img src={cell} alt="phone" />
                            <h3> responsive display </h3>
                            <p> Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum. </p>
                        </article>
                        <article className="services__item">
                            <img src={schedule} alt="clock" />
                            <h3> 24/7 support </h3>
                            <p> Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum. </p>
                        </article>
                        <article className="services__item">
                            <img src={cogs} alt="cogs" />
                            <h3> Easy theme Setup </h3>
                            <p> Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum. </p>
                        </article>
                        <article className="services__item">
                            <img src={tools} alt="tool" />
                            <h3> pixel perfect design </h3>
                            <p> Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum. </p>
                        </article>
                        <article className="services__item">
                            <img src={cell} alt="phone" />
                            <h3> responsive display </h3>
                            <p> Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum. </p>
                        </article>
                        <article className="services__item">
                            <img src={schedule} alt="clock" />
                            <h3> 24/7 support </h3>
                            <p> Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum. </p>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
