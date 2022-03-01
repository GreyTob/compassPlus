import classes from './MessageItem.module.scss';

import {format} from 'date-fns';
import Dialogues from '../../../store/Dialogues';
import { IMessageItem } from './../../../types/types';

const MessageItem: React.FC<IMessageItem> = (props) => {
  const { messageId, date, text, isOwner } = props.messages;
  const { userId } = props;

  return (
    <article className={classes.MessageItem}>
      <div >
        <span className={!isOwner ? '' : classes.MessageItem__date}>
          {format(new Date(Date.parse(date)), 'HH:mm, MM.dd.yyyy')}
        </span>
      </div>
      
      <div className={!isOwner ? classes.message : classes.message_owner}>
        <div
          className={
            !isOwner ? classes.message__text : classes.message__text_owner
          }
        >
          <span >{text}</span>
        </div>

        <div
          className={classes.remove}
          onClick={() => Dialogues.removeMessage(userId, messageId)}
        ></div>
      </div>
    </article>
  );
};

export default MessageItem;
