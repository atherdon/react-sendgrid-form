import { Menu, Typography } from 'antd';
import {
    Old, CreditsFinished, GotFlagged, PromoStory,
    CreditsPurchased, StorySubmitted, StoryRejected,
    HackerNoonEnquiry, Plagiarism, SelectList, CompanyLogo, AllLinks
} from 'components/Links/NavigationLinks/NavigationLinks';

const { Title } = Typography;

const Nav = () => (
    <>
        <Title level={2} type="success">
                Forms
        </Title>


        <Menu mode="inline" theme="dark">
            <Menu.Item key="1">
                <Old />
            </Menu.Item>
            <Menu.Item key="2">
                <CreditsFinished />
            </Menu.Item>

            <Menu.Item key="3">
                <GotFlagged />
            </Menu.Item>

            {/* <Menu.Item key="4">
                <PromoStory />
            </Menu.Item>
            <Menu.Item key="5">
                <CreditsPurchased />
            </Menu.Item>
            <Menu.Item key="6">
                <StorySubmitted />
            </Menu.Item>
            <Menu.Item key="7">
                <StoryRejected />
            </Menu.Item>
            <Menu.Item key="8">
                <HackerNoonEnquiry />
            </Menu.Item>
            <Menu.Item key="9">
                <Plagiarism />
            </Menu.Item>
            <Menu.Item key="10">
                <SelectList />
            </Menu.Item>
            <Menu.Item key="11">
                <CompanyLogo />
            </Menu.Item>
            <Menu.Item key="12">
                <AllLinks />
            </Menu.Item> */}
        </Menu>
    </>
);

export default Nav;
