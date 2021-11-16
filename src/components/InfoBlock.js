import React from 'react';
import PropTypes from 'prop-types';

const InfoBlock = props => {
    return (
        <div className="info-block">
            <h2 className="info-block__question">{props.index + 1}. {props.question}</h2>
            <p className="info-block__text">{props.answer}</p>
            {props.code &&
                <pre>
                    <code>
                        {props.code}
                    </code>
                </pre>
            }
        </div>
    );
};

InfoBlock.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
    code: PropTypes.string,
    index: PropTypes.number
};

export default InfoBlock;
