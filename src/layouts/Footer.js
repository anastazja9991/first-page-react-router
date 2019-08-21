import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <h2>Stopka</h2>
            {/* <Route path="/:page" render={(props) => {
                console.log(props);
                return (
                    <p>Jesteś na <span>{props.match.params.page}</span></p>
                );
            }} /> */}
        </div>
    );
}

export default Footer;