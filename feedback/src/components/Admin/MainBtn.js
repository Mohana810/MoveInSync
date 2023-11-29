import "./MainBtn.css"
import { Link } from 'react-router-dom';

const MainBtn = (props) => {
    return(
        <Link className="MainLink" to={props.onClick}><button className="MainBtn">{props.text}</button></Link>
    );
}

export default MainBtn;