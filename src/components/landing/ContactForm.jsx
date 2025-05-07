'use client'

import { Button } from '../components/ui/button'

import { Label } from '../components/ui/label'
import { MagicCard } from '@/components/magicui/magic-card'
import { useTheme } from 'next-themes'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Input } from '../components/ui/input'

export function ContactCard() {
  const { theme } = useTheme()

  return (
    <Card className="p-0 max-w-sm w-full shadow-none border-none">        
        <MagicCard gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'} className="p-0">
          <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
            <CardTitle>Get Early Access</CardTitle>
            <CardDescription>Join now to get early access to the beta version!</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
            <Button className="w-full">Join Early</Button>
          </CardFooter>
        </MagicCard>
      </Card>
    
  )
}
