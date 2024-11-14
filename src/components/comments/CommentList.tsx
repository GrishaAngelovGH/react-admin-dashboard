import {
  Datagrid,
  EmailField,
  List,
  ReferenceField,
  TextField
} from "react-admin"

const CommentList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <ReferenceField source="postId" reference="posts" />
      <TextField source="body" />
    </Datagrid>
  </List>
)

export default CommentList