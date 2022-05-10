// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// React-Redux
import { toggleMenu } from '@/actions/app';
import ThemeToggle from '../ThemeToggle';
import { logout } from '@/actions/user';
import Button from '../Button';
// Styles
import "./menu.scss"

function Menu() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.logged);
  const menuStatus = useSelector((state) => state.app.menuOpened);
  const menuCssClass = classNames('menu', { 'open': menuStatus });
  const burgerCssClass = classNames('burger burger-squeeze', { 'open': menuStatus });

  return (
    <>
      <div className="menu_toggle">
        <div className={burgerCssClass} onClick={() => dispatch(toggleMenu(!menuStatus))}>
          <div className="burger-lines"></div>
        </div>
      </div>
      <div className={menuCssClass}>
        <ThemeToggle className="menu__theme_toggle" />
        {
          (isLoggedIn) ?
            (
              <>
                <NavLink
                  className={
                    ({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')
                  }
                  to="/"
                >
                  Tableau de bord
                </NavLink>
                <NavLink
                  className={
                    ({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')
                  }
                  to="/games"
                >
                  Liste de jeux
                </NavLink>
                <NavLink
                  className={
                    ({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')
                  }
                  to="/account"
                >
                  Mon compte
                </NavLink>
                <NavLink
                  className={
                    ({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
                <Button
                  name="Se déconnécter"
                  classname="primary"
                  style={{ width: '160px', marginTop: '1em' }}
                  onclick={() => dispatch(logout())}
                />
              </>
            ) : (
              <>
                <NavLink
                  className={
                    ({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')
                  }
                  to="/"
                >
                  Accueil
                </NavLink>
                <NavLink
                  className={
                    ({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
                <Button
                  name="Se Connecter"
                  classname="primary"
                  style={{ width: '160px', marginTop: '1em' }}
                />
              </>
            )
        }

      </div>
    </>
  );
}

export default Menu;
