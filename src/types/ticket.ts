export enum TicketStatus {
  USED = '1',
  NOT_USED = '2',
  EXPIRED = '-1',
  ALL = 'all',
}

export const TicketStatusOption = {
  [TicketStatus.USED]: {
    value: TicketStatus.USED,
    label: 'Đã sử dụng',
  },
  [TicketStatus.NOT_USED]: {
    value: TicketStatus.NOT_USED,
    label: 'Chưa sử dụng',
  },
  [TicketStatus.EXPIRED]: {
    value: TicketStatus.EXPIRED,
    label: 'Hết hạn',
  },
  [TicketStatus.ALL]: {
    value: TicketStatus.ALL,
    label: 'Tất cả',
  },
};

export enum GateCheckIn {
  ALL = 6,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export const GateCheckOption = {
  [GateCheckIn.ALL]: {
    value: GateCheckIn.ALL,
    label: 'Tất cả',
  },
  [GateCheckIn.ONE]: {
    value: GateCheckIn.ONE,
    label: 'Cổng 1',
  },
  [GateCheckIn.TWO]: {
    value: GateCheckIn.TWO,
    label: 'Cổng 2',
  },
  [GateCheckIn.THREE]: {
    value: GateCheckIn.THREE,
    label: 'Cổng 3',
  },
  [GateCheckIn.FOUR]: {
    value: GateCheckIn.FOUR,
    label: 'Cổng 4',
  },
  [GateCheckIn.FIVE]: {
    value: GateCheckIn.FIVE,
    label: 'Cổng 5',
  },
};

export type Ticket = {
  id: string;
  booking: string;
  ticketNumber: number;
  nameEvent: string;
  status: TicketStatus;
  dateUse: string;
  ticketReleaseDate: string;
  gateCheckIn: GateCheckIn;
};

// enum congaVlaue {
//   congatre = 1,
//   congago = 2,
// }

// const conga = {
//   [congaVlaue.congago]: {
//     value: '1',
//     label: 'con ga go',
//   },
//   [congaVlaue.congatre]: {
//     value: '1',
//     label: 'con gaf tre',
//   },
// };
