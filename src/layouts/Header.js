import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css';
import jpg1 from '../images/img1.jpg';
// import jpg2 from '../images/img2.jpg';
// import jpg3 from '../images/img3.jpg';

const Header = () => {

    // const images = [jpg1, jpg2, jpg3];
    // const index = Math.floor(Math.random() * 3);
    // const img = images[index];

    return (
        <>
            <Switch>
                <Route path="/" render={() => (
                    <img src={jpg1} alt="" />
                )} />

                {/* <Route path="/products" render={() => (
                    <img src={jpg1} alt="" />
                )} />

                <Route path="/contact" render={() => (
                    <img src={jpg2} alt="" />
                )} />

                <Route path="/admin" render={() => (
                    <img src={jpg3} alt="" />
                )} />

                <Route render={() => (
                    <img src={jpg1} alt="" />
                )} /> */}
            </Switch>

            {/* <img src={img} alt="header" /> */}
        </>
    );
}

export default Header;