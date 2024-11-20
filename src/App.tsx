import {
  Admin,
  Resource,
  useTranslate
} from "react-admin"
import { Layout } from "./Layout"
import { dataProvider } from "./dataProvider"
import { authProvider } from "./authProvider"

import HomePage from "./components/HomePage"
import ImageGridPage from "./components/ImageGridPage"
import ActivityLogsPage from "./components/ActivityLogsPage"

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
import CommentEdit from "./components/comments/CommentEdit"

import ArticleIcon from "@mui/icons-material/Article"
import PersonIcon from "@mui/icons-material/Person"
import CommentIcon from "@mui/icons-material/Comment"
import ImageIcon from "@mui/icons-material/Image"

import { i18nProvider } from "./i18nProvider"

/*
Resource props:
- list: Designed to display multiple records in a resource. It typically shows a paginated table, grid, or list format where users can browse, filter, sort, and search for records.
- show: Used to display the details of a single record. It focuses on presenting the non-editable details of one specific item, often accessed from the "List" view.
- create: Defines the component used for creating a new record in the resource.
- edit: Defines the component used for editing an existing record in the resource.
*/

export const App = () => {
  const translate = useTranslate()

  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      layout={Layout}
      dashboard={HomePage}
    >
      <Resource
        icon={ArticleIcon}
        name="posts"
        options={{ label: translate('ra.resources.posts.name') }}
        list={PostList}
        show={PostShow}
        create={PostCreate}
        edit={PostEdit}
      />

      <Resource
        icon={PersonIcon}
        name="users"
        options={{ label: translate('ra.resources.users.name') }}
        list={UserList}
        show={UserShow}
        create={UserCreate}
        edit={UserEdit}
      />

      <Resource
        icon={CommentIcon}
        name="comments"
        options={{ label: translate('ra.resources.comments.name') }}
        list={CommentList}
        show={CommentShow}
        create={CommentCreate}
        edit={CommentEdit}
      />

      <Resource
        icon={ImageIcon}
        name="images"
        options={{ label: translate('ra.resources.images.name') }}
        list={ImageGridPage}
      />

      <Resource
        name="activity-logs"
        options={{ label: translate('ra.resources.activityLogs.name') }}
        list={ActivityLogsPage}
      />
    </Admin>
  )
}
