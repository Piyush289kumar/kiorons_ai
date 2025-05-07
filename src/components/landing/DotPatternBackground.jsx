'use client'
import { cn } from '@/lib/utils'
// import { DotPattern } from "@/registry/magicui/dot-pattern";
import { DotPattern } from '@/components/magicui/dot-pattern'
export function DotPatternBackground() {
  return (
    // <div className="relative flex h-[300px] w-[300px] md:h-[500px] md:w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg bg-black lg:scale-150">

    <div className="relative flex h-[300px] w-[300px] md:h-[500px] md:w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg bg-black lg:scale-150">
      <DotPattern
        glow={true}
        className={cn(
          // Mask radius: 200px on base, 300px on lg screens
          '[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]',
          'lg:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]',
          'w-full h-full'
        )}
        // className={cn('[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]')}
      />
    </div>
  )
}
