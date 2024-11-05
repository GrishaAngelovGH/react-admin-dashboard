import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  FunctionField,
  useRecordContext
} from "react-admin"

const PostPanel = () => {
  const record = useRecordContext()

  return (
    <div>{record?.body}</div>
  )
}

const PostList = () => (
  <List>
    <Datagrid
      expand={PostPanel}
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