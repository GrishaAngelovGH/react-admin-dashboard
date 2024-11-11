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

import PostCreate from "./components/PostCreate"
import UserCreate from "./components/UserCreate"

import PostEdit from "./components/PostEdit"
import UserEdit from "./components/UserEdit"

import ArticleIcon from "@mui/icons-material/Article"
import PersonIcon from "@mui/icons-material/Person"

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      icon={ArticleIcon}
      name="posts"
      list={PostList}
      show={PostShow}
      create={PostCreate}
      edit={PostEdit}
    />

    <Resource
      icon={PersonIcon}
      name="users"
      list={UserList}
      show={UserShow}
      create={UserCreate}
      edit={UserEdit}
    />
  </Admin>
)
