# 🧭 Multi‑Reef Index (Hyperlinked + Logs)

This chart shows how all reef repos connect together, with direct links to logs.

```mermaid
flowchart TD
    subgraph Reef1 [whaletrucker-reef]
        W1[reef-flow] --> W2[recover-flow]
        W2 --> W3[badge-history]
        W3 --> W4[reef-compass]
        W4 --> WL[splash.log]
        click W1 "https://github.com/scutuatua-crypto/whaletrucker-reef/blob/main/reef-flow.md"
        click W4 "https://github.com/scutuatua-crypto/whaletrucker-reef/blob/main/reef-compass.md"
        click WL "https://github.com/scutuatua-crypto/whaletrucker-reef/blob/main/splash.log"
    end

    subgraph Reef2 [scutuatua-crypto]
        S1[reef-flow] --> S2[proxy-migration]
        S2 --> S3[staking-flow]
        S3 --> S4[reef-compass]
        S4 --> SL[splash.log]
        click S1 "https://github.com/scutuatua-crypto/scutuatua-crypto/blob/main/reef-flow.md"
        click S4 "https://github.com/scutuatua-crypto/scutuatua-crypto/blob/main/reef-compass.md"
        click SL "https://github.com/scutuatua-crypto/scutuatua-crypto/blob/main/splash.log"
    end

    subgraph Reef3 [czonedive-core]
        C1[reef-flow] --> C2[governance-flow]
        C2 --> C3[notification-flow]
        C3 --> C4[reef-compass]
        C4 --> CL[splash.log]
        click C1 "https://github.com/scutuatua-crypto/czonedive-core/blob/main/reef-flow.md"
        click C4 "https://github.com/scutuatua-crypto/czonedive-core/blob/main/reef-compass.md"
        click CL "https://github.com/scutuatua-crypto/czonedive-core/blob/main/splash.log"
    end

    W4 --> S1
    S4 --> C1
    C4 --> W1
