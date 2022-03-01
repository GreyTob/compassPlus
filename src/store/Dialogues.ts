import { makeAutoObservable} from 'mobx';
import usersMock from '../mock';
import { IDialogues } from './../types/types';

class Dialogues {
  users: IDialogues[] = usersMock;

  constructor() {
    makeAutoObservable(this);
  }

  //находит пользователя по его id
  public  getUserById = (userId: number) => this.users.find(user => user.id === userId);

  //добавляет новое сообщение
  addMessage = (text: string, userId: number) => {
    const { messages } = this.getUserById(userId)!;   

    messages.push({
      messageId: messages.length + 1,
      date: new Date().toISOString(),
      isOwner: true,
      text: text,
    })
  }

  //удаляет сообщение
  removeMessage = (userId: number, messageId: number) => {
    const currentUser = this.getUserById(userId);
    currentUser!.messages = currentUser!.messages.filter(message => message.messageId !== messageId);
  }

}

export default new Dialogues();
