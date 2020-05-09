import React from 'react';
import {Teacher} from "./types";
import classNames from "classnames";
import Rating from "../../shared/Rating";
import Tag from "../../shared/Tag";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPencilRuler, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import ContactInfoItem from "../shared/ContactInfoItem";
import AnimateHoveredComponent from "../../shared/AnimatedComponents/AnimateHoveredComponent";
import {Link} from "react-router-dom";
import {Avatar, Popover} from "antd";
import {faAccusoft} from "@fortawesome/free-brands-svg-icons";

interface TeacherCardProps {
    teacher: Teacher
}
const TeacherCard = ({teacher}: TeacherCardProps) => {

    const fields = teacher.fields?.map((field) => (
        <Tag key={field.id} text={field.name} className="bg-indigo-500 text-white mr-1 mb-1"/>))

    const levels = teacher.levels?.map((level) => (
        <Tag key={level.id} text={level.name} className="bg-blue-500 text-white mr-1 mb-1"/>))

    const contactInfos = teacher.user_account?.contact_info.map((contactInfo, index) => {
        let className = 'cursor-pointer'
        if (index !== 0){
            className = className + ' ml-4'
        }
        return <ContactInfoItem key={contactInfo.id} className={className} contactInfo={contactInfo}/>
    });


    return (
        <div className="relative p-3 border rounded-lg  shadow-2xl mr-3 mt-3">
            <div className="absolute right-0 top-0 -mt-3 -mr-3">
                <div className="bg-white text-black border shadow-lg rounded-full px-2">
                    <span className="mr-1 font-mono">123</span>
                    <FontAwesomeIcon className="hover:text-blue-400 cursor-pointer" icon={faUserPlus} size="1x"/>
                </div>
            </div>
            <div className="flex text-lg">
                <div className="flex flex-col items-center m-4">

                        <Avatar
                            src={teacher.user_account?.avatar.thumb}
                            alt={teacher.user_account?.username}
                            size={60}
                        />
                    {/*<img src={teacher.user_account?.avatar.thumb} alt={teacher.user_account?.username}*/}
                    {/*     className="object-center object-cover rounded-full"/>*/}
                    <div className="flex flex-no-wrap justify-center items-center text-center mt-2">
                        <Rating initialRating={teacher.rating?.average} className="text-xs"/>
                        <span className="ml-1 text-xs">({teacher.rating?.count})</span>
                    </div>

                    <div className="flex justify-center">
                        {contactInfos}
                    </div>
                </div>
                <div className="m-2 w-full">
                    <div className="font-bold capitalize text-black truncate">
                        {teacher.user_account?.first_name + ' ' + teacher.user_account?.last_name}
                    </div>
                    <div className="text-xs opacity-75">({teacher.user_account?.username})</div>
                    <div className="text-xs">{teacher.user_account?.address.city.name}</div>
                    <div className="truncate">
                        {fields}
                    </div>
                    <div className="truncate">
                        {levels}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap font-mono mx-3">
                <div className="mr-3">
                    <span className="text-black font-bold  mr-1">33</span>
                    <span className="text-xs text-1x">Course</span>
                </div>
                <div className="mr-3">
                    <span className="text-green-600 font-bold mr-1">15</span>
                    <span className="text-xs text-1x">Active Class</span>
                </div>
                <div>
                    <span className="text-red-600 font-bold mr-1">15</span>
                    <span className="text-xs text-1x">Sessions</span>
                </div>
            </div>
            <div className="flex flex-row-reverse mr-3">
                <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer ml-3">
                    <Popover placement="left" content={<span>view teacher profile</span>}>
                        <Link
                            to={`/teacher/${teacher.user_account?.id}`}>
                            <FontAwesomeIcon icon={faEye} size="lg" className="text-indigo-700"/>
                        </Link>
                    </Popover>

                </AnimateHoveredComponent>
                <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer ml-3">
                    <Popover placement="left" content={<span>view teacher courses</span>}>
                        <Link
                            to='#'>
                            <FontAwesomeIcon icon={faAccusoft} size="lg" className="text-orange-700"/>
                        </Link>
                    </Popover>
                </AnimateHoveredComponent>
                <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer">

                    <Popover placement="left" content={<span>Book private session</span>}>
                        <Link
                            to='#'>
                            <FontAwesomeIcon icon={faPencilRuler} size="lg" className="text-teal-700"/>
                        </Link>
                    </Popover>
                </AnimateHoveredComponent>
            </div>
        </div>
    )
};

export default TeacherCard;