import {
  Datagrid,
  List,
  ReferenceField,
  TextField
} from "react-admin"

const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" label="Post Title" />
      <TextField source="body" />
    </Datagrid>
  </List>
)

export default PostList