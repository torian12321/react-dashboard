export const isProduction = process.env.NODE_ENV === 'production';

const BASE_PATH = !isProduction
  ? '/'
  : '/react-dashboard/';
  
  export const PATHS: any = {
  HOME: {
    path: BASE_PATH,
    label: 'Dashboard'
  },
  DASHBOARD: {
    path: `${BASE_PATH}dashboard`,
    label: 'Dashboard',
  },
  SETTINGS: {
    path: `${BASE_PATH}settings`,
    label: 'Settings',
  }
};
