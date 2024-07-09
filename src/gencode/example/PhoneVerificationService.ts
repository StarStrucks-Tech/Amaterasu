// Original file: frontend/Phone_Verific.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetPhoneVerificationScreenRequest as _example_GetPhoneVerificationScreenRequest, GetPhoneVerificationScreenRequest__Output as _example_GetPhoneVerificationScreenRequest__Output } from '../example/GetPhoneVerificationScreenRequest';
import type { GetPhoneVerificationScreenResponse as _example_GetPhoneVerificationScreenResponse, GetPhoneVerificationScreenResponse__Output as _example_GetPhoneVerificationScreenResponse__Output } from '../example/GetPhoneVerificationScreenResponse';

export interface PhoneVerificationServiceClient extends grpc.Client {
  GetPhoneVerificationScreen(argument: _example_GetPhoneVerificationScreenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_example_GetPhoneVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  GetPhoneVerificationScreen(argument: _example_GetPhoneVerificationScreenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_example_GetPhoneVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  GetPhoneVerificationScreen(argument: _example_GetPhoneVerificationScreenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_example_GetPhoneVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  GetPhoneVerificationScreen(argument: _example_GetPhoneVerificationScreenRequest, callback: grpc.requestCallback<_example_GetPhoneVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  getPhoneVerificationScreen(argument: _example_GetPhoneVerificationScreenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_example_GetPhoneVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  getPhoneVerificationScreen(argument: _example_GetPhoneVerificationScreenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_example_GetPhoneVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  getPhoneVerificationScreen(argument: _example_GetPhoneVerificationScreenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_example_GetPhoneVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  getPhoneVerificationScreen(argument: _example_GetPhoneVerificationScreenRequest, callback: grpc.requestCallback<_example_GetPhoneVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PhoneVerificationServiceHandlers extends grpc.UntypedServiceImplementation {
  GetPhoneVerificationScreen: grpc.handleUnaryCall<_example_GetPhoneVerificationScreenRequest__Output, _example_GetPhoneVerificationScreenResponse>;
  
}

export interface PhoneVerificationServiceDefinition extends grpc.ServiceDefinition {
  GetPhoneVerificationScreen: MethodDefinition<_example_GetPhoneVerificationScreenRequest, _example_GetPhoneVerificationScreenResponse, _example_GetPhoneVerificationScreenRequest__Output, _example_GetPhoneVerificationScreenResponse__Output>
}
