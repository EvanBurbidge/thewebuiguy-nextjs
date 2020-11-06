import HubspotForm from './HubspotForm';
import SectionHeader from './SectionHeader';
import Container from './container/Container';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 pb-10 md:pb-0 lg:pb-0" id="footer">
      <Container>
        <div className="flex flex-col">
          <span className="hidden md:flex lg:flex">
          <SectionHeader title="get in touch" />
          </span>
          <hr className="mb-6 hidden md:flex lg:flex"/>
          <div className="flex pt-10 md:pt-0 lg:pt-0 flex-col lg:flex-row justify-between w-full">
            <div className="flex flex-col mb-6 md:mb-0 lg:mb-0">
              <h1 className="text-2xl mb-3 lg:text-5xl text-primaryDark font-bold tracking-tighter leading-tight">Mail me</h1>
              <p className="text-primaryDark font-light leading-tight">thewebuiguy@gmail.com</p>
            </div>
            <div className="flex flex-col align-center flex-grow justify-center">
              <h1 className="text-2xl mb-3 lg:text-5xl text-primaryDark font-bold tracking-tighter leading-tight flex lg:hidden md:hidden">Get in touch</h1>
              <HubspotForm className="mt-10" portalId="7355413" formId="191605af-d293-453a-bbe7-0cd24422870a" target="hubspotForm" />
            </div>
          <div className="flex flex-col">
            <h1 className="text-2xl mb-3 lg:text-5xl text-primaryDark font-bold tracking-tighter leading-tight">Social Media</h1>
            <ul>
              <li className="mb-3">
                <a
                  href="https://twitter.com/thewebuiguy"
                  target="_blank"
                  className="font-light text-primaryDark hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-3">
              <a
              href="https://github.com/EvanBurbidge"
              target="_blank"
              className="font-light text-primaryDark hover:underline"
            >
              GitHub
            </a>
              </li>
              <li className="mb-3">
              <a
              href="https://www.linkedin.com/in/evan-burbidge-a0823361/"
              target="_blank"
              className="font-light text-primaryDark hover:underline"
            >
              Linkedin
            </a>
              </li>
            </ul>
          </div>
         </div>
         </div>
      </Container>
    </footer>
  )
}
