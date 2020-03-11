import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import styles from "../styles/styles";

const MainPage = () => (
    <div>
        <div className="container">
            <Image/>
            <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
            <h3 className="mainText">Catalog of camps and activities for kids</h3>
        </div>
        <div className="main-nav">
            <Link to={`/camps`}>
                <p>Camps</p>
            </Link>
            <Link to={`/activities`}>
                <p>Activities</p>
            </Link>
            <Link to={`/add`}>
                <p>Add camp or activity</p>
            </Link>
        </div>
       
    </div>
);

export default MainPage;