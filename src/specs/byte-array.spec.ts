import { ByteArray } from '../byte-array';

describe('ByteArray', () => {
  describe('readByte', () => {
    it('Should read the only byte in the byte array, and advance the read position', () => {
      const input = new ByteArray(Buffer.from([0xff]));

      expect(input.readByte()).toEqual(-1);
      expect(input.readByteOffset).toEqual(1);
      expect(input.writeByteOffset).toEqual(0);
    });

    it('Should read each byte from the byte array in order, updating the read position after each read', () => {
      const input = new ByteArray(Buffer.from([0x01, 0x02]));

      expect(input.readByte()).toEqual(1);
      expect(input.readByte()).toEqual(2);
      expect(input.readByteOffset).toEqual(2);
      expect(input.writeByteOffset).toEqual(0);
    });
  });

  describe('readUnsignedByte', () => {
    it('Should read the only unsigned byte in the byte array, and advance the read position', () => {
      const input = new ByteArray(Buffer.from([0xff]));

      expect(input.readUnsignedByte()).toEqual(255);
      expect(input.readByteOffset).toEqual(1);
    });

    it('Should read each unsigned byte from the byte array in order, updating the read position after each read', () => {
      const input = new ByteArray(Buffer.from([0x01, 0x02]));

      expect(input.readUnsignedByte()).toEqual(1);
      expect(input.readUnsignedByte()).toEqual(2);
      expect(input.readByteOffset).toEqual(2);
    });
  });
});
