import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import Trending from 'pages/Trending';
import useStyles from 'styles';
import Repositories from 'pages/Trending/Repositories';
import Developers from 'pages/Trending/Developers';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/trending" />} />
        <Route path="/trending" element={<Trending />}>
          <Route path="" element={<Repositories />} />
          <Route path="developers" element={<Developers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
