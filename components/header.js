import { useState } from 'react'
import Image from 'next/image';
import navStyles from './header.module.css'
import HeaderListItem from './headerListItem';
import { Events } from 'react-scroll';

export default function Header() {
  const classNames = "main-nav fixed flex w-full items-center justify-between flex-wrap p-5 m-auto top-0 animated";
  const [isScrolled, setIsScrolled] = useState(false);

  if (process.browser) {
    window.addEventListener('scroll', () => {
      const bounding = document.querySelector('#home').getBoundingClientRect();
      if (((bounding.y * -1) - 10) >= window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    
  }

  Events.scrollEvent.register("end", (...args) => {
    if (args[0] !== 'home') {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav className={isScrolled ? `${navStyles.scrolled} ${classNames}` : classNames}>
      <Image width="40" height="40" src="https://www.datocms-assets.com/28175/1604596869-webuiguy.png" />
      <ul className="flex">
        <HeaderListItem classes="mr-3" label="home" toId="home" />
        <HeaderListItem classes="mr-3" label="about" toId="about" />
        <HeaderListItem classes="mr-3" label="blogs" toId="blogs" />
        <HeaderListItem classes="mr-3" label="testimonials" toId="testimonials" />
        <HeaderListItem classes="mr-3" label="contact" toId="footer" />
      </ul>
    </nav>
  );
}
