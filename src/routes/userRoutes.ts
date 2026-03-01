import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Users' })
})

router.get('/:id', (req, res) => {
  res.json({ message: 'User' })
})

router.put('/:id', (req, res) => {
  res.json({ message: 'user updated' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'user deleted' })
})

export default router
