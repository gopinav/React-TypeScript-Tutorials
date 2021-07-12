export type ProfileProps = {
  name: string
}

export const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile component. Name is {name}</div>
}
