import { Home } from "./components/home";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Post } from "./components/post";
import { Posts } from "./components/posts";
import "./index.css";

//追加したコンポーネントをルーティング機能を使って表示させるためにはreact-router-domからBrowserRouter, Routeコンポーネントをimportします。
//クリックした際にページ全体をリロードするaタグとは異なりページ内の更新が必要な箇所のみ更新を行えるようにLinkコンポーネントを設定します。
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

export const App = () => {
  const posts = [
    { id: 1, title: "React", content: "React Tutorial" },
    { id: 2, title: "Vue", content: "Vue.js Tutorial" },
    { id: 3, title: "Laravel", content: "Laravel Tutorail" },
  ];
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/posts">
            Posts
          </NavLink>
        </li>
      </ul>
      {/* /aboutであればAboutコンポーネントのみ/contactであればContactコンポーネントのみ表示といったようにpathがURLに一致するコンポーネントのみ表示させるためにSwichコンポーネントを追加します。{" "} */}
      <Switch>
        {/* exactを設定後に再度/aboutにアクセスするとAboutコンポーネントの中身のみ表示されることが確認できます */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {/* Postsコンポーネントにはルーティングに関する情報をpropsを通して取得することができるのですがこれまでの上記の記述方法ではpropsが取得できないので以下のようにcomponent
        propsにコンポーネントを指定します */}
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const NotFound = () => {
  return <h2>Not Found Page</h2>;
};
