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

app.listen(8000, () => {
  console.log('server is running!')
})
