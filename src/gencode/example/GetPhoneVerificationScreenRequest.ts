// Original file: frontend/Phone_Verific.proto

import type { Button as _example_Button, Button__Output as _example_Button__Output } from '../example/Button';

export interface GetPhoneVerificationScreenRequest {
  'title'?: (string);
  'subTitle'?: (string);
  'mobNumberHeading'?: (string);
  'inputNumb'?: (string);
  'mobNumBreifing'?: (string);
  'img1Url'?: (string);
  'img2Url'?: (string);
  'nextButton'?: (_example_Button | null);
}

export interface GetPhoneVerificationScreenRequest__Output {
  'title'?: (string);
  'subTitle'?: (string);
  'mobNumberHeading'?: (string);
  'inputNumb'?: (string);
  'mobNumBreifing'?: (string);
  'img1Url'?: (string);
  'img2Url'?: (string);
  'nextButton'?: (_example_Button__Output);
}
