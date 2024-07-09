import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { PhoneVerificationServiceClient as _Phone_Verification_PhoneVerificationServiceClient, PhoneVerificationServiceDefinition as _Phone_Verification_PhoneVerificationServiceDefinition } from './Phone_Verification/PhoneVerificationService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Button: MessageTypeDefinition
  CornerRadius: MessageTypeDefinition
  Phone_Verification: {
    GetPhoneVerificationScreenRequest: MessageTypeDefinition
    GetPhoneVerificationScreenResponse: MessageTypeDefinition
    PhoneVerificationService: SubtypeConstructor<typeof grpc.Client, _Phone_Verification_PhoneVerificationServiceClient> & { service: _Phone_Verification_PhoneVerificationServiceDefinition }
    TriggerPhoneVerificationRequest: MessageTypeDefinition
    TriggerPhoneVerificationResponse: MessageTypeDefinition
  }
  ResponseType: EnumTypeDefinition
}

