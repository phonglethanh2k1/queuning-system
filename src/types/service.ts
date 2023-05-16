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

export type Service = {
  serviceCode: string;
  serviceName: string;
  descrip: string;
  operationStt: operationStatus;
};
