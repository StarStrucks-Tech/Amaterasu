// Original file: UI/Button.proto

import type { CornerRadius as _CornerRadius, CornerRadius__Output as _CornerRadius__Output } from './CornerRadius';

export interface Button {
  'text'?: (string);
  'bgColor'?: (string);
  'cornerRadius'?: (_CornerRadius | null);
}

export interface Button__Output {
  'text'?: (string);
  'bgColor'?: (string);
  'cornerRadius'?: (_CornerRadius__Output);
}
