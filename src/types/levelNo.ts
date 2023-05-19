export enum operationStatus {
  OFF = -1,
  ON = 1,
  ALL = 0,
}

export const OperationStatusOption = {
  [operationStatus.OFF]: {
    value: operationStatus.OFF,
    label: "Ngưng hoạt động",
  },
  [operationStatus.ON]: {
    value: operationStatus.ON,
    label: "Hoạt động",
  },
  [operationStatus.ALL]: {
    value: operationStatus.ALL,
    label: "Tất cả",
  },
};

export type LevelNo = {
  stt: string;
  customerName: string;
  serviceName: string;
  timeLevel: string;
  expiry: string;
  status: number;
  powerSupply: string
};
