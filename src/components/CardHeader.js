import React from 'react';
import PropTypes from 'prop-types';

function CardHeader(props) {
  return <h2 className="card-header">{props.children}</h2>;
}

CardHeader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CardHeader;
