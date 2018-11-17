import React from 'react';
import PropTypes from 'prop-types';

import './SectionName.scss';

const SectionName = ({ name }) => <h4 className="section__name">{name}</h4>;

SectionName.propTypes = {
  name: PropTypes.string.isRequired
};

export default SectionName;
