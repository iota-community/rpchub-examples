// Import gRPC loaders & library
const protoLoader = require('@grpc/proto-loader')
const grpc = require('grpc')

// Load package then then definition
const packageDefinition = protoLoader.loadSync('./proto/hub.proto')
const hub = grpc.loadPackageDefinition(packageDefinition).hub.rpc

// New instance of Hub with server url and credentials
var client = new hub.Hub('localhost:50051', grpc.credentials.createInsecure())

// Example using Promises to get a deposit address for user X from the Hub
const GetDepositAddress = async userId => {
  return new Promise((resolve, reject) => {
    // For a list of calls navigate to /proto/hub.proto & /proto/messages.proto
    client.GetDepositAddress({ userId }, (error, response) => {
      if (error) {
        reject(error)
      }
      resolve(response)
    })
  })
}

// Main function allowing async/await
const main = async user => {
  const response = await GetDepositAddress(user)
  console.log(response)
}

// Pick user to get Deposit Address
const user = 1

// Call main function to start
main(user)
