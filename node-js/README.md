# Node.JS rpcHub Communication Example

A simple example showing how to communitcate with rpcHub over gRPC using NodeJS

## Getting Started

**Requirements**

- Node JS ^8.0.0
- NPM ^5.0.0

**Installing dependencies**

```bash
cd rpchub-node-example

npm i
```

**Configure the Example**

- Change line 10 to replace `localhost:50051` to your hub URL.
- Change line 32 to pick the user you want to interact with.

**Running the example**

```bash
node index.js
```

## Extending the script

In order to use other functions of the hub you can check the `/proto` folder.

In the `hub.proto` folder you'll find the various functions available on the Hub. In the `messages.proto` file you'll find the arguements and responses for each of these fucnctions.
