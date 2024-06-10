// Original file: src/protos/dummy.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ExampleRequest as _example_ExampleRequest, ExampleRequest__Output as _example_ExampleRequest__Output } from '../example/ExampleRequest';
import type { ExampleResponse as _example_ExampleResponse, ExampleResponse__Output as _example_ExampleResponse__Output } from '../example/ExampleResponse';

export interface ExampleServiceClient extends grpc.Client {
  GetExampleData(argument: _example_ExampleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_example_ExampleResponse__Output>): grpc.ClientUnaryCall;
  GetExampleData(argument: _example_ExampleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_example_ExampleResponse__Output>): grpc.ClientUnaryCall;
  GetExampleData(argument: _example_ExampleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_example_ExampleResponse__Output>): grpc.ClientUnaryCall;
  GetExampleData(argument: _example_ExampleRequest, callback: grpc.requestCallback<_example_ExampleResponse__Output>): grpc.ClientUnaryCall;
  getExampleData(argument: _example_ExampleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_example_ExampleResponse__Output>): grpc.ClientUnaryCall;
  getExampleData(argument: _example_ExampleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_example_ExampleResponse__Output>): grpc.ClientUnaryCall;
  getExampleData(argument: _example_ExampleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_example_ExampleResponse__Output>): grpc.ClientUnaryCall;
  getExampleData(argument: _example_ExampleRequest, callback: grpc.requestCallback<_example_ExampleResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ExampleServiceHandlers extends grpc.UntypedServiceImplementation {
  GetExampleData: grpc.handleUnaryCall<_example_ExampleRequest__Output, _example_ExampleResponse>;
  
}

export interface ExampleServiceDefinition extends grpc.ServiceDefinition {
  GetExampleData: MethodDefinition<_example_ExampleRequest, _example_ExampleResponse, _example_ExampleRequest__Output, _example_ExampleResponse__Output>
}
