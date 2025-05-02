import Link from 'next/link'
import { Button } from '@components/ui/Button'

export default function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to Next.js</h1>
      <p className="text-xl mb-8">A scalable frontend architecture</p>
      <div className="flex justify-center gap-4">
        <Button as={Link} href="/dashboard" variant="primary">
          Go to Dashboard
        </Button>
        <Button as={Link} href="/auth/login" variant="secondary">
          Login
        </Button>
      </div>
    </div>
  )
}
