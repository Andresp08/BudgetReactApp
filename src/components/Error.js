
import React from 'react'
import PropTypes from 'prop-types';

const Error = ({mensaje, presupuesto}) => (
    <p className="alert alert-danger error">{mensaje} {presupuesto}</p>
);

Error.propTypes = {
    mensaje: PropTypes.string.isRequired,
    presupuesto: PropTypes.number.isRequired
} 

export default Error;