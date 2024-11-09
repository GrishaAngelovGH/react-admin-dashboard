import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput
} from "react-admin"

const PostCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate