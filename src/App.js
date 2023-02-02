import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage} from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'home'}/>}/>
          <Route path={'home'} element={<HomePage/>}/>
          <Route path={'albums'} element={<AlbumsPage/>}/>
          <Route path={'todos'} element={<TodosPage/>}/>
          <Route path={'comments'} element={<CommentsPage/>}>
            <Route path={':postId'} element={<PostPage/>}/>
          </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export {App};
