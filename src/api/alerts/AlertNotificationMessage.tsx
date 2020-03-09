import React from 'react';


interface AlertNotificationMessageProps {
    messages: string | string[] | object,
}

interface OneMessageProps {
    message: string,
}

interface MultipleMessagesProps {
    messages: string[],
}


const AlertNotificationMessage = ({messages}: AlertNotificationMessageProps) => {

    const getStringsFromObject = (object: any): string[] => {
        let strings: string[] = [];
        Object.keys(object).forEach(key => {
            if (typeof object[key] === 'object') {
                let tempStrings = getStringsFromObject(object[key]);
                strings = strings.concat(tempStrings);
            } else if (typeof object[key] === 'string') {
                strings.push(object[key]);
            }
        });
        return strings;
    };

    let styledMessage;
    if (Array.isArray(messages)) {
        styledMessage = <MultipleMessages messages={messages}/>;
    } else if (typeof messages === 'object') {
        let errorsText: string[] = getStringsFromObject(messages);
        styledMessage = <MultipleMessages messages={errorsText}/>;
    } else {
        styledMessage = <OneMessage message={messages}/>;
    }

    return (
        <div>
            {styledMessage}
        </div>
    );
};

const OneMessage = ({message}: OneMessageProps) => (
    <div>{message}</div>
);

const MultipleMessages = ({messages}: MultipleMessagesProps) => {
    let styledMessages = messages.map((value, index) => (
        <li key={index}>{value}</li>
    ));
    return (
        <ul className="list-inside list-disc ml-5 ">
            {styledMessages}
        </ul>
    );
};

export default AlertNotificationMessage;