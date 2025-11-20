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
