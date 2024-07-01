// Original file: Frontend/FrontendService.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetEmailVerificationScreenRequest as _EmailVerification_GetEmailVerificationScreenRequest, GetEmailVerificationScreenRequest__Output as _EmailVerification_GetEmailVerificationScreenRequest__Output } from '../EmailVerification/GetEmailVerificationScreenRequest';
import type { GetEmailVerificationScreenResponse as _EmailVerification_GetEmailVerificationScreenResponse, GetEmailVerificationScreenResponse__Output as _EmailVerification_GetEmailVerificationScreenResponse__Output } from '../EmailVerification/GetEmailVerificationScreenResponse';

export interface EmailVerificationServiceClient extends grpc.Client {
  GetEmailVerificationScreen(argument: _EmailVerification_GetEmailVerificationScreenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_EmailVerification_GetEmailVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  GetEmailVerificationScreen(argument: _EmailVerification_GetEmailVerificationScreenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_EmailVerification_GetEmailVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  GetEmailVerificationScreen(argument: _EmailVerification_GetEmailVerificationScreenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_EmailVerification_GetEmailVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  GetEmailVerificationScreen(argument: _EmailVerification_GetEmailVerificationScreenRequest, callback: grpc.requestCallback<_EmailVerification_GetEmailVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  getEmailVerificationScreen(argument: _EmailVerification_GetEmailVerificationScreenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_EmailVerification_GetEmailVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  getEmailVerificationScreen(argument: _EmailVerification_GetEmailVerificationScreenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_EmailVerification_GetEmailVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  getEmailVerificationScreen(argument: _EmailVerification_GetEmailVerificationScreenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_EmailVerification_GetEmailVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  getEmailVerificationScreen(argument: _EmailVerification_GetEmailVerificationScreenRequest, callback: grpc.requestCallback<_EmailVerification_GetEmailVerificationScreenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EmailVerificationServiceHandlers extends grpc.UntypedServiceImplementation {
  GetEmailVerificationScreen: grpc.handleUnaryCall<_EmailVerification_GetEmailVerificationScreenRequest__Output, _EmailVerification_GetEmailVerificationScreenResponse>;
  
}

export interface EmailVerificationServiceDefinition extends grpc.ServiceDefinition {
  GetEmailVerificationScreen: MethodDefinition<_EmailVerification_GetEmailVerificationScreenRequest, _EmailVerification_GetEmailVerificationScreenResponse, _EmailVerification_GetEmailVerificationScreenRequest__Output, _EmailVerification_GetEmailVerificationScreenResponse__Output>
}