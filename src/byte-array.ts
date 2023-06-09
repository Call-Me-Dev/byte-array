export interface IDataInput {
  /**
   * Reads a byte from the byte array.
   *
   * @see {@link https://help.adobe.com/fr_FR/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html#readByte() | AS3 ByteArray - readByte()}
   * @returns {number} An 8-bit integer between -128 and 127.
   */
  readByte(): number;

  /**
   * Reads an unsigned byte from the byte array.
   *
   * @see {@link https://help.adobe.com/fr_FR/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html#readUnsignedByte() | AS3 ByteArray - readUnsignedByte()}
   * @returns {number} An unsigned 8-bit integer between 0 and 255.
   */
  readUnsignedByte(): number;

  /**
   * Reads an unsigned 16-bit integer from the byte array.
   *
   * @see {@link https://help.adobe.com/fr_FR/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html#readUnsignedShort() | AS3 ByteArray - readUnsignedShort()}
   * @returns {number} An unsigned 16-bit integer between 0 and 65535.
   */
  readUnsignedShort(): number;

  /**
   * Reads a UTF-8 string from the byte array.
   *
   * The string must be preceded by an unsigned short indicating the length in bytes.
   *
   * @see {@link https://help.adobe.com/fr_FR/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html#readUTF() | AS3 ByteArray - readUTF()}
   * @returns {string} A UTF-8 string.
   */
  readUTF(): string;

  /**
   * Reads a sequence of UTF-8 bytes specified by the length parameter from the byte stream and returns a string.
   *
   * @see {@link https://help.adobe.com/fr_FR/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html#readUTFBytes() | AS3 ByteArray - readUTFBytes()}
   * @param {number} length - An unsigned short indicating the length of the UTF-8 bytes.
   * @returns {string} A string composed of the UTF-8 bytes of the specified length.
   */
  readUTFBytes(length: number): string;
}

export interface IDataOutput {
  /**
   * Writes an 8-bit integer to the byte array.
   *
   * @see {@link https://help.adobe.com/fr_FR/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html#writeByte()|AS3 ByteArray - writeByte()}
   * @param {number} value - An 8-bit integer to be written between -128 and 127.
   * @returns {void}
   */
  writeByte(value: number): void;

  /**
   * Writes a UTF-8 encoded string to the byte array.
   *
   * @see {@link https://help.adobe.com/fr_FR/FlashPlatform/reference/actionscript/3/flash/utils/ByteArray.html#writeUTFBytes()|AS3 ByteArray - writeUTFBytes()}
   * @param {string} value - The UTF-8 string to be written.
   * @returns {void}
   */
  writeUTFBytes(value: string): void;
}

export class ByteArray implements IDataInput, IDataOutput {
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

  readUTFBytes(length: number): string {
    let value = '';

    for (let i = 0; i < length; i++) {
      value += String.fromCharCode(this.readByte());
    }

    return value;
  }

  writeByte(value: number): void {
    const buffer = Buffer.alloc(1);
    buffer.writeInt8(value);

    this.buffer = Buffer.concat([this.buffer, buffer]);
    this.writeByteOffset++;
  }

  writeUTFBytes(value: string): void {
    for (let i = 0; i < value.length; i++) {
      this.writeByte(value.charCodeAt(i));
    }
  }
}
