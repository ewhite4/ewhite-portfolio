import React from 'react';
import { render } from 'react-dom';
import { css } from '../Home/Home.css';
import Footer from '../../footer';

export default function Home() {
        return (
            <div>
                <h1> Home Page </h1>
                    <p> Hi there and welcome to my page. </p>
                    <img src={require(`../../../assets/mv.jpg`)} width="80%" ></img>
                    <Footer />
            </div>
        );
    }
