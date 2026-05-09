# 🛠️ Recovery Flow

```mermaid
flowchart TD
    Err[Runtime Error] --> Retry[Retry Ritual]
    Retry --> Patch[Patch Applied]
    Patch --> Log[Splash Log Entry]
    Log --> Badge[Badge Minted]
