import React, { useState } from 'react';
import { Form, Input, Typography, Image, Row, Col } from 'antd';
import Notification from '../../../utils/notifications';
import EmailInput from '../../UI/EmailInput';
import ButtonComponent from '../../UI/ButtonComponent';

const { Title } = Typography;

const BaaCreditsFinished = ({ email }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async ({ type, email, first_name }) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type, email, first_name })
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
        <Title level={2}>Заказ</Title>
      </Row>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
          <Form name="basic" onFinish={onFinish} layout="vertical">
            <Form.Item label="type" hidden name="type" initialValue={2}>
              <Input />
            </Form.Item>

            <EmailInput email={email} />
        
            <Form.Item
              label="First Name"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: 'Please input first name!'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <ButtonComponent isLoading={isLoading} />
            
          </Form>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10 }}>
        <Title level={4}>тут выведу данные которые были введены для проверки</Title>
          {/* <Title level={4}>Example</Title>
          <Image
            src="/form-images/baa-credits-finished.png"
          /> */}
        </Col>
      </Row>
    </>
  );
};

export default BaaCreditsFinished;
