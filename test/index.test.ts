import { beforeAll, describe, expect, it } from 'vitest'
import JsonEncryptDecryptAES from '../src'

let _aes: JsonEncryptDecryptAES

describe('should', () => {
  beforeAll(() => {
    _aes = new JsonEncryptDecryptAES('hello')
  })
  it('exported', () => {
    const json = { a: 1 }
    const encryptedMessage = _aes.encrypt(json)
    expect(_aes.decrypt(encryptedMessage)).toEqual(json)
  })

  it('exported2', () => {
    const json = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }]
    const encryptedMessage = _aes.encrypt(json)
    console.log(encryptedMessage)
    expect(_aes.decrypt(encryptedMessage)).toEqual(json)
  })
  it('exported3', () => {
    const json = {
      id: '123',
      username: 'Elone Hoo',
      pass: '123456',
      email: 'elonehoo@gmail.com',
    }
    const encryptedMessage = _aes.encrypt(json)
    console.log(encryptedMessage)
    expect(_aes.decrypt(encryptedMessage)).toEqual(json)
  })
})
