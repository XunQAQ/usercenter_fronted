import {

  LockOutlined,

  UserOutlined,

} from '@ant-design/icons';
import {Alert, Divider, message, Space, Tabs} from 'antd';
import React, {useState} from 'react';
import {ProFormCheckbox, ProFormText, LoginForm} from '@ant-design/pro-form';
import {history, useModel} from 'umi';
import {PLANET_LINK, SYSTEM_LOGO} from '@/constants';
import Footer from '@/components/Footer';
import {login} from '@/services/ant-design-pro/api';
import styles from './index.less';
import {Link} from "@umijs/preset-dumi/lib/theme";

const LoginMessage: React.FC<{
  content: string;
}> = ({content}) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const {initialState, setInitialState} = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();

    if (userInfo) {
      await setInitialState((s) => ({...s, currentUser: userInfo}));
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {



    try {
      // 登录
      const user = await login({...values, type});

      if (user) {
        const defaultLoginSuccessMessage = 'Login successfully!';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** This method will jump to the location of the redirect parameter*/

        if (!history) return;
        const {query} = history.location;
        const {redirect} = query as {
          redirect: string;
        };
        history.push(redirect || '/');
        return;
      }
      // const defaultLoginFailureMessage = 'please try again!';
      // message.error(defaultLoginFailureMessage);

    } catch (error) {
      const defaultLoginFailureMessage = 'Could not log in please try again!';
      message.error(defaultLoginFailureMessage);
    }
  };

  const {status, type: loginType} = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: 'Log In'
            }
          }}
          logo={<img alt="logo" src="/logo.png" />
        }
          title="Watson Coding Planet"
          subTitle={<a href={PLANET_LINK} target="_blank" rel="noreferrer">SPACE IS THE LIMIT REACH FOR THE GALAXY</a>}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'Account  Login'}/>
          </Tabs>
          {status === 'error' && loginType === 'account' && (
            <LoginMessage content={'Wrong account and password'}/>
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="Please enter your account number"
                rules={[
                  {
                    required: true,
                    message: 'Account number is required!',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="Please enter your password"
                rules={[
                  {
                    required: true,
                    message: 'Password is a required field!',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: 'Length cannot be less than 8',
                  },
                ]}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <Space split={<Divider type="vertical" />}>
              <ProFormCheckbox noStyle name="autoLogin">
                Auto Login
              </ProFormCheckbox>
              <Link to="/user/register">Sign up</Link>
              <a
                style={{
                  float: 'right',
                }}
                href={PLANET_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Forgot password
              </a>
            </Space>
          </div>
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
