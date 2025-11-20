import fetch from "node-fetch"

async function testToken() {
  const res = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  })
  const data = await res.json()
  console.log("🔐 GitHub identity:", data.login)
}

testToken()
// testToken.ts
import fetch from "node-fetch"

function safeLogger(label: string, value?: string) {
  if (!value) {
    console.log(`⚠️ ${label}: not found in env`)
    return
  }
  const masked = value.length > 6 ? value.slice(0, 6) + "..." : value
  console.log(`🔐 ${label}: ${masked}`)
}

async function testToken() {
  safeLogger("GitHub Token", process.env.GITHUB_TOKEN)
  safeLogger("GitHub Username", process.env.GITHUB_USERNAME)

  const res = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  })

  const data = await res.json()

  if (data.login) {
    console.log("✅ GitHub identity confirmed:", data.login)
  } else {
    console.log("❌ Token error:", data.message || "Unknown issue")
  }
}

testToken()
