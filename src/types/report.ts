export enum nameService {
  KHAM1 = 'Khám tổng quát',
  KHAM2 = 'Khám mắt',
  KHAM3 = 'Khám tim mạch',
  ALL = 'Tất cả',
}
export const nameServiceOption = {
  [nameService.KHAM1]: {
    value: nameService.KHAM1,
    label: 'Khám tổng quát',
  },
  [nameService.KHAM2]: {
    value: nameService.KHAM2,
    label: 'Khám mắt',
  },
  [nameService.KHAM3]: {
    value: nameService.KHAM3,
    label: 'Khám tim mạch',
  },
  [nameService.ALL]: {
    value: nameService.ALL,
    label: 'Tất cả',
  },
};

export enum status {
  WAITING = 0,
  USED = 1,
  SKIP = -1,
  ALL = 2,
}

export const statusOption = {
  [status.ALL]: {
    value: status.ALL,
    label: 'Tất cả',
  },
  [status.USED]: {
    value: status.USED,
    label: 'Đã sử dụng',
  },
  [status.WAITING]: {
    value: status.WAITING,
    label: 'Đang chờ',
  },
  [status.SKIP]: {
    value: status.SKIP,
    label: 'Bỏ qua',
  },
};

export enum powerSupply {
  KIOSK = 'Kiosk',
  HETHONG = 'Hệ thống',
  ALL = 'Tất cả',
}

export const powerSupplyOption = {
  [powerSupply.ALL]: {
    value: powerSupply.ALL,
    label: 'Tất cả',
  },
  [powerSupply.KIOSK]: {
    value: powerSupply.KIOSK,
    label: 'Kiosk',
  },
  [powerSupply.HETHONG]: {
    value: powerSupply.HETHONG,
    label: 'Hệ thống',
  },
};

export type Report = {
  id: string;
  stt: string;
  serviceName: nameService;
  timeLevel: string;
  status: status;
  powerSupply: powerSupply;
};
