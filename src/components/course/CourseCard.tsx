import React, {useMemo, useRef} from "react";
import {Course} from "./types";
import Tag from "../shared/Tag";
import {useWindowSize} from "../../hooks/useWindowSize";
import {Popover, Avatar} from 'antd';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faStar} from "@fortawesome/free-solid-svg-icons";
import LibraryRating from "react-rating";
import {Link} from "react-router-dom";
import TeacherCard from "../user/teacher/TeacherCard";
import AnimateHoveredComponent from "../shared/AnimatedComponents/AnimateHoveredComponent";


interface CourseCardProps {
    course: Course
}

const CourseCard = ({course}: CourseCardProps) => {

    const [width] = useWindowSize();

    const keywordsDivRef = useRef(null);

    const keywords = useMemo(() => {
        const keywordsTags = course.search_keywords.map((value, index) => <span key={index}
                                                                         className="mr-2 text-blue-400 hover:text-blue-300 cursor-pointer">{`#${value}`}</span>);
        //@ts-ignore
        const showMore = keywordsDivRef?.current?.offsetWidth < keywordsDivRef?.current?.scrollWidth;
        if (showMore) {
            const content = <div className="flex flex-wrap">
                {keywordsTags}
            </div>;
            return (

                <Popover content={content}>
                    <div className="truncate" ref={keywordsDivRef}>
                        {keywordsTags}
                    </div>
                </Popover>
            )
        }
        return (
            <div className="truncate " ref={keywordsDivRef}>
                {keywordsTags}
            </div>
        )
    }, [course, width]);

    // const actions = useMemo(() => {
    //
    //     const actionItem = (icon: IconProp, text: string, link: string, borderBottom: boolean = true) => {
    //         return (
    //             <li className={"hover:bg-indigo-300 hover:text-white  text-white  whitespace-no-wrap" + (borderBottom ? " border-b" : '')}>
    //                 <Link className="py-2 px-4 block text-center hover:text-white" to={link}>
    //                     <FontAwesomeIcon icon={icon} size="lg"/>
    //                     <span className="ml-2">{text}</span>
    //                 </Link>
    //             </li>
    //         )
    //     };
    //
    //     return (
    //         <div className="">
    //             <ul className="dropdown-content">
    //                 {actionItem(faEye, 'View', '#')}
    //                 {actionItem(faPencilAlt, 'Edit', '#', false)}
    //             </ul>
    //         </div>
    //     )
    // }, [course]);

    return (

        <div className="p-3 animated zoomIn">
            <div className="bg-gray-100 shadow-2xl border border-gray-200 rounded-lg">
                <div className="pl-4 pr-6">
                    <div className="flex py-2 flex-wrap justify-between items-center">
                        <div className="text-2xl text-black font-bold tracking-wide whitespace-no-wrap">
                            {course.title}
                        </div>
                        <div>
                            <LibraryRating
                                readonly
                                className="whitespace-no-wrap"
                                initialRating={course.rating.average}
                                emptySymbol={<FontAwesomeIcon icon={faStar} className="text-gray-500" size="lg"/>}
                                fullSymbol={<FontAwesomeIcon icon={faStar} className="text-yellow-500" size="lg"/>}
                            />
                        </div>
                    </div>
                    <div className="h-24 overflow-hidden">
                        {course.description}
                    </div>
                    <div className="py-2">
                        <Tag text={course.field.name}/>
                    </div>
                    <div className="py-2">
                        <Tag text={course.level.name}/>
                    </div>
                    <div>
                        {keywords}
                    </div>
                    <div className="flex justify-between flex-row-reverse">
                        <div className="flex p-2 flex-row-reverse">
                            <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer">
                                <Link
                                    to={`/course/${course.id}`}
                                    className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center hover:bg-indigo-300 inline-block mx-2">
                                    <FontAwesomeIcon icon={faEye} size="lg" className="text-white"/>
                                </Link>
                            </AnimateHoveredComponent>

                            <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer">
                                <Popover content={<TeacherCard teacher={course.teacher}/>}>
                                    <Avatar src={course.teacher.user_account.avatar.thumb}/>
                                </Popover>
                            </AnimateHoveredComponent>
                        </div>

                        <div className="flex items-center">
                            <div className="text-black text-xl font-bold font-mono">
                                {course.group_classes.length}
                            </div>
                            <div className="ml-2 text-gray-600">
                                Active Classes
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};


export default CourseCard;