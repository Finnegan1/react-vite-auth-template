import { ResetPassword } from '@/components/reset-password'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/reset-password')({
  component: () => <ResetPassword/>
})