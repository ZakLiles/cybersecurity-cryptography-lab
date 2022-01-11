const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      // console.log('Logging In User')
      // console.log(req.body)
      const { username, password } = req.body
      console.log(users)
      let user = users.find(user => user.username === username)
      if(user){
        let isCorrectPassword = bcrypt.compareSync(password, user.passHash);
        if(isCorrectPassword){
          let messageToReturn = {...user}
          delete messageToReturn.passHash
          // console.log("Login Response,", messageToReturn)
          res.status(200).send(messageToReturn)
        } else {
          res.status(400).send("Incorrect Password")
        }
      } else {
        res.status(400).send("User not found.")
      }
    },
    register: (req, res) => {
        // console.log('Registering User')
        // console.log(req.body)
        const {username, email, firstName, lastName, password} = req.body;
        let user = users.find(user => user.username === username)

        if(!user){
          let salt = bcrypt.genSaltSync(5)
          let passHash = bcrypt.hashSync(password, salt)

          const newUser= {
            username,
            email,
            firstName,
            lastName,
            passHash
          }

          users.push(newUser)
          let messageToReturn = {...newUser}
          delete messageToReturn.passHash;
          // console.log("Register response", messageToReturn)
          res.status(200).send(messageToReturn)
        } else {
          res.status(400).send("Username already registered")
        }
    }
}