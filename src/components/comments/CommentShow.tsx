
import {
  EmailField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField
} from "react-admin"

const CommentShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <ReferenceField source="postId" reference="posts" />
      <TextField source="body" />
    </SimpleShowLayout>
  </Show>
)

export default CommentShow