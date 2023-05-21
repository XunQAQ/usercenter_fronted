import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';





const Welcome: React.FC = () => {
  const toolList = [
    {
      name: 'API Developer Platform ',
      description: 'API Open Platform provides developers with the tools and resources they need to build innovative applications and integrate our services seamlessly. ',
    },
    {
      name: 'AI DEV',
      description: 'Our AI Development Assistant is a powerful tool designed to assist developers in building AI-powered applications. It provides a range of features and functionalities to streamline the development process',
    },
    {
      name: 'Smart BI ',
      description: 'short for Smart Business Intelligence, is a cutting-edge solution that enables businesses to analyze and visualize their data in a smart and efficient manner. With Smart BI, users can gain valuable insights from their raw datasets without the need for extensive data preparation or complex data manipulation',
    },
    // 添加更多工具
  ];

  return (
    <PageContainer>

      <Card>
        <Alert
          message="Welcome to Watson's Planet"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />

        <Typography.Paragraph>
          This is a planet user management center later based on students can register and login to this site by user name and password, and administrators can manage users in this site, click Admin to see it!
          You can click about the application to see the full project idea or check out the source code via GitHub.
        </Typography.Paragraph>


        <Typography.Paragraph>
          <span style={{ fontSize: 20, fontWeight: 'bold' }}>
            In the future, we plan to develop a series of tools designed to help students play programming better.
          </span>
          <br></br>
          {' '}
          Our goal is to provide easy-to-use, powerful tools that make programming more fun and fulfilling.
          Stay tuned for the following tools:
        </Typography.Paragraph>

        <List
          dataSource={toolList}
          renderItem={(item) => (
            <List.Item>
              <CheckCircleOutlined style={{ marginRight: 8 }} />
              <Typography.Text strong>{item.name}:</Typography.Text> {' '}
              {item.description}
            </List.Item>
          )}
        />




        {/* 添加其他内容 */}
      </Card>
    </PageContainer>
  );
};

export default Welcome;

