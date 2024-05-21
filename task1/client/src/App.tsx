import "./assets/styles/global.scss";
import SearchBar from "./copmponents/SearchBar";
import Layout from "./copmponents/UI/Layout";
import UserDialog from "./copmponents/UserDialog";
import Users from "./copmponents/Users";
import { ContextProvider } from "./store/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Layout>
          <div className="content_wrapper">
            <SearchBar />
            <Users />
          </div>
          <UserDialog />
        </Layout>
      </ContextProvider>
    </>
  );
}

export default App;
