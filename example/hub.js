// Import gRPC loaders & library
const protoLoader = require('@grpc/proto-loader')
const grpc = require('grpc')

// Load package then then definition
const packageDefinition = protoLoader.loadSync('./proto/hub.proto')
const hub = grpc.loadPackageDefinition(packageDefinition).hub.rpc

// New instance of Hub with server url and credentials
var client = new hub.Hub('powny.nl:50051', grpc.credentials.createInsecure())

// Example using Promises to get a deposit address for user X from the Hub
const createUser = async userId => {
  return new Promise((resolve, reject) => {
    // For a list of calls navigate to /proto/hub.proto & /proto/messages.proto
    client.CreateUser({ userId: userId }, (error, response) => {
      if (error) {
        reject(error)
      }
      resolve(response)
    })
  })
}

const getBalance = async userId => {
  return new Promise((resolve, reject) => {
    client.GetBalance({ userId: userId }, (error, response) => {
      if (error) {
        reject(error)
      }
      resolve(response)
    })
  })
}

const getDepositAddress = async userId => {
  return new Promise((resolve, reject) => {
    client.GetDepositAddress({ userId }, (error, response) => {
      if (error) {
        reject(error)
      }
      resolve(response)
    })
  })
}

const userWithdraw = async (userId, payoutAddress, tag) => {
  return new Promise((resolve, reject) => {
    client.UserWithdraw({ userId, payoutAddress, tag }, (error, response) => {
      if (error) {
        reject(error)
      }
      resolve(response)
    })
  })
}

module.exports = {
  createUser,
  getBalance,
  getDepositAddress,
  userWithdraw
}
