import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { PhoneVerificationServiceClient as _example_PhoneVerificationServiceClient, PhoneVerificationServiceDefinition as _example_PhoneVerificationServiceDefinition } from './example/PhoneVerificationService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  example: {
    Button: MessageTypeDefinition
    CornerRadius: MessageTypeDefinition
    GetPhoneVerificationScreenRequest: MessageTypeDefinition
    GetPhoneVerificationScreenResponse: MessageTypeDefinition
    PhoneVerificationService: SubtypeConstructor<typeof grpc.Client, _example_PhoneVerificationServiceClient> & { service: _example_PhoneVerificationServiceDefinition }
    ResponseType: EnumTypeDefinition
    TriggerPhoneVerificationRequest: MessageTypeDefinition
    TriggerPhoneVerificationResponse: MessageTypeDefinition
  }
}

