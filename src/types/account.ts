export enum Role {
  ALL = 0,
  ACCOUNTANT = 1,
  MANAGE = 2,
  ADMIN = 3,
}

export const RoleOptions = {
  [Role.ALL]: {
    value: Role.ALL,
    label: 'Tất cả',
  },
  [Role.ACCOUNTANT]: {
    value: Role.ACCOUNTANT,
    label: 'Kế toán',
  },
  [Role.MANAGE]: {
    value: Role.MANAGE,
    label: 'Quản lý',
  },
  [Role.ADMIN]: {
    value: Role.ADMIN,
    label: 'Admin',
  },
};

export enum Status {
  ALL = 2,
  ON = 1,
  OFF = -1,
}

export const StatusOptions = {
  [Status.ALL]: {
    value: Status.ALL,
    label: 'Tất cả',
  },
  [Status.ON]: {
    value: Status.ON,
    label: 'Hoạt động',
  },
  [Status.OFF]: {
    value: Status.OFF,
    label: 'Ngưng hoạt động',
  },
};
export type Account = {
  id: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  role?: Role | any;
  password: string;
  status?: Status | any;
  retypePassword: string;
};
