import navStyles from './header.module.css'
import HeaderListItem from './headerListItem';

export default function Header() {
  const scrolled = false;
  const classNames = "scrolled main-nav fixed flex w-full bg-white border-b items-center justify-between flex-wrap p-5 m-auto top-0 animated";

  return (
    <nav className={scrolled ? ['scrolled', classNames] : classNames}>
      <p>logo</p>
      <ul className="flex">
        <HeaderListItem classes="mr-3" label="testing" toId="test1"/>
        <li className="mr-3">navigation</li>
        <li className="mr-3">navigation</li>
        <li className="mr-3">navigation</li>
        <li className="mr-3">navigation</li>
      </ul>
    </nav>
  );
}
