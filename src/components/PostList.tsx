import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  FunctionField
} from "react-admin"

const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" label="Post Title" />
      <FunctionField
        label="Excerpt"
        render={(record) => `${record.body.substring(0, 50)}...`}
      />
    </Datagrid>
  </List>
)

export default PostList