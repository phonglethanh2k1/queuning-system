export const endpoint = {
  SIGN_IN: `/authen/submit/login/{step}/${process.env.REACT_APP_PLATFORM}`,
  SIGN_UP: `/authen/submit/register/{step}/${process.env.REACT_APP_PLATFORM}`,
  FORGOT_PASSWORD: `/authen/submit/forgot/{step}/${process.env.REACT_APP_PLATFORM}`,
  GET_CONFIG_UI_SIGN_IN: `/authen/flow/login/{step}/${process.env.REACT_APP_PLATFORM}`,
  GET_CONFIG_UI_SIGN_UP: `/authen/flow/register/{step}/${process.env.REACT_APP_PLATFORM}`,
  GET_CONFIG_UI_FORGOT_PASSWORD: `/authen/flow/forgot/{step}/${process.env.REACT_APP_PLATFORM}`,
  SEND_EMAIL: '/authen/{action}/{type}/{email}',

  USER_PROFILE: '/users/profile',

  // POST
  LIST_POST: '/channels/get_detail',
  LIST_CHANNEL: '/channels/get_all_channels',
};
