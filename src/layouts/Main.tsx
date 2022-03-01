import Header from '../components/Header/Header';

const Main: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Main;
