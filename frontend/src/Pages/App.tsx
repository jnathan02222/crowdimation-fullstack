import Main from './Main/Main'
import VideoViewer from './VideoViewer/VideoViewer';
import Movies from './Movies/Movies'
import TVShows from './TVShows/TVShows';
import People from './People/People'
import NotFound from './NotFound/NotFound';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from '../Components/Header/Header';
import AppStyles from './App.module.css'

function Layout() {
  return (
    <div className={AppStyles.app}>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}></Route>
          <Route path="movies" element={<Movies/>}></Route>
          <Route path="tvshows" element={<TVShows/>}></Route>
          <Route path="people" element={<People/>}></Route>
          <Route path="viewer" element={<VideoViewer/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

