// Original file: Frontend/FrontendService.proto

import type { Button as _Button, Button__Output as _Button__Output } from '../Button';

export interface GetEmailVerificationScreenRequest {
  'imgUrl'?: (string);
  'title'?: (string);
  'subTitle'?: (string);
  'frame'?: (string);
  'yourEmailid'?: (string);
  'yourName'?: (string);
  'nextButton'?: (_Button | null);
}

export interface GetEmailVerificationScreenRequest__Output {
  'imgUrl'?: (string);
  'title'?: (string);
  'subTitle'?: (string);
  'frame'?: (string);
  'yourEmailid'?: (string);
  'yourName'?: (string);
  'nextButton'?: (_Button__Output);
}
