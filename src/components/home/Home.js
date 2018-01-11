import React from 'react';
import './home.css';
import bankSvg from './communityBank.svg';

export default function Home() {
    return (
        <div>
            <img src={bankSvg} />
            <a href={process.env.REACT_APP_LOGIN}>
                <button>Login</button>
            </a>
        </div>
    )
}