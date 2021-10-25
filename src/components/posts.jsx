import {
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
  NavLink,
} from "react-router-dom";
import { Postsdate } from "./postsdate";
import { Post } from "./post";
import "./../index.css";

// export const Posts = (props) => {
//   return (
//     <>
//       <h2>Post List</h2>
//       <ul>
//         {Postsdate.map((post) => (
//           <li key={post.id}>
//             <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

//userParamsで先ほどはpropsを利用せずidを取得することができましたが、useRouteMatchフックを利用するとアクセスしているURLの情報を取得することができます。取得した値を利用してRouteコンポーネントの設定に利用することも可能です。
export const Posts = () => {
  console.log("useRouteMatch:");
  console.log(useRouteMatch());
  console.log("useLocation:");
  console.log(useLocation());
  console.log("useHistroy:");
  console.log(useHistory());
  const { path, url } = useRouteMatch();
  return (
    <div className="main-Contents">
      <h2>メインコンテンツ</h2>
      <ul>
        {Postsdate.map((post) => (
          <li key={post.id}>
            <NavLink to={`${url}/${post.id}?sort=asc`}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:id`}>
        <Post />
      </Route>
    </div>
  );
};
