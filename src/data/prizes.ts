export interface Prize {
  id: string;
  rank: string;
  amount: string;
  rawAmount: number;
}

export const MAIN_PRIZES: Prize[] = [
  {
    id: 'first-place',
    rank: '01 • 1ST PLACE',
    amount: '₹10,000',
    rawAmount: 10000,
  },
  {
    id: 'second-place',
    rank: '02 • 2ND PLACE',
    amount: '₹7,000',
    rawAmount: 7000,
  },
  {
    id: 'third-place',
    rank: '03 • 3RD PLACE',
    amount: '₹5,000',
    rawAmount: 5000,
  },
];

export const TOTAL_CASH_PRIZE = '₹22,000';
