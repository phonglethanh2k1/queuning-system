export enum operationStatus {
  OFF = -1,
  ON = 1,
  ALL = 0,
}

export enum connectionStatus {
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

export const ConnectionStatusOption = {
  [connectionStatus.OFF]: {
    value: connectionStatus.OFF,
    label: "Mất kết nối",
  },
  [connectionStatus.ON]: {
    value: connectionStatus.ON,
    label: "Kết nối",
  },
  [connectionStatus.ALL]: {
    value: connectionStatus.ALL,
    label: "Tất cả",
  },
};
export type Device = {
  deviceCode: string;
  deviceName: string;
  addressIP: string;
  operationStt?: operationStatus;
  connectionStt?: connectionStatus;
  serviceUsed: string;
};
