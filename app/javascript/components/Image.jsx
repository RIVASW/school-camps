import React from 'react';
import photo from '../images/mainPhoto.jpg';

const Image = () => {
    return (       
        <div>
            <img className="mainPhoto" src={photo} alt="photo" />
        </div>
    );
};

export default Image;