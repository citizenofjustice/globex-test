import "./assets/styles/global.scss";
import SearchBar from "./copmponents/SearchBar";
import Layout from "./copmponents/UI/Layout";
import Users from "./copmponents/Users";

function App() {
  return (
    <>
      <Layout>
        <div className="content_wrapper">
          <SearchBar />
          <Users />
        </div>
      </Layout>
    </>
  );
}

export default App;
