import Booking from "../core/main/page/booking/booking";
import Home from "../core/main/page/home/home";
import Login from "../core/main/page/login/login";
import MovieDetail from "../core/main/page/movie_detail/movie_detail";
import Profile from "../core/main/page/profile/profile";
//import { Redirect } from "react-router-dom";
import Dashboard from "../core/admin/page/movie_dashboard/dashboard";
import MovieAdmin from "../core/admin/page/movie_admin/movie_admin";

export const MainRoute = [
  {
    path: "/",
    exact: true,
    main: ({ history, match }) => <Home history={history} match={match} />,
  },
  {
    path: "/movie-detail/:id",
    exact: true,
    main: ({ history, match }) => (
      <MovieDetail history={history} match={match} />
    ),
  },
  {
    path: "/login",
    exact: true,
    main: ({ history, match }) => <Login history={history} match={match} />,
  },
  {
    path: "/booking/:id",
    exact: true,
    main: ({ history, match }) => <Booking history={history} match={match} />,
  },
  {
    path: "/profile",
    exact: true,
    main: ({ history, match }) => <Profile history={history} match={match} />,
  },
];

export const AdminRoute = [
  {
    path: "/admin",
    exact: true,
    main: ({ history, match }) => <Dashboard history={history} match={match} />,
  },
  {
    path: "/managerment",
    exact: true,
    main: ({ history, match }) => (
      <MovieAdmin history={history} match={match} />
    ),
  },
];
