import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <p>Opps</p>
           <Link to='/'><button className="btn btn-warning">Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;