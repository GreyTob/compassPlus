import classes from './Header.module.scss';

import Dialogues from '../../store/Dialogues';
import { useLocation } from 'react-router-dom';
import { IDialogues } from './../../types/types';

const Header: React.FC = () => {
  const urlId: string | undefined = useLocation().pathname.split(':').pop();
  const currentUser: IDialogues | undefined = Dialogues.getUserById(+urlId!)

  return (
    <header className={classes.header}>
      <div>
        {currentUser !== undefined ? (
          <div className={classes.header__user}>
            <div>
              <img src={currentUser.photoURL} alt={currentUser.name} />
            </div>
            <h3>
              {currentUser.name}
            </h3>
          </div>
        ) : null}
      </div>
      <h2>Chip</h2>
    </header>
  );
};

export default Header;
