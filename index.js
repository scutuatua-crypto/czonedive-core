console.log("Boss WhaleTrucker triggers governance 🌊");
console.log("Boss WhaleTrucker triggers governance 🧠!");
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ListResourcesRequestSchema, ReadResourceRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import fs from "fs";
import path from "path";

// 🌊 Boss WhaleTrucker triggers governance!
console.log("Boss WhaleTrucker triggers governance 🌊");

const server = new Server({
  name: "czonedive-core-mcp",
  version: "1.0.0"
}, {
  capabilities: {
    resources: {} 
  }
});

// Register Legacy Resources from czonedive-core
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      { uri: "file://reef-flow.md", name: "Reef Treasure Map", mimeType: "text/markdown" },
      { uri: "file://badge-history.md", name: "Whale Badge History", mimeType: "text/markdown" },
      { uri: "file://staking-flow.md", name: "Staking Operations", mimeType: "text/markdown" },
      { uri: "file://governance-flow.md", name: "Governance Rituals", mimeType: "text/markdown" }
    ]
  };
});

// Handle Reading Legacy Files
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const fileName = request.params.uri.replace("file://", "");
  const content = fs.readFileSync(path.join(process.cwd(), fileName), "utf-8");
  return {
    contents: [{ uri: request.params.uri, mimeType: "text/markdown", text: content }]
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("MCP Ghost Server: Active and Haunting 👻");
}

main().catch(console.error);
