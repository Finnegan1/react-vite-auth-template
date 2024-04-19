import { Register } from '@/components/register'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/register')({
  component: () => <Register />
})