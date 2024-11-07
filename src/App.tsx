import {
  Admin,
  Resource
} from "react-admin"
import { Layout } from "./Layout"
import { dataProvider } from "./dataProvider"

import PostList from "./components/PostList"
import UserList from "./components/UserList"

import PostShow from "./components/PostShow"
import UserShow from "./components/UserShow"

import PostEdit from "./components/PostEdit"
import UserEdit from "./components/UserEdit"

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} />
    <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} />
  </Admin>
)
