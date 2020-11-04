import navStyles from './header.module.css'

export default function Header() {
  const scrolled = false;
  const classNames = "scrolled main-nav fixed flex w-full bg-white border-b items-center justify-between flex-wrap p-5 m-auto top-0 animated";

  return (
    <nav className={scrolled ? ['scrolled', classNames] : classNames}>
    </nav>
  );
}
