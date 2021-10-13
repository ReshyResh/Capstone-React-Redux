import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1 className="white" style={{ margin: "auto", fontSize: "4em", textAlign: "center" }}> {/* eslint-disable-line */}
      Page not found!
      <br />
      Click <Link to="/">here </Link>to go back home! {/* eslint-disable-line */}
    </h1>
  </div>
);

export default NotFound;
