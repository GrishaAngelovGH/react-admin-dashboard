import {
  Datagrid,
  EmailField,
  InfiniteList,
  ReferenceField,
  TextField
} from "react-admin"

const CommentList = () => (
  <InfiniteList>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <ReferenceField source="postId" reference="posts" />
      <TextField source="body" />
    </Datagrid>
  </InfiniteList>
)

export default CommentList