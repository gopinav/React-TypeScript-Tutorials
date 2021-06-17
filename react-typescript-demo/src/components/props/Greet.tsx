type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Hey {props.name}! You have {props.messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  )
}
