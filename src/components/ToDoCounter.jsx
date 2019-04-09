import React from 'react';
import PropTypes from 'prop-types';

const ToDoCounter = ({ count }) => {
    return (
        <div className="counter">
            {count}
        </div>
    )
}

export default ToDoCounter;

ToDoCounter.propTypes = {
    count: PropTypes.string.isRequired
}