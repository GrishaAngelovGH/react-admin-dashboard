import {
  Admin,
  Resource,
  EditGuesser
} from "react-admin"
import { Layout } from "./Layout"
import { dataProvider } from "./dataProvider"

import PostList from "./components/PostList"
import UserList from "./components/UserList"

import PostShow from "./components/PostShow"
import UserShow from "./components/UserShow"

import PostEdit from "./components/PostEdit"

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} />
    <Resource name="users" list={UserList} show={UserShow} />
  </Admin>
)
