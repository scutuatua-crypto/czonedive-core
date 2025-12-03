# 🧭 Reef Compass Summary

```mermaid
flowchart TD
    subgraph Surface
        README[README + Links]
        Notify[Notification Flow]
    end

    subgraph Core
        Beacon[Beacon Scripts]
        Validator[Validator Client]
        Actions[Workflows]
    end

    subgraph Archive
        Badges[Badge History]
        Splash[Splash Log]
        Anchors[External Anchors]
    end

    README --> Beacon --> Validator --> Actions --> Splash
    Notify --> Splash --> Badges
    README --> Anchors --> Splash

