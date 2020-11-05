import HubspotForm from './HubspotForm';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2" id="footer">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="pl-10  mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <h3 className="text-4xl mb-10 lg:text-5xl text-primaryDark font-bold tracking-tighter leading-tight text-center lg:text-left">
              Get in touch
            </h3>
            <HubspotForm className="pl-10 mt-10" portalId="7355413" formId="191605af-d293-453a-bbe7-0cd24422870a" target="hubspotForm" />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://twitter.com/thewebuiguy"
              className="mx-3 bg-primaryDark hover:bg-white hover:text-primaryDark border border-primaryDark text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Twitter
            </a>
            <a
              href="https://github.com/EvanBurbidge"
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex w-full">
        </div>
    </footer>
  )
}
