import React from 'react';
import {ClassPreviewProps} from './types';


const ClassPreview = ({children}: ClassPreviewProps) => {
    return (
        <div className="h-48">
            <div className="w-3/4 mx-auto mt-4 border-solid border-2 border-gray-300 rounded-lg p-4 min-h-full shadow-xl">
                {children}
            </div>
        </div>
    );
};

export default ClassPreview;