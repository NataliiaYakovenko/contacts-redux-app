import { connect } from "react-redux";
import { useEffect } from "react";
import { getPostThunc } from "../../store/slices/postsSlice";

function PostsList({ posts, isFetching, error,getPosts }) {

  useEffect(()=>{
    getPosts()
  },[])

  const mapPosts = p => (
  <li key={p.id}>
    <h3>{p.title}</h3>
    <p>{p.body}</p>
  </li>
);


return (
  <>
    {isFetching && <div>Loading...</div>}
    {error && <div>!!!ERROR!!!</div>}
    {!isFetching && !error && <ul>{posts.map(mapPosts)}</ul>}
  </>
);
}

const mapStateToProps = (state) => state.postsSlice;

const mapDispatchToProps= dispatch=>({
  getPosts:()=>dispatch(getPostThunc())
})

export default connect(mapStateToProps,mapDispatchToProps)(PostsList);
