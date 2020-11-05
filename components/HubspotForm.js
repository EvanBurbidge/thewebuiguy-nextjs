const HubspotForm = ({
  formId,
  portalId,
  target,
}) => {
  if (process.browser) {
    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      document.body.appendChild(script);
      
      script.addEventListener('load', () => {
        if(window.hbspt) {
          window.hbspt.forms.create({
            portalId,
            formId,
            target: `#${target}`,
          })
        }
      });
    }
  }

  return <div id={target}></div> 
}

export default HubspotForm;