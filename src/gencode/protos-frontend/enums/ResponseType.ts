// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "protos-frontend/enums/ResponseType.proto" (package "enums", syntax proto3)
// tslint:disable
/**
 * enum that identifies the state for the phone number verification response type
 *
 * @generated from protobuf enum enums.VerificationResponseType
 */
export enum VerificationResponseType {
    /**
     * @generated from protobuf enum value: VERIFICATION_RESPONSE_UNIDENTIFIED = 0;
     */
    VERIFICATION_RESPONSE_UNIDENTIFIED = 0,
    /**
     * @generated from protobuf enum value: VERIFICATION_RESPONSE_OTP_SENT = 1;
     */
    VERIFICATION_RESPONSE_OTP_SENT = 1,
    /**
     * @generated from protobuf enum value: VERIFICATION_RESPONSE_INVALID_PARAMETERS = 2;
     */
    VERIFICATION_RESPONSE_INVALID_PARAMETERS = 2,
    /**
     * @generated from protobuf enum value: VERIFICATION_RESPONSE_SERVER_FAILURE = 3;
     */
    VERIFICATION_RESPONSE_SERVER_FAILURE = 3
}
/**
 * @generated from protobuf enum enums.LivenessCheckStatus
 */
export enum LivenessCheckStatus {
    /**
     * @generated from protobuf enum value: LIVENESS_CHECK_STATUS_UNIDENTIFIED = 0;
     */
    UNIDENTIFIED = 0,
    /**
     * @generated from protobuf enum value: LIVENESS_CHECK_STATUS_OTP_MATCHED = 1;
     */
    OTP_MATCHED = 1,
    /**
     * @generated from protobuf enum value: LIVENESS_CHECK_STATUS_INVALID_OTP = 2;
     */
    INVALID_OTP = 2,
    /**
     * @generated from protobuf enum value: LIVENESS_CHECK_STATUS_SERVER_FAILURE = 3;
     */
    SERVER_FAILURE = 3
}
/**
 * @generated from protobuf enum enums.ErrorType
 */
export enum ErrorType {
    /**
     * Default value indicating an unknown error.
     *
     * @generated from protobuf enum value: UNKNOWN_ERROR = 0;
     */
    UNKNOWN_ERROR = 0,
    /**
     * Error code indicating that the request is invalid.
     *
     * @generated from protobuf enum value: INVALID_REQUEST = 1;
     */
    INVALID_REQUEST = 1,
    /**
     * Error code indicating that permission is denied for the operation.
     *
     * @generated from protobuf enum value: PERMISSION_DENIED = 2;
     */
    PERMISSION_DENIED = 2
}
