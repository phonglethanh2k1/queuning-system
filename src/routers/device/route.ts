import { PATH_APP } from '../path';

export const DeviceRoute = {
  DEVICE: `${PATH_APP}/device`,
  ADD_DEVICE: `${PATH_APP}/add-device`,
  DETAIL_DEVICE: `${PATH_APP}/device/:id`,
  DEVICE_PAGING: `${PATH_APP}/device/page/:pageNumber`,
  UPDATE_DEVICE: `${PATH_APP}/device/update/:id`,
};
