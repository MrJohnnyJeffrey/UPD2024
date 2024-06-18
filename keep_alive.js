const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("NAHHHHH")
})

function keepAlive() {
  server.listen(80, () => {
    console.log("Server is up and running, Make it 24/7 now!")
  })
}

module.exports = keepAlive
