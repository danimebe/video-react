import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import logo from '../assets/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/img/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogOut = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img
            src={
              hasUser ? gravatar(user.email) : userIcon
            }
            alt='Platzi Video'
          />
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ? <li><a href='/'>{user.name}</a></li> : null
          }
          {
            hasUser ? <li><a href='#logout' onClick={handleLogOut}>Cerrar Sesión</a></li> : <li><Link to='login'>Iniciar sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
