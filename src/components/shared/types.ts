export interface TabButtonProps {
    active: boolean,
    onClick: () => void,
    text: string
}

export interface TagProps {
    text: string,
}

export interface CircleImgProps {
    src: string | any,
    alt: string,
}

export interface CardProps {
    children: any,
    className?: string
}