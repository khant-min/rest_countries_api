import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <DataProvider>
        <Header />
        <Main />
      </DataProvider>
    </div>
  );
};

export default App;

///       https://restcountriesapi2022.netlify.app/
