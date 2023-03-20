export interface IByteArray {
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
}

export class ByteArray implements IByteArray {
  readByteOffset = 0;
  writeByteOffset = 0;

  constructor(private readonly buffer: Buffer) {}

  readByte(): number {
    return this.buffer.readInt8(this.readByteOffset++);
  }

  readUnsignedByte(): number {
    return this.buffer.readUint8(this.readByteOffset++);
  }
}
