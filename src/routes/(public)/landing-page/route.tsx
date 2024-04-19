import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/landing-page')({
  component: () => <div>Hello /(public)/landing-page!</div>
})