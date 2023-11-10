import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BlogArticleList } from "./blogArticle/BlogArticleList";
import { BlogArticleCreate } from "./blogArticle/BlogArticleCreate";
import { BlogArticleEdit } from "./blogArticle/BlogArticleEdit";
import { BlogArticleShow } from "./blogArticle/BlogArticleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Auth "}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BlogArticle"
          list={BlogArticleList}
          edit={BlogArticleEdit}
          create={BlogArticleCreate}
          show={BlogArticleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
