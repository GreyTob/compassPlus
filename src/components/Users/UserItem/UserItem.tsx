import classes from './UserItem.module.scss';

import { Link } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import { IDialogues } from './../../../types/types';

const UserItem: React.FC<IDialogues> = (props) => {
  const { name, id , messages, photoURL } = props;

  return (
    <article>
      <Link to={`/user:${id}`} className={classes.userItem}>
        <div>
          <img src={photoURL} alt={name} />
        </div>
        
        <div className={classes.userItem__text}>
          <h3 className={classes.userItem__name}>{name}</h3>
          {messages.length ? 
            <p >
              {messages[messages.length - 1].text.substring(0, 50)}
              {messages[messages.length - 1].text.length > 50 ? '...' : null}
            </p>
            : <p className={classes.userItem__empty}>No messages yet!</p>
          }
        </div>
      </Link>
    </article>
  );
};

export default observer(UserItem);
