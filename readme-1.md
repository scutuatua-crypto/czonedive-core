# Asset Hub Migration

## What is Asset Hub Migration?

The main goal is to migrate all the **staking**, **governance** and **balances** functionality from the Relay Chain to Asset Hub.

### Timeline

**Westend->Westend Asset Hub:** May, 15th

**Paseo -> Paseo Asset Hub:** July, 7th (Delayed)

**Kusama -> Kusama Asset Hub:** Oct, 7th

**Polkadot -> Polkadot Asset Hub:** Nov, 4th

## What happened after the Asset Hub Migration?

### Accounts on relay chain

| <p><br></p>                           | Account                        | Assets               | PendingTransactions | Account Deposit                            | Transaction Deposit                          |
| ------------------------------------- | ------------------------------ | -------------------- | ------------------- | ------------------------------------------ | -------------------------------------------- |
| Multisig                              | Both on Relaychain & Asset Hub | Migrate to Asset Hub | Discard             | -                                          | Migrate to Asset Hub and refund to initiator |
| Normal Proxy                          | Only on Asset Hub              | Migrate to Asset Hub | -                   | Migrate to Asset Hub and refund to creator | -                                            |
| Pure Proxy(Include Flexible Multisig) | Only on Asset Hub              | Migrate to Asset Hub | Discard             | Migrate to Asset Hub and refund to creator | -                                            |
| Time-Delay Proxy                      | Only on Asset Hub              | Migrate to Asset Hub | Discard             | Migrate to Asset Hub and refund to creator | Migrate to Asset Hub and refund to initiator |

**History data won't be effected.**

### e.g

* I have one single-signature account created a multisig with **pure account**.
* I have **submitted a multisig transaction** before Assethub Migration

| DOT                        | Total | Free | Proxy Reserved       | Multisig Transaction Reserved |
| -------------------------- | ----- | ---- | -------------------- | ----------------------------- |
| Before Asset Hub Migration | 30    | 10   | 10(1 Proxy Relation) | 10(1 Pending)                 |
| After Asset Hub Migration  | 30    | 29.9 | 0.1                  | 0(Discarded)                  |

* Once i want to kill this proxy on Asset Hub, 0.1 reserved will be refunded to creator's account on **Asset Hub** .

### The better user experience on Asset Hub will include:

1. 100x reduction in existential deposit (from 1 DOT to 0.01 DOT).
2. Significantly lower (over 10x) transaction fees.
3. More assets like USDT/USDC (and all other ecosystem tokens) available to users because wallets will integrate with Asset Hub instead of the Relay Chain.
4. Unified access to DOT, assets, staking, and governance.
5. Ability to pay fees in any asset.
6. Direct access to our trustless bridge with Ethereum.

## Why is Polkadot doing this?

Polkadot’s multi-chain architecture has led to challenges for many applications and integration partners who do not yet have the tools from Parity to support these chains. An example is having assets like USDT and USDC on Asset Hub and staking on the Relay Chain. By consolidating the most commonly used logic in one chain, Polkadot hope to provide a better experience for service providers, application developers, and their end-users.Most services like wallets, tools, exchange integrations, and staking and governance dashboards will only need to connect to Asset Hub (exceptions will include some Coretime and Identity functionality), which will bring a better developer and user experience to Polkadot.

More Info: <https://www.parity.io/blog/polkadot-smartcontract-platform>

## FAQs

<https://docs.google.com/document/d/1XR3vL2p4QV0wC7FrlC8eN-q62BqNFTFElbj21wEmMGg/edit?tab=t.6yd3zdf50r9d>
