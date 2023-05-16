export enum CheckTicketStatus {
  CHECKED = '1',
  UN_CHECKED = '2',
  ALL = 'all',
}

export const CheckTicketStatusOption = {
  [CheckTicketStatus.CHECKED]: {
    value: CheckTicketStatus.CHECKED,
    label: 'Đã đối soát',
  },
  [CheckTicketStatus.UN_CHECKED]: {
    value: CheckTicketStatus.UN_CHECKED,
    label: 'Chưa đối soát',
  },
  [CheckTicketStatus.ALL]: {
    value: CheckTicketStatus.ALL,
    label: 'Tất cả',
  },
};
export enum GateCheckIn {
  ONE = 1,
  TWO = 2,
  THREE = 3,
}

export const GateCheckOption = {
  [GateCheckIn.ONE]: {
    label: 'Cổng 1',
  },
  [GateCheckIn.TWO]: {
    label: 'Cổng 2',
  },
  [GateCheckIn.THREE]: {
    label: 'Cổng 3',
  },
};
export type CheckTicket = {
  id: string;
  ticketNumber: string;
  nameEvent: string;
  dateUse: string;
  ticketType: string;
  gateCheckIn: GateCheckIn;
  status: CheckTicketStatus;
};
