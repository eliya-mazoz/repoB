# Project Setup

This README provides step-by-step instructions to set up and run the project on **Windows**, **Linux**, and **macOS**.

## Prerequisites

Before you begin, ensure the following:

- **Node.js v18**: Use [NVM (Node Version Manager)](#2-install-nodejs-with-nvm-windowslinuxmacos) for managing Node.js versions.
- **npm**: Installed automatically with Node.js.
- **tsx**: Required to execute TypeScript files directly.

---
## Install Node.js with NVM (Linux/macOS)
``` sh 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
source ~/.nvm/nvm.sh
```

## Install Node.js with NVM (Windows)
Download the installer for NVM for Windows from the official repository. 
Follow the installation instructions and restart your terminal after installation.



## Installation Steps
``` sh
nvm install 18
nvm use 18
node -v # should be v18.20.5

```

### Install Project Dependencies

Run the following command to install the required dependencies:

```sh
npm install
```
