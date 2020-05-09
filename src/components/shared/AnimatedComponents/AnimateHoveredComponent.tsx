import React, {HTMLProps, useState} from "react";
import classNames from "classnames";

const AnimateHoveredComponent = ({animation, className, children, ...props}: { animation: string } & HTMLProps<HTMLDivElement>) => {

    const [isHovered, setIsHovered] = useState(false);

    const combinedClassName = classNames(
        className,
        {
            'animated': isHovered,
            [animation]: isHovered
        }
    );
    return (
        <div
            {...props}
            className={combinedClassName}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </div>
    )
};

export default AnimateHoveredComponent;