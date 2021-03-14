import React from 'react';
import { Check } from 'react-feather';

import './styles.scss';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-success-page">
            <div className="contact-success-page-contents">
                <div className="checkmark-bubble">
                    <Check className="checkmark" />
                </div>
                <h2 className="success-text">Thank You!</h2>
                <p>
                    Thank you so much for your interest, I'll get back to you
                    soon. Keep an eye out for an email from{' '}
                    <span className="emphasis">rmetcalf.codes@gmail.com</span>,
                    and in the meantime I hope you have a wonderful day!
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
