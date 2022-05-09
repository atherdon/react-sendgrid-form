import { useRouter } from 'next/router';
// Components


import HackerNoonEnquiry from 'components/Forms/HackerNoonEnquiry';
import BaaCreditsFinished from 'components/Forms/BaaCreditsFinished';
import BrandsAsAuthorCredits from 'components/Forms/BrandsAsAuthorCredits';
import BrandsAsAuthorStory from 'components/Forms/BrandsAsAuthorStory';
import GotFlaggedAsBaa from 'components/Forms/GotFlaggedAsBaa';
import Old2019 from 'components/Forms/Old2019';
import PromotionalStoryDetected from 'components/Forms/PromotionalStoryDetected';
import BrandsAsAuthorRejected from 'components/Forms/BrandsAsAuthorRejected';
import PlagiarismOnHackerNoon from 'components/Forms/PlagiarismOnHackerNoon';
import SelectListForm from 'components/Forms/SelectListForm';
import UploadCompanyLogo from 'components/Forms/UploadCompanyLogo';
import AllLinksForm from 'components/Forms/AllLinksForm';

const Forms = () => {
  const router = useRouter();
  const { forms, email } = router.query;

  return (
    <>
      {(() => {
        switch (forms) {

          case 'old-2019':
            return <Old2019 email={email} />;
          // case 'credits-finished':
          //   return <BaaCreditsFinished email={email} />;
          // case 'got-flagged':
          //   return <GotFlaggedAsBaa email={email} />;
          // case 'promo-story':
          //   return <PromotionalStoryDetected email={email} />;
          // case 'credits-purchased':
          //   return <BrandsAsAuthorCredits email={email} />;
          // case 'story-submitted':
          //   return <BrandsAsAuthorStory email={email} />;
          // case 'story-rejected':
          //   return <BrandsAsAuthorRejected email={email} />;
          // case 'hackernoon-enquiry':
          //   return <HackerNoonEnquiry />;
          // case 'hackernoon-plagiarism':
          //   return <PlagiarismOnHackerNoon email={email} />;
          // case 'docs-selectlist':
          //   return <SelectListForm />;
          // case 'company-logo':
          //   return <UploadCompanyLogo />;
          // case 'all-links':
          //   return <AllLinksForm />;
          default:
            return null;
        }
      })()}
    </>
  );
};

export default Forms;
