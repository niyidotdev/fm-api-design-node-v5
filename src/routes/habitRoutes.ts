import { Router } from 'express'
import { validateParams, validateBody } from '../middleware/validation.ts'
import z from 'zod'
import { authenticateToken } from '../middleware/auth.ts'
import {
  createHabit,
  getHabitById,
  getUserHabits,
  updateHabit,
} from '../controllers/habitController.ts'

const createHabitSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  frequency: z.string(),
  targetCount: z.number(),
  tagIds: z.array(z.string()).optional(),
})

const uuidSchema = z.object({
  id: z.string().uuid('Invalid habit ID format'),
})

const completeParamsSchema = z.object({
  name: z.string(),
})

const router = Router()

router.use(authenticateToken)

router.get('/', getUserHabits)

router.get('/:id', getHabitById)

router.post('/', validateBody(createHabitSchema), createHabit)

router.patch('/:id', validateParams(uuidSchema), updateHabit)

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
