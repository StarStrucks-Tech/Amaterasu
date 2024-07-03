import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ExampleServiceClient as _example_ExampleServiceClient, ExampleServiceDefinition as _example_ExampleServiceDefinition } from './example/ExampleService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  example: {
    ExampleRequest: MessageTypeDefinition
    ExampleResponse: MessageTypeDefinition
    ExampleService: SubtypeConstructor<typeof grpc.Client, _example_ExampleServiceClient> & { service: _example_ExampleServiceDefinition }
  }
}

