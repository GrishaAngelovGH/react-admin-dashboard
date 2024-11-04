import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  FunctionField
} from "react-admin"

const PostList = () => (
  <List>
    <Datagrid
      sx={{
        '.RaDatagrid-headerCell': {
          padding: '16px',
          background: "#e3e3e3"
        }
      }}
    >
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