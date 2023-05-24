export enum Role {
  ALL = 'Tất cả',
  ACCOUNTANT = 'Kế toán',
  MANAGE = 'Quản lý',
  ADMIN = 'Admin',
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
  HOATDONG = 1,
  NGUNGHOATDONG = -1,
}

export const StatusOptions = {
  [Status.ALL]: {
    value: Status.ALL,
    label: 'Tất cả',
  },
  [Status.HOATDONG]: {
    value: Status.HOATDONG,
    label: 'Hoạt động',
  },
  [Status.NGUNGHOATDONG]: {
    value: Status.NGUNGHOATDONG,
    label: 'Ngưng hoạt động',
  },
};
export type Account = {
  id: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  role: Role;
  status: Status;
};
