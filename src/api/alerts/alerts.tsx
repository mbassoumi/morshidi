import React from 'react';

// @ts-ignore
import {store} from 'react-notifications-component';
import AlertNotificationMessage from './AlertNotificationMessage';


type AlertType = 'success' | 'default' | 'warning' | 'info' | 'danger';
type AlertInsert = 'top' | 'bottom';
type AlertContainer = 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
type AlertMessage = string | string[] | object;


export const showAlertNotification = (title: string, message: AlertMessage, type: AlertType = 'info', duration: number = 5000, insert: AlertInsert = 'top', container: AlertContainer = 'bottom-right') => {

    store.addNotification({
        title: title,
        message: <AlertNotificationMessage messages={message}/>,
        type: type,
        insert: insert,
        container: container,
        animationIn: ['animated', 'bounceIn'],
        animationOut: ['animated', 'bounceOut'],
        dismiss: {
            duration: duration,
            pauseOnHover: true,
            showIcon: true,
        }
    });
};