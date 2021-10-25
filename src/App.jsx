import { Home } from "./components/home";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Post } from "./components/post";
import { Posts } from "./components/posts";
import "./index.css";

//追加したコンポーネントをルーティング機能を使って表示させるためにはreact-router-domからBrowserRouter, Routeコンポーネントをimportします。
//クリックした際にページ全体をリロードするaタグとは異なりページ内の更新が必要な箇所のみ更新を行えるようにLinkコンポーネントを設定します。
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";

export const App = () => {
  //ログインしているかの判断（ここでは手動でやっている）
  const authenticated = true;
  return (
    <BrowserRouter>
      <div className="myPage">
        <div className="sideBar">
          <h2>タブ</h2>
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
        </div>
        {/* /aboutであればAboutコンポーネントのみ/contactであればContactコンポーネントのみ表示といったようにpathがURLに一致するコンポーネントのみ表示させるためにSwichコンポーネントを追加します。{" "} */}
        <div className="mainContents">
          <Switch>
            {/* exactを設定後に再度/aboutにアクセスするとAboutコンポーネントの中身のみ表示されることが確認できます */}
            {/* exactを設定することでpathに設定した値がURLに完全に一致した場合のみ対応するコンポーネントが表示されることになります。 */}
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
            {/* <Route exact path="/posts" component={Posts} /> */}
            {/* authenticatedがtrueの場合はPostsコンポーネントの内容が表示され、falseに設定した場合は/postsを含め、/posts/1,
        …
        /posts/3にアクセスしてもリダイレクトされHomeコンポーネントの内容が表示されます。 */}
            <Route path="/posts">
              {authenticated ? <Posts /> : <Redirect to="/" />}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

const NotFound = () => {
  return <h2>Not Found Page</h2>;
};
