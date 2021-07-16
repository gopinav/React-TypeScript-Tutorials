import React from 'react'
import { Greet } from '../props/Greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>
}
