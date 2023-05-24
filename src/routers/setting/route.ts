import { PATH_APP } from '../path';

export const SettingRoute = {
  SETTING: `${PATH_APP}/setting`,
  ROLE: `${PATH_APP}/setting/role`,
  ADD_ROLE: `${PATH_APP}/setting/role/add-role`,
  UPDATE_ROLE: `${PATH_APP}/setting/role/update/:id`,
  ACCOUNT: `${PATH_APP}/setting/account`,
  ADD_ACCOUNT: `${PATH_APP}/setting/account/add-account`,
  UPDATE_ACCOUNT: `${PATH_APP}/setting/account/update-account/:id`,
  USER: `${PATH_APP}/setting/user`,
};
