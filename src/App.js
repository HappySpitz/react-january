import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage} from "./pages";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RequireAuth} from "./hoc/RequireAuth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path={'albums'} element={<AlbumsPage/>}/>
          <Route path={'todos'} element={
            <RequireAuth>
              <TodosPage/>
            </RequireAuth>}/>
          <Route path={'comments'} element={<CommentsPage/>}>
            <Route path={':postId'} element={<PostPage/>}/>
          </Route>
          <Route path={'login'} element={<LoginPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export {App};
