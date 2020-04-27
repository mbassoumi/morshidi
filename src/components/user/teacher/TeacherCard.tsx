import React, {useMemo, useRef} from 'react';
import CustomImg from "../../shared/CustomImg";
import {Button, Popover} from "antd";
import {faEnvelope, faEye, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Tag from "../../shared/Tag";
import {useWindowSize} from "../../../hooks/useWindowSize";
import Rating from "../../shared/Rating";
import {Link} from "react-router-dom";
import AnimateHoveredComponent from "../../shared/AnimatedComponents/AnimateHoveredComponent";
import {Teacher} from "./types";

interface TeacherCardProps {
    teacher: Teacher
}
const TeacherCard = ({teacher}: TeacherCardProps) => {

    const [width] = useWindowSize();

    const fieldsDivRef = useRef(null);
    const fields = useMemo(() => {
        const fieldsTags = teacher.fields.map((field, index) => <Tag key={field.id} text={field.name}/>);

        //@ts-ignore
        const showMore = fieldsDivRef?.current?.offsetWidth < fieldsDivRef?.current?.scrollWidth;
        if (showMore) {
            const content = <div className="flex flex-wrap">
                {fieldsTags}
            </div>;
            return (
                <Popover content={content}>
                    <div className="truncate" ref={fieldsDivRef}>
                        {fieldsTags}
                    </div>
                </Popover>
            )
        }
        return (
            <div className="truncate" ref={fieldsDivRef}>
                {fieldsTags}
            </div>
        )

    }, [teacher, width]);

    const levelsDivRef = useRef(null);

    const levels = useMemo(() => {

        const levelsTags = teacher.levels.map((level, index) => <Tag key={level.id} text={level.name} bgColor="blue"/>);

        //@ts-ignore
        const showMore = levelsDivRef?.current?.offsetWidth < levelsDivRef?.current?.scrollWidth;
        if (showMore) {
            const content = <div className="flex flex-wrap">
                {levelsTags}
            </div>;
            return (

                <Popover content={content}>
                    <div className="truncate" ref={levelsDivRef}>
                        {levelsTags}
                    </div>
                </Popover>
            )
        }
        return (
            <div className="truncate" ref={levelsDivRef}>
                {levelsTags}
            </div>
        )
    }, [teacher, width]);

    return (
        <div className="p-6 animated zoomIn" style={{
            minWidth: '600px'
        }}>
            <div className="bg-gray-100 shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative">
                    <div className="absolute">
                        <div className="pl-4 pt-8 ">
                            <CustomImg src={teacher.user_account.avatar.thumb} alt={teacher.user_account.first_name} circle={false} size="lg"
                                       className="rounded"/>
                        </div>
                    </div>
                    <div className="absolute right-0 pr-4 pt-4">
                        <Button type="primary">follow</Button>
                    </div>
                    <div className="bg-indigo-700">
                        <div className="flex flex-col  items-center pb-6 pt-3">
                            <div className="text-white text-3xl font-bold capitalize tracking-wide">{teacher.user_account.first_name + ' ' + teacher.user_account.last_name}</div>
                            <div className="text-gray-200 text-sm  capitalize tracking-wide">{teacher.user_account.address.city.name}</div>
                            <div className="flex pt-2">
                                <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white mx-1 cursor-pointer"/>
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white mx-1 cursor-pointer"
                                                 title={'teacher.whatsapp'}/>
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-white mx-1 cursor-pointer"
                                                 title={'teacher.email'}/>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-4">
                        <Rating average={teacher.rating.average} count={teacher.rating.count} readonly={true}/>
                    </div>
                </div>

                <div className="pt-8 px-4">
                    {/*<div className="flex justify-end sm:hidden">*/}
                    {/*    <LibraryRating*/}
                    {/*        readonly*/}
                    {/*        className="whitespace-no-wrap"*/}
                    {/*        initialRating={teacher.rating.average}*/}
                    {/*        emptySymbol={<FontAwesomeIcon icon={faStar} className="text-gray-500" size="lg"/>}*/}
                    {/*        fullSymbol={<FontAwesomeIcon icon={faStar} className="text-yellow-500" size="lg"/>}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="flex">
                        <div className="w-1/2">
                            <div style={{
                                maxWidth: '500px'
                            }}>
                                <div className="text-black text-xl font-bold capitalize">About <span
                                    className="text-indigo-700">me</span></div>
                                <div className="pt-2 pr-4 font-mono h-24 overflow-hidden">{teacher.bio}</div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="pl-2 py-1">{fields}</div>
                            <div className="pl-2 py-1">{levels}</div>

                            <div className="pl-2 py-1 flex items-center">
                                <div className="text-black text-xl font-bold font-mono w-12">
                                    {'teacher.classes'}
                                </div>
                                <div className="ml-2 text-gray-600 truncate">
                                    Active Classes
                                </div>
                            </div>

                            <div className="pl-2 py-1 flex items-center">
                                <div className="text-black text-xl font-bold font-mono w-12">
                                    7
                                </div>
                                <div className="ml-2 text-gray-600">
                                    Courses
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between p-2">
                        <div className="flex items-center">
                            <div className="text-black text-xl font-bold font-mono">
                                {teacher.followers}
                            </div>
                            <div className="ml-2 text-gray-600">
                                followers
                            </div>
                        </div>
                        <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer">
                            <Link
                                to={`/teacher/${teacher.user_account.id}`}
                                className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center hover:bg-indigo-300 inline-block mx-2">
                                <FontAwesomeIcon icon={faEye} size="lg" className="text-white"/>
                            </Link>
                        </AnimateHoveredComponent>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TeacherCard;