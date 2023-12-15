# cryptomagic

[![NPM version](https://img.shields.io/npm/v/cryptomagic?color=a1b858&label=)](https://www.npmjs.com/package/cryptomagic)

## Install

```bash
npm install @elonehoo/cryptomagic
```

## Usage

```js
import JsonEncryptDecrypt from '@elonehoo/cryptomagic'
const aes = new JsonEncryptDecrypt('pass')

// Encrypt an json object
const encryptMessage = aes.encrypt({ password: '67256558250eda49' })

// Decrypt an encrypted message
const decryptMessage = aes.decrypt(encryptMessage)

console.log('encryptMessage:', encryptMessage)
// encryptMessage: 8vp5dLgHjqaeU0/+xns2dP0lt+n4kCuEpTL8pRxC9CPAX+EflctafaiFqUZqgKOLD+Y2/hZkCjwjctMfELWkzzGS18BiHOGiF+w0RU/JZV6SQNRb5V6ziOjySUWkE2MCfLQuEPMd/9HkSYjftmXoZIVJpAxScvv5YbKDUXDqGCOagg0aHXJbfP8DOTsvjS3K2bYXY93MCKoPV+9ZhyQe7lzSCpSm3YJXm6/875gW5eE=

console.log('decryptMessage:', decryptMessage)
// decryptMessage: { password: '67256558250eda49' }
```
