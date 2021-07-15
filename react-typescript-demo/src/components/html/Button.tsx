type ButtonProps = {
  variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}
