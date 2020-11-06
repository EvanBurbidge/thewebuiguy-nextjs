import { Link } from 'react-scroll';
import Container from './container/Container';

const bgHeader = {
  backgroundImage: `url('mg-bg.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'fixed',
}

const IntroHeader = () => (
  <div className="section-container h-vh pt-24 px-10" id="home" style={bgHeader}>
    <Container>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between align-center items-center h-1/2 pt-10 md:pt-64">
        <div className="flex flex-col">
          <h3 className="text-3xl font-light text-primaryDark">Hello there i'm </h3>
          <h1 className="text-7xl font-bold capitalize text-primaryDark text-lead tracking-tighter leading-tight">The <span className="text-primary">web</span> ui <span className="text-primary">guy</span></h1>
          <p className="text-base text-primaryDark w-full md:w-2/3 lg:w-2/3 mb-6 md:mb-0 lg:mb-0">I'm a Developer with over 6 years of experience. Experienced with all stages of the development cycle for dynamic projects</p>
        </div>
        <div class="flex mb-6">
          <h5 className="text-3xl bg-primaryDark text-white px-5 py-2 rounded-full font-bold text-lead tracking-tighter leading-tight cursor-pointer">
            <Link to={'about'} spy={true} smooth={true} duration={500}>
              Read More
          </Link>
          </h5>
        </div>
      </div>
    </Container>
  </div>
);

export default IntroHeader