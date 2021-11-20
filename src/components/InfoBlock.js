import React from 'react';
import PropTypes from 'prop-types';

const InfoBlock = props => {
    return (
        <div className="info-block">
            <h2 className="info-block__question" id={props.id}>
                <a href={'#' + props.id}>{props.id}. {props.question}</a>
            </h2>
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
    id: PropTypes.number
};

export default InfoBlock;
