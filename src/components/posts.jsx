import { NavLink } from "react-router-dom";

export const Posts = (props) => {
  const posts = [
    { id: 1, title: "React", content: "React Tutorial" },
    { id: 2, title: "Vue", content: "Vue.js Tutorial" },
    { id: 3, title: "Laravel", content: "Laravel Tutorail" },
  ];
  return (
    <>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
