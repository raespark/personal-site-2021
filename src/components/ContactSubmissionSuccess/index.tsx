import React from 'react';
import { Check } from 'react-feather';

import LinkButton from '../LinkButton';
import './styles.scss';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-success-page">
            <div className="contact-success-page-contents">
                <div className="success-icon-title">
                    <div className="checkmark-bubble">
                        <Check className="checkmark" />
                    </div>
                    <h2 className="success-title">Thank You!</h2>
                </div>
                <p className="success-text">
                    Thank you so much for your interest, I'll get back to you
                    soon. Keep an eye out for an email from{' '}
                    <span className="emphasis">rmetcalf.codes@gmail.com</span>,
                    and in the meantime I hope you have a wonderful
                    day/week/period of time!
                </p>
                <LinkButton
                    className="back-home-button"
                    link="/"
                    text="Back home"
                    inverse
                />
            </div>
        </div>
    );
};

export default ContactPage;
