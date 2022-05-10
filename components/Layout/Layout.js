import { Layout, Typography, Col, Row } from 'antd';
import Nav from './Nav';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const PageLayout = ({ children }) => (
  <Layout style={{ height: '100vh' }}>
    <Header style={{ textAlign: 'center', height: '80px' }}>
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Title type="success">Commanda app+</Title>
      </Row>
    </Header>

    <Layout>
      <Sider width={300} style={{ paddingLeft: '10px' }}>
        <Nav />
      </Sider>
      <Content style={{ padding: '20px 0' }}>
        <Row justify="center" align="middle">
          <Col>
            {children}
          </Col>
        </Row>
      </Content>
    </Layout>

    {/* <Footer /> */}
  </Layout>
);

export default PageLayout;
