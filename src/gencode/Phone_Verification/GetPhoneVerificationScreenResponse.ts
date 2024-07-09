// Original file: frontend/FrontendService.proto

import type { Button as _Button, Button__Output as _Button__Output } from '../Button';

export interface GetPhoneVerificationScreenResponse {
  'title'?: (string);
  'subTitle'?: (string);
  'phoneNumberHeading'?: (string);
  'inputNumber'?: (string);
  'phoneNumberBreifing'?: (string);
  'img1Url'?: (string);
  'img2Url'?: (string);
  'primaryButton'?: (_Button | null);
}

export interface GetPhoneVerificationScreenResponse__Output {
  'title'?: (string);
  'subTitle'?: (string);
  'phoneNumberHeading'?: (string);
  'inputNumber'?: (string);
  'phoneNumberBreifing'?: (string);
  'img1Url'?: (string);
  'img2Url'?: (string);
  'primaryButton'?: (_Button__Output);
}
