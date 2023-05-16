export enum SettingStatus {
  TURN_OFF = 'Tắt',
  IS_APPLYING = 'Đang áp dụng',
  // ALL = 'all',
}

export const SettingStatusOption = {
  [SettingStatus.IS_APPLYING]: {
    value: SettingStatus.IS_APPLYING,
    label: 'Đang áp dụng',
  },
  [SettingStatus.TURN_OFF]: {
    value: SettingStatus.TURN_OFF,
    label: 'Tắt',
  },
  // [SettingStatus.ALL]: {
  //   value: SettingStatus.ALL,
  //   label: 'lựa chọn',
  // },
};
// export enum GateCheckIn {
//   ONE = 1,
//   TWO = 2,
//   THREE = 3,
// }

// export const GateCheckOption = {
//   [GateCheckIn.ONE]: {
//     label: 'Cổng 1',
//   },
//   [GateCheckIn.TWO]: {
//     label: 'Cổng 2',
//   },
//   [GateCheckIn.THREE]: {
//     label: 'Cổng 3',
//   },
// };
export type Setting = {
  id: string;
  eventCode: string;
  nameTicket: string;
  date: string;
  hourUse: string;
  expirationDate: string;
  expirationTime: string;
  priceTicket: string;
  comboTicket: string;
  numberTicket: string;
  status: SettingStatus;
};
