<script setup lang="ts">
import JsonEncryptDecrypt from '../../src/index'
const aes = new JsonEncryptDecrypt('pass')

// Encrypt an json object
const encryptMessage = aes.encrypt({ password: '67256558250eda49' })

// Decrypt an encrypted message
const decryptMessage = aes.decrypt(encryptMessage)

console.log('encryptMessage:', encryptMessage)

console.log('decryptMessage:', decryptMessage)
</script>

<template>
  <div>encryptMessage: {{ encryptMessage }}</div>
  <div>decryptMessage: {{ decryptMessage }}</div>
</template>
