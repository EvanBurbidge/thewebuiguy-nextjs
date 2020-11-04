import React from 'react';
import { Link } from 'react-scroll';

const HeaderListItem = ({
  toId = '',
  label = '',
  duration = 500,
  classes = '',
}) => (
  <Link className={[toId, classes]} to="anchor" spy={true} smooth={true} duration={duration}>
    {label}
  </Link>
);


export default HeaderListItem;