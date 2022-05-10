import React from 'react';
import Link from 'next/link';



const Old = () => (
    <Link href="/baa/old-2019">
        <a>Выработка</a>
    </Link>
);

const CreditsFinished = () => (
    <Link href="/baa/credits-finished">
        <a>Заказ</a>
    </Link>
);

const GotFlagged = () => (
    <Link href="/baa/got-flagged">
        <a>Касса</a>
    </Link>
);




const PromoStory = () => (
    <Link href="/baa/promo-story">
        <a>Promotional story detected #writers</a>
    </Link>
);

const CreditsPurchased = () => (
    <Link href="/baa/credits-purchased">
        <a>BAA credits-purchased V1</a>
    </Link>
);

const StorySubmitted = () => (
    <Link href="/baa/story-submitted">
        <a>BAA Story Submitted #sponsors</a>
    </Link>
);

const StoryRejected = () => (
    <Link href="/baa/story-rejected">
        <a>BAA Rejected Story</a>
    </Link>
);

const HackerNoonEnquiry = () => (
    <Link href="/baa/hackernoon-enquiry">
        <a>Hacker Noon Enquiry Form</a>
    </Link>
);

const Plagiarism = () => (
    <Link href="/baa/hackernoon-plagiarism">
        <a>Plagiarism on Hacker Noon</a>
    </Link>
);

const SelectList = () => (
    <Link href="/baa/docs-selectlist">
        <a>Select List (Google Form)</a>
    </Link>
);

const CompanyLogo = () => (
    <Link href="/baa/company-logo">
        <a>Company Logo</a>
    </Link>
);

const AllLinks = () => (
    <Link href='/baa/all-links'>
        <a>All Links</a>
    </Link>
);

export {
    Old, CreditsFinished, GotFlagged, 
    
    
    
    
    PromoStory,
    CreditsPurchased, StorySubmitted, StoryRejected,
    HackerNoonEnquiry, Plagiarism, SelectList, CompanyLogo,
    AllLinks
}