import {
  Datagrid,
  List,
  TextField,
  EditButton
} from "react-admin"

const UserList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="phone" />
        <EditButton />
      </Datagrid>
    </List>
  )
}

export default UserList