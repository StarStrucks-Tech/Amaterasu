// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v5.27.1
// source: protos-frontend/UI/ServerDrivenMessages.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "UI";

/** defines the corner radii for any element */
export interface CornerRadius {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
}

function createBaseCornerRadius(): CornerRadius {
  return { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 };
}

export const CornerRadius = {
  encode(message: CornerRadius, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topLeft !== 0) {
      writer.uint32(8).int32(message.topLeft);
    }
    if (message.topRight !== 0) {
      writer.uint32(16).int32(message.topRight);
    }
    if (message.bottomLeft !== 0) {
      writer.uint32(24).int32(message.bottomLeft);
    }
    if (message.bottomRight !== 0) {
      writer.uint32(32).int32(message.bottomRight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CornerRadius {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCornerRadius();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.topLeft = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.topRight = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bottomLeft = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.bottomRight = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CornerRadius {
    return {
      topLeft: isSet(object.topLeft) ? globalThis.Number(object.topLeft) : 0,
      topRight: isSet(object.topRight) ? globalThis.Number(object.topRight) : 0,
      bottomLeft: isSet(object.bottomLeft) ? globalThis.Number(object.bottomLeft) : 0,
      bottomRight: isSet(object.bottomRight) ? globalThis.Number(object.bottomRight) : 0,
    };
  },

  toJSON(message: CornerRadius): unknown {
    const obj: any = {};
    if (message.topLeft !== 0) {
      obj.topLeft = Math.round(message.topLeft);
    }
    if (message.topRight !== 0) {
      obj.topRight = Math.round(message.topRight);
    }
    if (message.bottomLeft !== 0) {
      obj.bottomLeft = Math.round(message.bottomLeft);
    }
    if (message.bottomRight !== 0) {
      obj.bottomRight = Math.round(message.bottomRight);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CornerRadius>, I>>(base?: I): CornerRadius {
    return CornerRadius.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CornerRadius>, I>>(object: I): CornerRadius {
    const message = createBaseCornerRadius();
    message.topLeft = object.topLeft ?? 0;
    message.topRight = object.topRight ?? 0;
    message.bottomLeft = object.bottomLeft ?? 0;
    message.bottomRight = object.bottomRight ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}