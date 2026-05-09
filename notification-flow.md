# 🔔 Notification Flow

```mermaid
flowchart TD
    G[Gmail Alerts] --> Q[Quiet Mode]
    N[Notion Updates] --> Q
    A[Actions Status] --> Q
    Q --> L[Splash Log]
    L --> M[Mint Badge]

