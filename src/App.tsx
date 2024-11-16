import {
  Admin,
  Resource,
} from "react-admin"
import { Layout } from "./Layout"
import { dataProvider } from "./dataProvider"
import { authProvider } from "./authProvider"

import HomePage from "./components/HomePage"

import PostList from "./components/posts/PostList"
import UserList from "./components/users/UserList"
import CommentList from "./components/comments/CommentList"

import PostShow from "./components/posts/PostShow"
import UserShow from "./components/users/UserShow"
import CommentShow from "./components/comments/CommentShow"

import PostCreate from "./components/posts/PostCreate"
import UserCreate from "./components/users/UserCreate"
import CommentCreate from "./components/comments/CommentCreate"

import PostEdit from "./components/posts/PostEdit"
import UserEdit from "./components/users/UserEdit"

import ArticleIcon from "@mui/icons-material/Article"
import PersonIcon from "@mui/icons-material/Person"
import CommentIcon from "@mui/icons-material/Comment"

/*
Resource props:
- list: Designed to display multiple records in a resource. It typically shows a paginated table, grid, or list format where users can browse, filter, sort, and search for records.
- show: Used to display the details of a single record. It focuses on presenting the non-editable details of one specific item, often accessed from the "List" view.
- create: Defines the component used for creating a new record in the resource.
- edit: Defines the component used for editing an existing record in the resource.
*/

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

    <Resource
      icon={CommentIcon}
      name="comments"
      list={CommentList}
      show={CommentShow}
      create={CommentCreate}
    />
  </Admin>
)
