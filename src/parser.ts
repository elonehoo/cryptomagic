import { Buffer } from 'node:buffer'

function parseJsonPayload(payload: any) {
  const parsedString = JSON.stringify(payload)
  const size = Buffer.from(parsedString).length
  return { parsedString, size }
}
function parseStringPayload(payload: string) {
  return JSON.parse(payload)
}

export {
  parseJsonPayload,
  parseStringPayload,
}
