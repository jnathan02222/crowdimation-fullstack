import Main from './Main/Main'
import VideoViewer from './VideoViewer/VideoViewer';
import Movies from './Movies/Movies'
import TVShows from './TVShows/TVShows';
import People from './People/People'
import More from './More/More'
import Join from './Join/Join';

import NotFound from './NotFound/NotFound';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from '../Components/Header/Header';
import AppStyles from './App.module.css'
import Channel from './Channel/Channel';

function Layout() {
  return (
    <div className={AppStyles.app}>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default function App() {
  const loggedIn = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}></Route>
          <Route path="movies" element={loggedIn ? <Movies/> : <Join login={false}/>}></Route>
          <Route path="tvshows" element={loggedIn ? <TVShows/> : <Join login={false}/>}></Route>
          <Route path="people" element={loggedIn ? <People/> : <Join login={false}/>}></Route>
          <Route path="viewer" element={loggedIn ? <VideoViewer/> : <Join login={false}/>}></Route>
          <Route path="channel" element={loggedIn ? <Channel/> : <Join login={false}/>}></Route>
          <Route path="more" element={<More/>}></Route>
          <Route path="join" element={<Join login={false}/>}></Route>
          <Route path="login" element={<Join login={true}/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

