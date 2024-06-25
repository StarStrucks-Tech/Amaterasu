// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v5.27.1
// source: protos-frontend/UI/Button.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { CornerRadius } from "./ServerDrivenMessages";

export const protobufPackage = "UI";

/** message to contain the information for a button component */
export interface Button {
  text: string;
  bgColor: string;
  cornerRadius: CornerRadius | undefined;
}

function createBaseButton(): Button {
  return { text: "", bgColor: "", cornerRadius: undefined };
}

export const Button = {
  encode(message: Button, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.bgColor !== "") {
      writer.uint32(18).string(message.bgColor);
    }
    if (message.cornerRadius !== undefined) {
      CornerRadius.encode(message.cornerRadius, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Button {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseButton();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bgColor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cornerRadius = CornerRadius.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Button {
    return {
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      bgColor: isSet(object.bgColor) ? globalThis.String(object.bgColor) : "",
      cornerRadius: isSet(object.cornerRadius) ? CornerRadius.fromJSON(object.cornerRadius) : undefined,
    };
  },

  toJSON(message: Button): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.bgColor !== "") {
      obj.bgColor = message.bgColor;
    }
    if (message.cornerRadius !== undefined) {
      obj.cornerRadius = CornerRadius.toJSON(message.cornerRadius);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Button>, I>>(base?: I): Button {
    return Button.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Button>, I>>(object: I): Button {
    const message = createBaseButton();
    message.text = object.text ?? "";
    message.bgColor = object.bgColor ?? "";
    message.cornerRadius = (object.cornerRadius !== undefined && object.cornerRadius !== null)
      ? CornerRadius.fromPartial(object.cornerRadius)
      : undefined;
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
