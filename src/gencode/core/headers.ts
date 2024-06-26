// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "core/headers.proto" (package "core", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ResponseCode } from "./core-enums";
import { Timestamp } from "../google/protobuf/timestamp";
import { Platform } from "./core-enums";
/**
 * Request header message
 *
 * @generated from protobuf message core.RequestHeader
 */
export interface RequestHeader {
    /**
     * @generated from protobuf field: string app_id = 1;
     */
    appId: string; // Unique identifier for your app
    /**
     * @generated from protobuf field: core.AppVersion app_version = 2;
     */
    appVersion?: AppVersion; // Version of the app
    /**
     * @generated from protobuf field: string secure_token = 3;
     */
    secureToken: string; // Token to authenticate the request, Planning to take it as JWT Token
    /**
     * @generated from protobuf field: core.Platform platform = 4;
     */
    platform: Platform; // Platform making the request (e.g., iOS, Android, Web)
    /**
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 5;
     */
    timestamp?: Timestamp; // Timestamp of the request
}
/**
 * Response header message
 *
 * @generated from protobuf message core.ResponseHeader
 */
export interface ResponseHeader {
    /**
     * @generated from protobuf field: core.ResponseCode response_code = 1;
     */
    responseCode: ResponseCode; // Response code (e.g., 200 for success)
    /**
     * @generated from protobuf field: string error_message = 2;
     */
    errorMessage: string; // Message associated with the response code
    /**
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 3;
     */
    timestamp?: Timestamp; // Timestamp of the response
}
/**
 * AppVersion message with oneof
 *
 * @generated from protobuf message core.AppVersion
 */
export interface AppVersion {
    /**
     * @generated from protobuf oneof: version
     */
    version: {
        oneofKind: "versionNumber";
        /**
         * @generated from protobuf field: int32 version_number = 1;
         */
        versionNumber: number;
    } | {
        oneofKind: "versionName";
        /**
         * @generated from protobuf field: string version_name = 2;
         */
        versionName: string;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class RequestHeader$Type extends MessageType<RequestHeader> {
    constructor() {
        super("core.RequestHeader", [
            { no: 1, name: "app_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "app_version", kind: "message", T: () => AppVersion },
            { no: 3, name: "secure_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "platform", kind: "enum", T: () => ["core.Platform", Platform, "PLATFORM_"] },
            { no: 5, name: "timestamp", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<RequestHeader>): RequestHeader {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.appId = "";
        message.secureToken = "";
        message.platform = 0;
        if (value !== undefined)
            reflectionMergePartial<RequestHeader>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RequestHeader): RequestHeader {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string app_id */ 1:
                    message.appId = reader.string();
                    break;
                case /* core.AppVersion app_version */ 2:
                    message.appVersion = AppVersion.internalBinaryRead(reader, reader.uint32(), options, message.appVersion);
                    break;
                case /* string secure_token */ 3:
                    message.secureToken = reader.string();
                    break;
                case /* core.Platform platform */ 4:
                    message.platform = reader.int32();
                    break;
                case /* google.protobuf.Timestamp timestamp */ 5:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RequestHeader, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string app_id = 1; */
        if (message.appId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.appId);
        /* core.AppVersion app_version = 2; */
        if (message.appVersion)
            AppVersion.internalBinaryWrite(message.appVersion, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string secure_token = 3; */
        if (message.secureToken !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.secureToken);
        /* core.Platform platform = 4; */
        if (message.platform !== 0)
            writer.tag(4, WireType.Varint).int32(message.platform);
        /* google.protobuf.Timestamp timestamp = 5; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message core.RequestHeader
 */
export const RequestHeader = new RequestHeader$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResponseHeader$Type extends MessageType<ResponseHeader> {
    constructor() {
        super("core.ResponseHeader", [
            { no: 1, name: "response_code", kind: "enum", T: () => ["core.ResponseCode", ResponseCode, "RESPONSE_CODE_"] },
            { no: 2, name: "error_message", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "timestamp", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<ResponseHeader>): ResponseHeader {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.responseCode = 0;
        message.errorMessage = "";
        if (value !== undefined)
            reflectionMergePartial<ResponseHeader>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResponseHeader): ResponseHeader {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* core.ResponseCode response_code */ 1:
                    message.responseCode = reader.int32();
                    break;
                case /* string error_message */ 2:
                    message.errorMessage = reader.string();
                    break;
                case /* google.protobuf.Timestamp timestamp */ 3:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResponseHeader, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* core.ResponseCode response_code = 1; */
        if (message.responseCode !== 0)
            writer.tag(1, WireType.Varint).int32(message.responseCode);
        /* string error_message = 2; */
        if (message.errorMessage !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.errorMessage);
        /* google.protobuf.Timestamp timestamp = 3; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message core.ResponseHeader
 */
export const ResponseHeader = new ResponseHeader$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AppVersion$Type extends MessageType<AppVersion> {
    constructor() {
        super("core.AppVersion", [
            { no: 1, name: "version_number", kind: "scalar", oneof: "version", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "version_name", kind: "scalar", oneof: "version", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AppVersion>): AppVersion {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.version = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<AppVersion>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AppVersion): AppVersion {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 version_number */ 1:
                    message.version = {
                        oneofKind: "versionNumber",
                        versionNumber: reader.int32()
                    };
                    break;
                case /* string version_name */ 2:
                    message.version = {
                        oneofKind: "versionName",
                        versionName: reader.string()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AppVersion, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 version_number = 1; */
        if (message.version.oneofKind === "versionNumber")
            writer.tag(1, WireType.Varint).int32(message.version.versionNumber);
        /* string version_name = 2; */
        if (message.version.oneofKind === "versionName")
            writer.tag(2, WireType.LengthDelimited).string(message.version.versionName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message core.AppVersion
 */
export const AppVersion = new AppVersion$Type();
