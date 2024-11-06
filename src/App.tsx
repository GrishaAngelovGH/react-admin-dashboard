import {
  Admin,
  Resource,
  ShowGuesser
} from "react-admin"
import { Layout } from "./Layout"
import { dataProvider } from "./dataProvider"

import PostList from "./components/PostList"
import UserList from "./components/UserList"

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} show={ShowGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
)
