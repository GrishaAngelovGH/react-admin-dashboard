import {
  Admin,
  Resource
} from "react-admin"
import { Layout } from "./Layout"
import { dataProvider } from "./dataProvider"
import { authProvider } from "./authProvider"

import HomePage from "./components/HomePage"

import PostList from "./components/posts/PostList"
import UserList from "./components/users/UserList"

import PostShow from "./components/posts/PostShow"
import UserShow from "./components/users/UserShow"

import PostCreate from "./components/posts/PostCreate"
import UserCreate from "./components/users/UserCreate"

import PostEdit from "./components/posts/PostEdit"
import UserEdit from "./components/users/UserEdit"

import ArticleIcon from "@mui/icons-material/Article"
import PersonIcon from "@mui/icons-material/Person"

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider} dashboard={HomePage}>
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
