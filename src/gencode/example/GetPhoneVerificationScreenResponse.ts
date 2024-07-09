// Original file: frontend/Phone_Verific.proto

import type { ResponseType as _example_ResponseType, ResponseType__Output as _example_ResponseType__Output } from '../example/ResponseType';
import type { Button as _example_Button, Button__Output as _example_Button__Output } from '../example/Button';

export interface GetPhoneVerificationScreenResponse {
  'responseType'?: (_example_ResponseType);
  'title'?: (string);
  'subTitle'?: (string);
  'mobNumberHeading'?: (string);
  'inputNumb'?: (string);
  'mobNumBreifing'?: (string);
  'img1Url'?: (string);
  'img2Url'?: (string);
  'nextButton'?: (_example_Button | null);
}

export interface GetPhoneVerificationScreenResponse__Output {
  'responseType'?: (_example_ResponseType__Output);
  'title'?: (string);
  'subTitle'?: (string);
  'mobNumberHeading'?: (string);
  'inputNumb'?: (string);
  'mobNumBreifing'?: (string);
  'img1Url'?: (string);
  'img2Url'?: (string);
  'nextButton'?: (_example_Button__Output);
}
