import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import {message, Tabs} from 'antd';
import React, {useState} from 'react';
import {history} from 'umi';
import {PLANET_LINK, SYSTEM_LOGO} from '@/constants';
import Footer from '@/components/Footer';
import {register} from '@/services/ant-design-pro/api';
import styles from './index.less';
import {LoginForm, ProFormText} from '@ant-design/pro-form';
import {Link} from "@umijs/preset-dumi/lib/theme";

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');

  // 表单提交
  const handleSubmit = async (values: API.RegisterParams) => {
    const {userPassword, checkPassword} = values;
    // 校验
    if (userPassword !== checkPassword) {
      message.error('The password entered twice does not match');
      return;
    }

    try {
      // Registe
      const id = await register(values);
      if (id) {
        const defaultLoginSuccessMessage = 'Registration success!';
        message.success(defaultLoginSuccessMessage);

        /** This method will jump to the location of the redirect parameter */
        if (!history) return;
        const {query} = history.location;
        history.push({
          pathname: '/user/login',
          query,
        });
        return;
      }
    } catch (error: any) {
      const defaultLoginFailureMessage = 'Try again';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: 'Sign Up'
            }
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title="Watson Coding Planet"
          subTitle={<a href={PLANET_LINK} target="_blank" rel="noreferrer">SPACE IS THE LIMIT REACH FOR THE GALAXY</a>}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'Registration Page '}/>
          </Tabs>
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="Account Number"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your Account Number',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: 'Length cannot be less than 8  ',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="Checked password"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password again',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: 'Length cannot be less than 8',
                  },
                ]}
              />
              <ProFormText
                name="planetCode"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="Student number(Queens ID)"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your student ID',
                  },
                ]}
              />
              <Link style={{
                float: 'right',
              }}to="/user/login">Return to Sign in</Link>
            </>
          )}
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
