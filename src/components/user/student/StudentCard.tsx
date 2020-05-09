import React, {useMemo, useRef} from "react";
import {Student} from "./types";
import Tag from "../../shared/Tag";
import {Popover} from "antd";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faEye, faPhone} from "@fortawesome/free-solid-svg-icons";
import AnimateHoveredComponent from "../../shared/AnimatedComponents/AnimateHoveredComponent";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";


interface StudentCardProps {
    student: Student
}

const StudentCard = ({student}: StudentCardProps) => {

    const [width] = useWindowSize();
    const interestsDivRef = useRef(null);
    const interests = useMemo(() => {
        const interestsTags = student.fields.map((field, index) => <span key={index} className="mb-1"><Tag key={index} text={field.name}/></span>);
        //@ts-ignore
        const showMore = interestsDivRef?.current?.offsetWidth < interestsDivRef?.current?.scrollWidth;
        if (showMore) {
            const content = <div className="flex flex-wrap">
                {interestsTags}
            </div>;
            return (

                <Popover content={content}>
                    <div className="truncate" ref={interestsDivRef}>
                        {interestsTags}
                    </div>
                </Popover>
            )
        }
        return (
            <div className="truncate" ref={interestsDivRef}>
                {interestsTags}
            </div>
        )
    }, [student, width]);

    return (
        <div>
            <div className="p-6 animated zoomIn">
                <div className="w-64 bg-gray-100 shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-red-300">
                        <img src={student.user_account.avatar.thumb} alt={student.user_account.first_name} className="h-48 w-full"/>
                    </div>
                    <div className="p-3">
                        <div className="text-2xl text-black font-bold tracking-wide">{student.user_account.first_name + ' ' + student.user_account.last_name}</div>
                        <div className="py-1">
                            <Tag text={student.level.name}/>
                        </div>
                        <div className="py-1">{interests}</div>
                        <div className="flex justify-between items-center pt-2">

                            <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer">
                                <Popover content={<span>{'student.phone'}</span>}>
                                    <FontAwesomeIcon icon={faPhone} size="lg" className="text-indigo-700"/>
                                </Popover>
                            </AnimateHoveredComponent>

                            <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer">
                                <Popover content={<span>{'student.whatsapp'}</span>}>
                                    <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-green-700"/>
                                </Popover>
                            </AnimateHoveredComponent>

                            <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer">
                                <Popover content={<span>{'student.email'}</span>}>
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-black"/>
                                </Popover>
                            </AnimateHoveredComponent>

                            <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer">
                                <Link
                                    to={`/student/${student.user_account.id}`}
                                    className="">
                                    <FontAwesomeIcon icon={faEye} size="lg" className="text-indigo-700"/>
                                </Link>
                            </AnimateHoveredComponent>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default StudentCard;