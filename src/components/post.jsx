import {
  useRouteMatch,
  useLocation,
  useHistory,
  useParams,
} from "react-router-dom";
import { Postsdate } from "./postsdate";

export const Post = (props) => {
  //検索やソートのようにURLのパラメータを利用したい場合はuseLocationのsearchプロパティを利用できることがわかります。
  console.log("useRouteMatch2:");
  console.log(useRouteMatch());
  console.log("useLocation2:");
  console.log(useLocation());
  console.log("useHistroy2:");
  console.log(useHistory());
  const query = new URLSearchParams(useLocation().search);
  console.log(query.get("sort"));
  //app.jsxの <Route path="/posts/:id" component={Post} />からpropsとして送られてくる
  // Postコンポーネントの追加を行いますが:idの値はpropsのmatch.params.idから取得することができます。
  // const id = Number(props.match.params.id);
  //propsを利用してidの値を取得していましたがpropsを取得しなくてもuseParamsフックを使ってidを取得することが可能です。useParamsを利用するためにはreact-router-domからimportする必要があります。
  const { id } = useParams();
  const post = Postsdate.find((post) => post.id === Number(id));
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};
