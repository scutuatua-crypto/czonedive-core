# SSH

> Learn how to set up and use SSH to connect your local development environment to Replit Apps for secure remote access and file synchronization.

## What is SSH?

SSH, which stands for Secure Shell, is a secure protocol that facilitates remote access to your Replit App's command line interface. With SSH, you can seamlessly transfer files and leverage your preferred local Integrated Development Environment (IDE) for editing code on Replit, enhancing collaboration and productivity in your development workflow.

SSH functionality is available for Core, Teams, and all other paid plans.

Here's an overview of the process:

* Generate an SSH keypair on your local machine
* Add that SSH key to the **SSH** pane inside any Replit App
* Connect using an SSH client or an editor which can work over SSH (like [VSCode](https://code.visualstudio.com/) or [Cursor](https://www.cursor.com/))

<Note>
  SSH keys are associated with your account, not a particular Replit App. This means that you only need to add a public key once, after which you can connect to any Replit App you have access to.
</Note>

## Why use SSH?

* **Automatic updates between Replit App and editor**: Any changes made in the Replit App are reflected in your editor instantly, and any modifications in the editor are updated in the Replit App. This seamless synchronization ensures that your codebase is always up-to-date across platforms.

* **File management synchronization**: Whether you add, delete, or update files, these changes are synchronized in real time between your editor and the Replit App. This feature ensures that your project structure remains consistent, regardless of where the changes are initiated.

* **Folder management and file moving**: Moving files across folders is also synchronized between your editors and the Replit App. This ensures that organizational changes made in one environment are accurately reflected in the other, maintaining the integrity and structure of your project.

## Find or create a keypair

To configure SSH for your account, you'll need your SSH public key.

### Figuring out if you already have a keypair

You can check if you already have a public key by running the following command in a Terminal on your local computer:

<Tabs>
  <Tab title="Mac/Linux">
    ```sh  theme={null}
    ls -l ~/.ssh
    ```
  </Tab>

  <Tab title="Windows">
    ```sh  theme={null}
    dir %HOMEPATH%\.ssh
    ```
  </Tab>
</Tabs>

If you get an error, that's OK, proceed to [Generating a new keypair](#generating-a-new-keypair).
If you see a file called `replit.pub`, please proceed to [Get the contents of your public key](#get-the-contents-of-your-public-key).

### Generating a new keypair

On your machine, open a Terminal (or Command Prompt) window and paste the following command:

<Tabs>
  <Tab title="Mac/Linux">
    ```bash  theme={null}
    ssh-keygen -t ed25519 -f ~/.ssh/replit -q -N ""
    ```
  </Tab>

  <Tab title="Windows">
    ```sh  theme={null}
    ssh-keygen -t ed25519 -f %HOMEPATH%\.ssh\replit -q -N ""
    ```
  </Tab>
</Tabs>

This command checks if a specific SSH public key file already exists. If not, it creates a new SSH key with some sensible parameters.

### Get the contents of your public key

Once you have either confirmed you have a keypair or created one, display the contents of the public key (one of the two similarly named files, suffixed with `.pub`), as we'll need that for later.

<Tabs>
  <Tab title="Mac/Linux">
    ```sh  theme={null}
    cat ~/.ssh/replit.pub
    ```
  </Tab>

  <Tab title="Windows">
    ```sh  theme={null}
    notepad %HOMEPATH%\.ssh\replit.pub
    ```
  </Tab>
</Tabs>

Save the contents of `replit.pub` to use later in this article and proceed to [add the SSH key to your account](#add-the-ssh-key-to-your-account).

## Add the SSH key to your account

### Add the public key directly in a Replit App, using the SSH pane

1. In your Replit App on any window, select the **+** button, then search for **SSH**.

<Frame>
  <img src="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-tool.png?fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=6289b307a234f6f12066cc40ea67e9a8" alt="SSH tool button in the Replit interface" data-og-width="846" width="846" data-og-height="328" height="328" data-path="images/ssh-vscode/ssh-tool.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-tool.png?w=280&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=7997e9a9eb7ecaa5d0c92589064ea924 280w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-tool.png?w=560&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=e44642d169d3834f85e9e7852f197fe6 560w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-tool.png?w=840&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=49dc6dd6676fb4f86c69da7592769e01 840w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-tool.png?w=1100&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=df66eae7d5f1c3a00a80a512509e5c89 1100w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-tool.png?w=1650&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=3684caa7bcbf5ae00bf3fb9bd520471b 1650w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-tool.png?w=2500&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=5c623a0d487eaef1fb64983b3a5c2c4f 2500w" />
</Frame>

2. Navigate to the **Keys** tab and select **New SSH key**.
3. In the popup window, enter a **Label** for your key (e.g., my-ssh-key) and paste the public key you copied into the **Key** section.
   Select the **Add SSH Key** button. Your key has been added and authorized for use.

<Frame>
  <img src="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/add-ssh-key-with-values.png?fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=45467b138e8bb5b4c73c7d747446c46e" alt="Add SSH key dialog with label and key fields filled in" data-og-width="500" width="500" data-og-height="511" height="511" data-path="images/ssh-vscode/add-ssh-key-with-values.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/add-ssh-key-with-values.png?w=280&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=0c379abf7ed5f87793c7750024915645 280w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/add-ssh-key-with-values.png?w=560&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=a124b08cba2fcede46c1f3778ee79354 560w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/add-ssh-key-with-values.png?w=840&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=3c918fd8c775a1fbac8cd591a5b0b491 840w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/add-ssh-key-with-values.png?w=1100&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=d3a927d3463221ff5f93ee62a4f960b2 1100w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/add-ssh-key-with-values.png?w=1650&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=ac8ac6b8c5fe11aa6c512630cb602561 1650w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/add-ssh-key-with-values.png?w=2500&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=7682bc21f6c0398c07fe15ffef6dde90 2500w" />
</Frame>

### Add the public key directly in your Account

You can also add an SSH key by navigating to your [**Account**](https://replit.com/account#ssh-keys) and selecting **SSH keys**.

<Frame>
  <img src="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/repl-account.png?fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=69090c9d3c539dcb85e61192a3bd6602" alt="Account settings showing SSH keys option" data-og-width="212" width="212" data-og-height="250" height="250" data-path="images/ssh-vscode/repl-account.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/repl-account.png?w=280&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=c99e146a5030ed82297c04996e7caa5f 280w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/repl-account.png?w=560&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=ee0a8fb8d2832939d81cbc799fba288c 560w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/repl-account.png?w=840&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=9b8ef510133193f3c23bf6c18d1dbc73 840w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/repl-account.png?w=1100&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=f7af0e1ad6ec248b010b572d1de29477 1100w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/repl-account.png?w=1650&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=186abe24ffa2403deb5aa07c39aa06b2 1650w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/repl-account.png?w=2500&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=814cbfbab9f90f353268134f7701963a 2500w" />
</Frame>

Select the **Add SSH key** button and paste in the contents of `replit.pub` that we obtained from the previous section, [Find or create a keypair](#find-or-create-a-keypair).

<Frame>
  <img src="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/account-ssh-keys.png?fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=52abd6d0cfd443e53e3f2eaa54e6e22a" alt="SSH keys management interface in account settings" data-og-width="879" width="879" data-og-height="438" height="438" data-path="images/ssh-vscode/account-ssh-keys.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/account-ssh-keys.png?w=280&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=c8a485a59668b69e83ae60f11240f6d5 280w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/account-ssh-keys.png?w=560&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=9eab9472d31fd7172029af81f962e70b 560w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/account-ssh-keys.png?w=840&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=0fe02c23f0d57e2e70cf01748feb3e80 840w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/account-ssh-keys.png?w=1100&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=bdcadfd2b36385e1fa93469cec837c6c 1100w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/account-ssh-keys.png?w=1650&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=46a8530a85db5f96e9aa2cc696910667 1650w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/account-ssh-keys.png?w=2500&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=d06b51a08ef0141b9e8f35de0bed85f0 2500w" />
</Frame>

<Note>
  When you have multiple public keys on your machine, it's important to ensure that you use the correct combination of private and public keys for your SSH configuration.
</Note>

## Connecting to your Replit App

### Configure your SSH config

1. In a terminal, ensure the `~/.ssh` directory and `~/.ssh/config` file exist:

<Tabs>
  <Tab title="Mac/Linux">
    ```sh  theme={null}
    mkdir -p ~/.ssh && chmod 700 ~/.ssh && touch ~/.ssh/config && chmod 600 ~/.ssh/config
    open -a 'TextEdit' ~/.ssh/config || nano ~/.ssh/config
    ```
  </Tab>

  <Tab title="Windows">
    ```sh  theme={null}
    if not exist %HOMEPATH%\.ssh mkdir %HOMEPATH%\.ssh && type \NUL > %HOMEPATH%\.ssh\config
    notepad %HOMEPATH%\.ssh\config
    ```
  </Tab>
</Tabs>

2. Add a configuration block to use the `replit` keypair for all \*.replit.dev domains:

<Tabs>
  <Tab title="Mac/Linux/Windows">
    ```
    Host *.replit.dev
        Port 22
        IdentityFile ~/.ssh/replit
        StrictHostKeyChecking accept-new
    ```
  </Tab>
</Tabs>

### Connect from VSCode or Cursor

1. From a Replit App, open the **SSH** pane

2. In the SSH pane, navigate to the **Connect** tab and select **Launch VS Code**.

<Tabs>
  <Tab title="Connect with VSCode">
    <img src="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-connect.png?fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=d7c538b8cf6e63db7264ff194dd583be" alt="SSH connect tab showing Launch VS Code option" data-og-width="788" width="788" data-og-height="482" height="482" data-path="images/ssh-vscode/ssh-connect.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-connect.png?w=280&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=0841e4d581477725602ab5177bdbb6e7 280w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-connect.png?w=560&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=e737e145ac2e9cf185b786b1d71bdb23 560w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-connect.png?w=840&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=5e6e172211bc2dce60fa8e9cc91acf6a 840w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-connect.png?w=1100&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=b2acf950b1d0ca9be3aec266e88d6c5e 1100w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-connect.png?w=1650&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=e39202e8835bccdb7840783ff3164896 1650w, https://mintcdn.com/replit/0UCOQvZyQpUEM03B/images/ssh-vscode/ssh-connect.png?w=2500&fit=max&auto=format&n=0UCOQvZyQpUEM03B&q=85&s=fb9e91069f1385012907a4df89f3540a 2500w" />
  </Tab>
</Tabs>

3. If you are prompted to fill out `~/.ssh/config`, enter the following:

   ```
   Host *.replit.dev
       Port 22
       IdentityFile ~/.ssh/replit
       StrictHostKeyChecking accept-new
   ```

   <Note>
     Adding SSH configuration is only prompted the first time you are trying to connect to VS Code or another editor. To return to the configuration file, you will need to select **Configure SSH Hosts...**.
   </Note>

4. If prompted by an external application warning, select **Yes** to confirm you want to open your project in your preferred editor or VS Code.

5. You may be asked to install or update SSH extensions periodically. Replit will endeavor to be compatible with the latest versions of these IDEs, and you may get important security updates as well.

### Connect manually

At the bottom of the **SSH** pane's "Connect" tab, you will find "Connect manually".

Copy that command, paste it into either a local Terminal (Mac or Linux) or local Command Prompt (Windows) in order to connect directly.

This is also a good way to debug connection issues with IDEs, as well as to collect valuable "verbose" connection information when reporting bugs to Replit Support.

**An error indicating we are attempting to connect with a nonexistent private key**:

```
$ ssh -i ~/.ssh/replit -p 22 c96b6ade-d5e4-4f7a-bc5b-52334509b2a3@c96b6ade-d5e4-4f7a-bc5b-52334509b2a3-00-16nh2hskw3ql8.riker.replit.dev
Warning: Identity file /Users/user/.ssh/replit not accessible: No such file or directory.
```

**Full debug logs of an SSH connection attempt, to include with a bug report**:

```
$ ssh -vvv -i ~/.ssh/replit -p 22 c96b6ade-d5e4-4f7a-bc5b-52334509b2a3@c96b6ade-d5e4-4f7a-bc5b-52334509b2a3-00-16nh2hskw3ql8.riker.replit.dev
OpenSSH_9.6p1, LibreSSL 3.3.6
debug1: Reading configuration data /Users/.../.ssh/config
debug1: /Users/.../.ssh/config line 1: Applying options for *
debug1: /Users/.../.ssh/config line 4: Applying options for *.replit.dev
debug3: channel_clear_timeouts: clearing
debug1: Connecting to c96b6ade-d5e4-4f7a-bc5b-52334509b2a3-00-16nh2hskw3ql8.riker.replit.dev port 22.
debug1: Connection established.
debug1: identity file /Users/dstewart/.ssh/replit type 3
debug1: Local version string SSH-2.0-OpenSSH_9.6
debug1: Remote protocol version 2.0, remote software version Replit-SSH-Proxy
debug1: compat_banner: no match: Replit-SSH-Proxy
debug3: fd 5 is O_NONBLOCK
...
Welcome to the Replit SSH Proxy.

Visit https:/.replit.com/replit-workspace/ssh to learn more about SSH on Replit.
debug3: receive packet: type 51
debug1: Authentications that can continue: password,publickey
debug3: start over, passed a different list password,publickey
debug3: preferred publickey,keyboard-interactive,password
debug3: authmethod_lookup publickey
debug3: remaining preferred: keyboard-interactive,password
debug3: authmethod_is_enabled publickey
debug1: Next authentication method: publickey
...
debug2: we did not send a packet, disable method
debug3: authmethod_lookup password
debug3: remaining preferred: ,password
debug3: authmethod_is_enabled password
debug1: Next authentication method: password
```

### Connect via a tool not listed here

There are many SSH clients available for different platforms and operating systems, many offering different features or integrations.

You can always break down the command displayed in "Connect Manually" into its constituent components to determine how to configure each client:

```sh  theme={null}
ssh -i ~/.ssh/replit -p 22  c96b6ade-d5e4-4f7a-bc5b-52334509b2a3@c96b6ade-d5e4-4f7a-bc5b-52334509b2a3-00-16nh2hskw3ql8.riker.replit.dev
       ^-----v-----^    ^^  ^-----------------v----------------^ ^------------------------------v-------------------------------------^
        Private Key   Port                   User               @                           Hostname
```

**Hostname**: `<your_hostname>.<cluster>.replit.dev`
**Port**: `<port_number>`
**User**: `Username`
**Private Key**: Path to the private key file on your computer. Usually next to `replit.pub`.
