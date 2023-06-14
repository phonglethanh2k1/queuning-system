export enum operationStatus {
  OFF = -1,
  ON = 1,
  ALL = 0,
}

export const OperationStatusOption = {
  [operationStatus.OFF]: {
    value: operationStatus.OFF,
    label: 'Ngưng hoạt động',
  },
  [operationStatus.ON]: {
    value: operationStatus.ON,
    label: 'Hoạt động',
  },
  [operationStatus.ALL]: {
    value: operationStatus.ALL,
    label: 'Tất cả',
  },
};

export enum checkBox {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOR = 4,
}

export type Service = {
  serviceCode: string;
  serviceName: string;
  descrip: string;
  operationStt: operationStatus;
};
