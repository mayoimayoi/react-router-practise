export const Post = (props) => {
  const posts = [
    { id: 1, title: "React", content: "React Tutorial" },
    { id: 2, title: "Vue", content: "Vue.js Tutorial" },
    { id: 3, title: "Laravel", content: "Laravel Tutorail" },
  ];

  // Postコンポーネントの追加を行いますが:idの値はpropsのmatch.params.idから取得することができます。
  const id = Number(props.match.params.id);
  const post = posts.find((post) => post.id === id);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};
