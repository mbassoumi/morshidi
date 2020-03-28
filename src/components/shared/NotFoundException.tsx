import React from 'react';
import NotFound404 from '../../img/404_gif.gif';


const NotFoundException = () => {

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <img src={NotFound404} alt="not found"/>
        </div>
    );
};

export default NotFoundException;