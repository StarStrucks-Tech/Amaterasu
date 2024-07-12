// constants.ts

export const STATUS_COLORS = {
  FAILED: '#FF6B6B',
  SUCCEED: '#4CAF50',
  PENDING: '#FFA500',
  DEFAULT: '#000000',
} as const;

export const TRANSACTION_ICONS = {
  PAYMENT_TO: 'arrow-up-right',
  PAID_TO: 'arrow-up-right',
  RECEIVED_FROM: 'arrow-down-left',
  DEFAULT: 'arrow-right',
} as const;
