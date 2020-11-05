import React from 'react';
import { Link } from 'react-scroll';

const HeaderListItem = ({
  toId = '',
  label = '',
  duration = 500,
  classes = '',
}) => (
  <Link className="mr-4 text-sm text-primaryDark font-bold uppercase cursor-pointer" to={toId} spy={true} smooth={true} duration={duration}>
    {label}
  </Link>
);


export default HeaderListItem;