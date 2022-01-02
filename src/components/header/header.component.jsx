import React from 'react';
import { Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector'

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'> 
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {currentUser ? 
            <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> : 
            <Link className='option' to='/signin'>SIGN IN</Link> }
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);