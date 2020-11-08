import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import navStyles from './header.module.css'

export default function Header() {
  const classNames = "main-nav fixed flex w-full items-center justify-between flex-wrap p-5 m-auto top-0 animated";
  const [isScrolled] = useState(true);
  return (
    <nav className={isScrolled ? `${navStyles.scrolled} ${classNames}` : classNames}>
      <Image width="40" height="40" src="https://www.datocms-assets.com/28175/1604596869-webuiguy.png" />
      <ul className="flex">
        <li>
          <Link className="mr-4 text-sm text-primaryDark font-bold uppercase cursor-pointer" href="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
