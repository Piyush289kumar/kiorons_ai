export function Button({
    as: Component = 'button',
    children,
    variant = 'primary',
    className = '',
    ...props
  }) {
    const baseClasses = 'px-6 py-2 rounded-md font-medium transition-colors duration-200'
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      danger: 'bg-red-600 text-white hover:bg-red-700',
    }
  
    return (
      <Component
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    )
  }