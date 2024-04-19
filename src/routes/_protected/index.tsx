import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/')({
  component: () => <div>Hello /!</div>
})