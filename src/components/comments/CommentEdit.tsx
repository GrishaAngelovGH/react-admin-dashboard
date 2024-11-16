import {
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput
} from "react-admin"

const CommentEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="postId" reference="posts" />
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
)

export default CommentEdit