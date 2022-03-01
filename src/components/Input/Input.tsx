import classes from './Input.module.scss';

import { useState } from 'react';
import Dialogues from '../../store/Dialogues';


const Input: React.FC<{userId: number}> = ({userId }) => {
  const [value, setValue] = useState<string>('');

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value !== '') {
      Dialogues.addMessage(value.trim(), userId);
      setValue('');
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <section className={classes.Input}>
      <input
        value={value}
        type='text'
        placeholder='Message'
        onChange={(e) => inputHandler(e)}
        onKeyPress={(e) => keyPressHandler(e)}
      />
    </section>
  );
};

export default Input;
