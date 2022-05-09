const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = ({
  type,
  email,
  first_name,
  article_link,
  article_title,
  brand,
  full_name,
  url,
  time,
  handle,
  storyTitle,
  hasCredits
}) => {
  let msg = {};

  switch (type) {
    case 1:
      msg = {
        to: email,
        from: 'Arthur <arthur.tkachenko.netweight@gmail.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-b401af5d0ff348c6ab3d3e0d29e0e001'
      };
      break;
    case 2:
      msg = {
        to: email,
        from: 'Arthur <arthur.tkachenko.netweight@gmail.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-b401af5d0ff348c6ab3d3e0d29e0e001',
        dynamicTemplateData: {
          first_name
        }
      };
      break;
    case 3:
      msg = {
        to: email,
        from: 'Arthur <arthur.tkachenko.netweight@gmail.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-b401af5d0ff348c6ab3d3e0d29e0e001',
        dynamicTemplateData: {
          first_name,
          article_link,
          article_title,
          brand
        }
      };
      break;
    case 4:
      msg = {
        to: email,
        from: 'Arthur <arthur.tkachenko.netweight@gmail.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-b401af5d0ff348c6ab3d3e0d29e0e001',
        dynamicTemplateData: {
          full_name,
          url,
          time
        }
      };
      break;
    case 5:
      msg = {
        to: email,
        from: 'Arthur <arthur.tkachenko.netweight@gmail.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-b401af5d0ff348c6ab3d3e0d29e0e001'
      };
      break;
    case 6:
      msg = {
        to: email,
        from: 'Arthur <arthur.tkachenko.netweight@gmail.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-b401af5d0ff348c6ab3d3e0d29e0e001',
        dynamicTemplateData: {
          handle,
          storyTitle,
          hasCredits
        }
      };
      break;
    default: {
      break;
    }
  }

  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();
};

export { sendEmail };
