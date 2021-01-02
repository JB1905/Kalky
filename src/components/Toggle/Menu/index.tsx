import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import { TOGGLE_MENU } from '../../../actions/settingsActions';

import './Menu.scss';

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="toggle toggle--menu"
      onClick={() => dispatch({ type: TOGGLE_MENU })}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default Menu;
