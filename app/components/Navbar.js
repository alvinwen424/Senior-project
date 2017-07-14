import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar (){
    return (
        <nav >
            <Link to='/campuses'>Campuses</Link>
            <Link to='/students'>Students</Link>
        </nav>
    )
}

export default Navbar;

// const mapStateToProps = function (state){
//     return{

//     }
// }

// export default connect(mapStateToProps)(Navbar);