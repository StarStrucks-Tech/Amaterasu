// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "protos-frontend/UI/Text.proto" (package "UI", syntax proto3)
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
import { TextStyle } from "./ServerDrivenMessages";
/**
 * Define a message structure for a Text element.
 *
 * @generated from protobuf message UI.Text
 */
export interface Text {
    /**
     * The actual text content.
     *
     * @generated from protobuf field: string text = 1;
     */
    text: string;
    /**
     * The style applied to the text.
     *
     * @generated from protobuf field: UI.TextStyle text_style = 2;
     */
    textStyle?: TextStyle;
}
// @generated message type with reflection information, may provide speed optimized methods
class Text$Type extends MessageType<Text> {
    constructor() {
        super("UI.Text", [
            { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "text_style", kind: "message", T: () => TextStyle }
        ]);
    }
    create(value?: PartialMessage<Text>): Text {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.text = "";
        if (value !== undefined)
            reflectionMergePartial<Text>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Text): Text {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string text */ 1:
                    message.text = reader.string();
                    break;
                case /* UI.TextStyle text_style */ 2:
                    message.textStyle = TextStyle.internalBinaryRead(reader, reader.uint32(), options, message.textStyle);
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
    internalBinaryWrite(message: Text, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string text = 1; */
        if (message.text !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.text);
        /* UI.TextStyle text_style = 2; */
        if (message.textStyle)
            TextStyle.internalBinaryWrite(message.textStyle, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UI.Text
 */
export const Text = new Text$Type();
