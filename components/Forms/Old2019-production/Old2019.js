import React, { useState } from 'react';
import { Form, Input, Typography, Image, Row, Col } from 'antd';
import Notification from 'utils/notifications';
import EmailInput from 'components/UI/EmailInput';
import ButtonComponent from 'components/UI/ButtonComponent';

const { Title } = Typography;

const Old2019 = ({ email }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async ({ email, type }) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, type })
      });
      if (response.status !== 200) {
        Notification('error', response.statusText);
      } else {
        Notification('success');
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Notification('error', error);
    }
  };

  return (
    <>
      <Row justify="center" align="middle">
        <Title level={2}>Выработка</Title>
      </Row>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
          >
            <EmailInput email={email} />

            <Form.Item label="type" hidden name="type" initialValue={1}>
              <Input />
            </Form.Item>

            <ButtonComponent isLoading={isLoading} />
            
          </Form>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10 }}>

        <Title level={4}>тут выведу данные которые были введены для проверки</Title>
          {/* <Title level={4}>Example</Title>
          <Image
            src="/form-images/old-2019.png"
          /> */}


        </Col>
      </Row>
    </>
  );
};

export default Old2019;
