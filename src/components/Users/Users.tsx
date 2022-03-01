import classes from './Users.module.scss';

import Main from '../../layouts/Main';
import UserItem from './UserItem/UserItem';

import Dialogues from '../../store/Dialogues';
import { observer } from 'mobx-react-lite';

const { users } = Dialogues;

const Users: React.FC = () => {
  return (
    <Main>
      <section className={classes.users}>
        {users.map((user) => <UserItem key={user.id} {...user} /> )}
      </section>
    </Main>
  );
};

export default observer(Users);
