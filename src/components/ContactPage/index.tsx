import React from 'react';
import Tooltip from 'react-tooltip';
import { HelpCircle } from 'react-feather';

import './styles.scss';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="contact-page-contents">
                <h2 className="contact-title text-center">Send me an email!</h2>
                <hr className="contact-hr" />
                <p className="contact-subtitle text-center">
                    Send me a message, and I'll get back to you!
                    <br />
                    Or you can reach out to me directly at{' '}
                    <span className="emphasis">rmetcalf.codes@gmail.com</span>!
                </p>
                <div className="contact-form-container">
                    <form
                        className="contact-form"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        action="/contact/success"
                    >
                        <div className="form-field">
                            <label className="form-label">
                                Name <span className="emphasis">*</span>
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                name="name"
                                placeholder="Jane Doe"
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">
                                Email <span className="emphasis">*</span>
                                <HelpCircle
                                    className="form-help"
                                    data-for="email-tooltip"
                                    data-tip
                                />
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                name="name"
                                placeholder="jdoe@example.com"
                                required
                            />
                            <Tooltip
                                id="email-tooltip"
                                effect="solid"
                                className="info-tip"
                                backgroundColor="#f2f2f2"
                                textColor="#434343"
                            >
                                I need this to know how to contact you back, no
                                spam I promise!
                            </Tooltip>
                        </div>

                        <div className="form-field">
                            <label className="form-label">
                                Message <span className="emphasis">*</span>
                            </label>
                            <textarea
                                className="form-textarea"
                                name="name"
                                placeholder="Hello! I saw your website and wanted to reach out to you about..."
                                autoCorrect="on"
                                rows={8}
                                required
                            />
                        </div>
                        <div className="form-submit">
                            <button
                                className="form-submit-button"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
