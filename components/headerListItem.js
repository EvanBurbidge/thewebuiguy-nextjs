import React from 'react';
import { Link } from 'react-scroll';

const HeaderListItem = ({
  toId = '',
  label = '',
  duration = 500,
  classes = '',
}) => (
  <Link className="mr-2 text-md font-bold text-capitalize cursor-pointer" to={toId} spy={true} smooth={true} duration={duration}>
    {label}
  </Link>
);


export default HeaderListItem;