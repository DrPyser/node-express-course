const express = require('express')
const app = express()

const mockUsers = [
  { name: 'Mark' },
  { name: 'Jill' }
]

app.get('/users', (req, res) => res.json({
  success: true,
  message: 'successfully got users. Nice!',
  users: mockUsers
}))
app.get('/users/:id', (req, res) => {
  console.log(`req.params.id: ${req.params.id}`)
  res.json({
    success: true,
    message: `successfully got one user with id ${req.params.id}. Nice!`,
    user: {
      id: req.params.id
    }
  })
})

const port = 8000
app.listen(port, () => {
  console.log(`server is running on port ${port}!`)
})
