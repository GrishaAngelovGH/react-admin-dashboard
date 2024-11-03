import {
  Admin,
  Resource,
  Datagrid,
  List,
  ReferenceField,
  TextField
} from "react-admin"
import { Layout } from "./Layout"
import { dataProvider } from "./dataProvider"

const PostList = () => (
  <List>
    <Datagrid>
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
)

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
  </Admin>
)
