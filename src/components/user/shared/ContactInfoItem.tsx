import React, {HTMLProps} from "react";
import {ContactInfo} from "../types";
import {faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import AnimateHoveredComponent from "../../shared/AnimatedComponents/AnimateHoveredComponent";
import {Popover} from "antd";


interface ContactInfoItemProps extends HTMLProps<HTMLDivElement> {
    contactInfo: ContactInfo
    animated?: boolean
    animatedClass?: string
}

const ContactInfoItem = ({animated, contactInfo, ...props}: ContactInfoItemProps) => {
    let icon: IconDefinition;
    switch (contactInfo.type) {
        case "email":
            icon = faEnvelope;
            break
        case "phone":
            icon = faPhoneAlt;
    }
    return (
        <AnimateHoveredComponent {...props} key={contactInfo.id} animation='heartBeat infinite'>
            <Popover content={<span>{contactInfo.value}</span>}>
                <FontAwesomeIcon icon={icon}/>
            </Popover>
        </AnimateHoveredComponent>
    )
}

export default ContactInfoItem;