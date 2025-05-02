import { Header } from '@components/sections/Header'

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
