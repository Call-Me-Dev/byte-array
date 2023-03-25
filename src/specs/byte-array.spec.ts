import { ByteArray } from '../byte-array';

describe('ByteArray', () => {
  describe('bytesAvailable', () => {
    it('Should return the available bytes', () => {
      const input = new ByteArray(Buffer.from([0xff, 0xff]));
      expect(input.bytesAvailable).toEqual(2);

      input.readByte();
      expect(input.bytesAvailable).toEqual(1);
    });
  });

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

  describe('readUnsignedShort', () => {
    it('Should read the only unsigned byte in the byte array, and advance the read position by 2', () => {
      const input = new ByteArray(Buffer.from([0xff, 0xff]));

      expect(input.readUnsignedShort()).toEqual(65535);
      expect(input.readByteOffset).toEqual(2);
    });

    it('Should read each unsigned short from the byte array in order, updating the read position after each read by 4 in total', () => {
      const input = new ByteArray(Buffer.from([0xff, 0xff, 0x01, 0x01]));

      expect(input.readUnsignedShort()).toEqual(65535);
      expect(input.readUnsignedShort()).toEqual(257);
      expect(input.readByteOffset).toEqual(4);
    });
  });

  describe('readUTF', () => {
    it('Should read a UTF-8 string from the byte array, with length of the first unsigned byte, and advance the read position accordingly', () => {
      const input = new ByteArray(
        Buffer.from([
          0x00, 0x0b, 0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x5f, 0x77, 0x6f, 0x72,
          0x6c, 0x64,
        ])
      );

      expect(input.readUTF()).toEqual('hello_world');
      expect(input.readByteOffset).toEqual(13);
    });
  });
});
