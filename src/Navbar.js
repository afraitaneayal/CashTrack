
import {Link} from 'react-router-dom';


const Navbar = () => {
    return ( 
      <div className="navbar">
        <h1>CashTrack</h1>
        <div className="link">
          <Link to="">home</Link>
          <Link to="">account</Link>
          <Link to="">menu</Link>
        </div>
      </div>
     );
}
 
export default Navbar;