import navStyles from './header.module.css'
import HeaderListItem from './headerListItem';

export default function Header() {
  const classNames = "main-nav fixed flex w-full bg-white border-b items-center justify-between flex-wrap p-5 m-auto top-0 animated";


  return (
    <nav className={`${navStyles.scrolled} ${classNames}`}>
      <p>logo</p>
      <ul className="flex">
        <HeaderListItem classes="mr-3" label="home" toId="home"/>
        <HeaderListItem classes="mr-3" label="about" toId="about"/>
        <HeaderListItem classes="mr-3" label="blogs" toId="blogs"/>
        <HeaderListItem classes="mr-3" label="clients" toId="clients"/>
        <HeaderListItem classes="mr-3" label="testimonials" toId="testimonials"/>
        <HeaderListItem classes="mr-3" label="footer" toId="footer"/>
      </ul>
    </nav>
  );
}
