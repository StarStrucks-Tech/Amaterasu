// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v5.27.0
// source: protos-frontend/UI/CheckBox.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Text } from "./Text";

export const protobufPackage = "UI";

/**
 * CheckBox message
 * Represents a checkbox component.
 */
export interface CheckBox {
  /** Value of the checkbox (true if checked, false if unchecked) */
  value: boolean;
  /** Text associated with the checkbox */
  text: Text | undefined;
}

function createBaseCheckBox(): CheckBox {
  return { value: false, text: undefined };
}

export const CheckBox = {
  encode(message: CheckBox, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== false) {
      writer.uint32(8).bool(message.value);
    }
    if (message.text !== undefined) {
      Text.encode(message.text, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckBox {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckBox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = Text.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckBox {
    return {
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
      text: isSet(object.text) ? Text.fromJSON(object.text) : undefined,
    };
  },

  toJSON(message: CheckBox): unknown {
    const obj: any = {};
    if (message.value !== false) {
      obj.value = message.value;
    }
    if (message.text !== undefined) {
      obj.text = Text.toJSON(message.text);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckBox>, I>>(base?: I): CheckBox {
    return CheckBox.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheckBox>, I>>(object: I): CheckBox {
    const message = createBaseCheckBox();
    message.value = object.value ?? false;
    message.text = (object.text !== undefined && object.text !== null) ? Text.fromPartial(object.text) : undefined;
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