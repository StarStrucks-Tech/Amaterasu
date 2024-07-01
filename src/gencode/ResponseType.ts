// Original file: Enum/ResponseType.proto

export const ResponseType = {
  OTP_SENT: 0,
  INVALID_EMAILID: 1,
  SERVER_FAILURE: 2,
} as const;

export type ResponseType =
  | 'OTP_SENT'
  | 0
  | 'INVALID_EMAILID'
  | 1
  | 'SERVER_FAILURE'
  | 2

export type ResponseType__Output = typeof ResponseType[keyof typeof ResponseType]
