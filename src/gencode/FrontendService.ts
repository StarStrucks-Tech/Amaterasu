import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { EmailVerificationServiceClient as _EmailVerification_EmailVerificationServiceClient, EmailVerificationServiceDefinition as _EmailVerification_EmailVerificationServiceDefinition } from './EmailVerification/EmailVerificationService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Button: MessageTypeDefinition
  CornerRadius: MessageTypeDefinition
  EmailVerification: {
    EmailVerificationService: SubtypeConstructor<typeof grpc.Client, _EmailVerification_EmailVerificationServiceClient> & { service: _EmailVerification_EmailVerificationServiceDefinition }
    GetEmailVerificationScreenRequest: MessageTypeDefinition
    GetEmailVerificationScreenResponse: MessageTypeDefinition
    TriggerEmailVerificationRequest: MessageTypeDefinition
    TriggerEmailVerificationResponse: MessageTypeDefinition
  }
  ResponseType: EnumTypeDefinition
}

