console.log(
  "🔐 GitHub token injected: " +
  process.env.GITHUB_TOKEN?.slice(0, 6) + "..."
)
import { safeLogger } from "./utils/safeLogger"

safeLogger("GitHub Token", process.env.GITHUB_TOKEN)
safeLogger("GitHub Username", process.env.GITHUB_USERNAME)
