import React, { useState } from 'react';
import classnames from 'classnames';
import { navigate } from 'gatsby-link';
import Tooltip from 'react-tooltip';
import { HelpCircle, Loader } from 'react-feather';

import './styles.scss';

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
}

const ContactPage: React.FC = () => {
    // Gatsby and netlify form code from
    // https://github.com/sw-yx/gatsby-netlify-form-example-v2/blob/master/src/pages/contact.js

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => {
                setLoading(true);
                setTimeout(() => {
                    navigate(form.getAttribute('action'));
                }, 500);
            })
            .catch((error) => alert(error));
    };
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
                        onSubmit={handleSubmit}
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
                                onChange={handleChange}
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
                                name="email"
                                placeholder="jdoe@example.com"
                                onChange={handleChange}
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
                                name="message"
                                placeholder="Hello! I saw your website and wanted to reach out to you about..."
                                autoCorrect="on"
                                rows={8}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-submit">
                            <button
                                className={classnames('form-submit-button', {
                                    loading: loading,
                                })}
                                type="submit"
                            >
                                {loading ? (
                                    <Loader className="button-loading-icon" />
                                ) : (
                                    'Send'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
