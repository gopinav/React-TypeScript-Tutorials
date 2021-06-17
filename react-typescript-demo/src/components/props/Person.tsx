type PersonProps = {
  name: {
    first: string
    last: string
  }
}

export const Person = (props: PersonProps) => {
  return (
    <h2>
      {props.name.first} {props.name.last}
    </h2>
  )
}
