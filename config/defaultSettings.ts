import { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { SYSTEM_LOGO } from '../src/constants/index';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Code Planet',
  pwa: false,
  logo: SYSTEM_LOGO,
  iconfontUrl: '',
};

export default Settings;
