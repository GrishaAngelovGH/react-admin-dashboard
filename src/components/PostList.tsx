import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  TextInput,
  FunctionField,
  EditButton,
  useRecordContext
} from "react-admin"

const PostPanel = () => {
  const record = useRecordContext()

  return (
    <div>{record?.body}</div>
  )
}

const PostList = () => {
  const filters = [
    <TextInput source="q" label="Search" alwaysOn />
  ]

  return (
    <List filters={filters}>
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
        <EditButton />
      </Datagrid>
    </List>
  )
}

export default PostList