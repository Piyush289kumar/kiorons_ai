import Link from 'next/link'

export function LandingPageButton({ text, color = 'white', href = '#' }) {
  let buttonClasses = `
    w-auto text-sm md:text-md transition-all duration-300 p-2 px-4 rounded-3xl cursor-pointer font-gellix font-medium
  `

  if (color === 'white') {
    buttonClasses += ' bg-white text-black border border-white'
  } else if (color === 'black') {
    buttonClasses += ' bg-black text-white border border-white'
  } else if (color === 'none') {
    buttonClasses += ' bg-transparent text-white border-none'
  }

  return (
    <Link href={href}>
      <button className={buttonClasses}>{text}</button>
    </Link>
  )
}
