import { Link } from 'react-scroll'; 

const IntroHeader = () => (
  <div className="section-container h-vh pt-24 px-10 clip border-b border-gray-500" id="home">
    <div className="flex justify-between align-center  items-center h-full">
      <div classNaem="flex flex-col">
        <h3 className="text-3xl font-light text-primaryDark">Hello there i'm </h3>
        <h1 className="text-7xl font-bold capitalize text-primaryDark">The <span className="text-primary">web</span> ui <span className="text-primary">guy</span></h1>
        <p className="text-base text-primaryDark w-2/3">I'm a Developer with over 6 years of experience. Experienced with all stages of the development cycle for dynamic projects</p>
      </div>
      <div>
        <h5 class="text-3xl bg-primaryDark text-white px-5 py-2 rounded-full font-thin">
          <Link to={'about'} spy={true} smooth={true} duration={500}>
            Read More
          </Link>
        </h5>
      </div>
    </div>
  </div>
);

export default IntroHeader