import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Habits' })
})

router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'Got one habit' })
})

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Habit created' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'Habit deleted' })
})

router.post('/:id/complete', (req, res) => {
  res.json({ message: 'Habit completed' })
})

export default router
