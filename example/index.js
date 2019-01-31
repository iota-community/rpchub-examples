const { json, send } = require('micro')
const Hub = require('./hub')

module.exports = async (req, res) => {
  const js = await json(req)
  let response
  switch (req.url) {
    case '/addUser':
      response = await Hub.createUser(js.userId)
      break
    case '/getBalance':
      response = await Hub.getBalance(js.userId)
      break
    case '/getDeposit':
      response = await Hub.getDepositAddress(js.userId)
      break
    case '/createWithdrawal':
      response = await Hub.userWithdraw(js.userId)
      break
    default:
      return res.end('Route not found')
  }
  const string = JSON.stringify(response)
  return send(res, 200, string)
}
