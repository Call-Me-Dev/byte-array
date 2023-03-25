export interface IByteArray {
  bytesAvailable: number;

  /**
   * Reads a byte from the byte array.
   *
   * @returns {number} An 8-bit integer between -128 and 127.
   */
  readByte(): number;

  /**
   * Reads an unsigned byte from the byte array.
   *
   * @returns {number} An unsigned 8-bit integer between 0 and 255.
   */
  readUnsignedByte(): number;

  /**
   * Reads an unsigned 16-bit integer from the byte array.
   *
   * @returns {number} An unsigned 16-bit integer between 0 and 65535.
   */
  readUnsignedShort(): number;

  /**
   * Reads a UTF-8 string from the byte array.
   *
   * The string must be preceded by an unsigned short indicating the length in bytes.
   *
   * @returns {string} A UTF-8 string.
   */
  readUTF(): string;

  /**
   * Writes an 8-bit integer to the byte array.
   *
   * @see {@link https://help.adobe.com/fr_FR/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html#writeByte()|AS3 ByteArray - writeByte()}
   * @param {number} value - An 8-bit integer to be written between -128 and 127.
   * @returns {void}
   */
  writeByte(value: number): void;
}

export class ByteArray implements IByteArray {
  readByteOffset = 0;
  writeByteOffset = 0;

  constructor(private buffer: Buffer) {}

  get bytesAvailable(): number {
    return this.buffer.byteLength - this.readByteOffset;
  }

  readByte(): number {
    return this.buffer.readInt8(this.readByteOffset++);
  }

  readUnsignedByte(): number {
    return this.buffer.readUint8(this.readByteOffset++);
  }

  readUnsignedShort(): number {
    const offset = this.readByteOffset;
    this.readByteOffset += 2;

    return this.buffer.readUInt16BE(offset);
  }

  readUTF(): string {
    const length = this.readUnsignedShort();
    const offset = this.readByteOffset;

    this.readByteOffset += length;

    return this.buffer.slice(offset, offset + length).toString();
  }

  writeByte(value: number): void {
    const buffer = Buffer.alloc(1);
    buffer.writeInt8(value);

    this.buffer = Buffer.concat([this.buffer, buffer]);
    this.writeByteOffset++;
  }
}
