import React from 'react';
import { Link } from 'react-router-dom';
const BookDemo = () => {
    return(
        <div className="booksDemo">
            <div className="overlay">
            <h1>Ready to optimise delivery <br/>
            logistics on your complex project?</h1>
            <Link type="button" to="/bookForm" className="btn btn-dark">book a demo</Link>
          <Link type="button" to="/contact" className="btn btn-light">contact us</Link>
            </div>
        </div>
    )
}
export default BookDemo;