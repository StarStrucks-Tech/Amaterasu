// Original file: Frontend/FrontendService.proto

import type { ResponseType as _ResponseType, ResponseType__Output as _ResponseType__Output } from '../ResponseType';
import type { Button as _Button, Button__Output as _Button__Output } from '../Button';

export interface GetEmailVerificationScreenResponse {
  'responseType'?: (_ResponseType);
  'imgUrl'?: (string);
  'title'?: (string);
  'subTitle'?: (string);
  'frame'?: (string);
  'yourEmailid'?: (string);
  'yourName'?: (string);
  'nextButton'?: (_Button | null);
}

export interface GetEmailVerificationScreenResponse__Output {
  'responseType'?: (_ResponseType__Output);
  'imgUrl'?: (string);
  'title'?: (string);
  'subTitle'?: (string);
  'frame'?: (string);
  'yourEmailid'?: (string);
  'yourName'?: (string);
  'nextButton'?: (_Button__Output);
}
