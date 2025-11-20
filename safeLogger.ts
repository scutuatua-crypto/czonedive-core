// utils/safeLogger.ts
export function safeLogger(label: string, value?: string) {
  if (!value) {
    console.log(`⚠️ ${label}: not found in env`)
    return
  }
  const masked = value.length > 6 ? value.slice(0, 6) + "..." : value
  console.log(`🔐 ${label}: ${masked}`)
}
