export function LandingPageButton({ text, color = 'white' }) {
  let buttonClasses = `
    w-full sm:w-auto text-sm md:text-md transition-all duration-300 px-2 p-2 md:px-4 rounded-3xl cursor-pointer font-gellix font-medium
  `

  if (color === 'white') {
    buttonClasses += ' bg-white text-black border border-white'
  } else if (color === 'black') {
    buttonClasses += ' bg-black text-white border border-white'
  } else if (color === 'none') {
    buttonClasses += ' bg-transparent text-white border-none'
  }

  return <button className={buttonClasses}>{text}</button>
}
