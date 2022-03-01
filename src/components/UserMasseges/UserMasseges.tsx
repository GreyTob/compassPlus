import classes from './UserMasseges.module.scss';

import Main from '../../layouts/Main';
import MessageItem from './MessageItem/MessageItem';
import Input from '../Input/Input';

import Dialogues from '../../store/Dialogues';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { IDialogues } from './../../types/types';

const UserMasseges: React.FC = () => {
  const urlId: string | undefined = useLocation().pathname.split(':').pop();
  const currentUser: IDialogues | undefined = Dialogues.getUserById(+urlId!)

  const { messages, id } = currentUser!;

  return (
    <Main>
      <div className={classes.userMasseges}>
        {messages.length
          ? messages.map((message) => (
              <MessageItem
                key={message.date + message.messageId}
                messages={message}
                userId={id}
              />
            ))
          : "You'll be able write the first message"}

        <Input userId={id} />
      </div>
    </Main>
  );
};

export default observer(UserMasseges);
