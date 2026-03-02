import { Router } from 'express'
import { validateParams, validateBody } from '../middleware/validation.ts'
import z from 'zod'

const createHabitSchema = z.object({
  name: z.string(),
})

const completeParamsSchema = z.object({
  name: z.string(),
})

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Habits' })
})

router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'Got one habit' })
})

router.post('/', validateBody(createHabitSchema), (req, res) => {
  res.status(201).json({ message: 'Habit created' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'Habit deleted' })
})

router.post(
  '/:id/complete',
  validateParams(completeParamsSchema),
  validateBody(createHabitSchema),
  (req, res) => {
    res.json({ message: 'Habit completed' })
  },
)

export default router
