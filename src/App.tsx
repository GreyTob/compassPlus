import Users from './components/Users/Users';
import UserMasseges from './components/UserMasseges/UserMasseges';

import { Routes, Route } from 'react-router-dom';
import Dialogues from './store/Dialogues';

const { users } = Dialogues;

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/"   element={<Users />} />

        {users.map((user) => {
          return (
            <Route key={user.id} path={'/user:' + user.id} element={<UserMasseges />} />
          );
        })}
      </Routes>
    </>
  );
};

export default App;
