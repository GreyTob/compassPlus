export interface IMessages {
    messageId: number;
    date: string;
    text: string;
    isOwner: boolean;
}

export interface IDialogues {
  id: number;
  name: string;
  messages: IMessages[];
  photoURL: string;
}

export interface IMessageItem {
  messages: IMessages;
  userId: number;
}

