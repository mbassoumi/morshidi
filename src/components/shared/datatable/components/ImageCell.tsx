import React from 'react';

interface PictureCellProps {
    src: string,
    alt: string
}

const ImageCell = ({src, alt}: PictureCellProps) => {

    return (
        <img
            src={src}
            alt={alt}
            className="w-16 h-16 border-2 border-indigo-500 shadow-lg rounded-full overflow-hidden object-cover"
        />
    );

};

export default ImageCell;