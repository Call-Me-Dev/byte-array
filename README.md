<div align="center">
  <h1>@call-me-dev/byte-array</h1>
  <p> 
    <a href="./README.md" target="_blank">
      <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg">
    </a>
    <a href="./LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/badge/License-©CallMeDev-green.svg" />
    </a>
  </p>
</div>

## 📝 Table of contents
- 📖 [Documentation](#documentation)
  - [IByteArray Interface](#ibytearray-interface)
    - [`readByte(): number`](#readbyte-method)
    - [`readUnsignedByte(): number`](#readunsignedbyte-method)
    - [`readUnsignedShort(): number`](#readunsignedshort-method)
    - [`readUTF(): string`](#readutf-method)
    - [`writeByte(value: number): void`](#writebyte-method)
    - [`writeUTFBytes(value: number): void`](#writeutfbytes-method)
- 🚀 [Getting Started](#getting-started)
- 📟 [Commands](#commands)
- 👏 [Contributing](#contributing)
- 🎬 [Credits](#credits)

## <a id="documentation" name="documentation">📖 Documentation</a>
> 📚 Be sure to check out the code comments for additional information on these methods.

### <a id="ibytearray-interface" name="ibytearray-interface">`IByteArray`</a>

This interface defines methods for reading byte data from a byte array.

---

#### <a id="readbyte-method" name="readbyte-method">`readByte(): number`</a>

Reads a byte from the byte array.

**Returns:** An 8-bit integer between -128 and 127.

---

#### <a id="readunsignedbyte-method" name="readunsignedbyte-method">`readUnsignedByte(): number`</a>

Reads an unsigned byte from the byte array.

**Returns:** An unsigned 8-bit integer between 0 and 255.

---

#### <a id="readunsignedshort-method" name="readunsignedshort-method">`readUnsignedShort(): number`</a>

Reads an unsigned 16-bit integer from the byte array.

**Returns:** An unsigned 16-bit integer between 0 and 65535.

---

#### <a id="readutf-method" name="readutf-method">`readUTF(): string`</a>

Reads a UTF-8 string from the byte array. The string must be preceded by an unsigned short indicating the length in bytes.

**Returns:** A UTF-8 string.

---

#### <a id="writebyte-method" name="writebyte-method">`writeByte(value: number): void`</a>

Writes an 8-bit integer to the byte array.

**Parameters:**

- `value` - An 8-bit integer to be written between -128 and 127.

**Returns:** `void`

---

#### <a id="writeutfbytes-method" name="writeutfbytes-method">`writeUTFBytes(value: string): void`</a>

Writes a UTF-8 encoded string to the byte array.

**Parameters:**

- `value` - The UTF-8 string to be written.

**Returns:** `void`

---

## <a id="getting-started" name="getting-started">🚀 Getting Started</a>

> ⛔️ **Before going any further** make sure you have the [NodeJS LTS](https://nodejs.org/en/) installed.
> If you have [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) installed you can use the following command: ```nvm use```

> ⛔ **Ensure if you are using Windows** to use the [Windows Subsystem for Linux](https://learn.microsoft.com/fr-fr/windows/wsl/install).

1. Install the dependencies ```yarn install```
2. Run the tests ```yarn test:unitary```
3. *(optional)* Build the package locally ```yarn build```

## <a name="contributing">👏 Contributing</a>
> ⛔ **NEVER** `git push` on **main**.

### Git branch

|Branch         |Usage                                   |
|---------------|----------------------------------------|
|**main**       |The application deployed in production  |
|**feature/\*** |Prefix used for feature branch          |
|**fix/\***     |Prefix used for fix branch              |

### Git workflow

1. Retrieve the latest update on **main** 
```bash
> git fetch
> git checkout develop
> git pull
```

2. Create your feature branch from **main**
```bash
> git checkout -b feature/1-read-unsigned-short
```

3. Code & Commit regularly
> Please follow the [Angular Convention](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
```bash
> git add src/byte-array.ts
> git commit -m "feat: add readUsignedShort method"
```


4. Push your changes when your done
```bash
> git push --set-upstream origin feature/add-jwt-guard
```

5. Open a `Pull Request` on github and target the **main** branch.

6. Ask for Reviews. The **Lead Developer** will then merge your work if everything is good and all the threads are resolved.

## <a name="credits">🎬 Credits</a>
Build with ❤️ by ©Call-Me-Dev
