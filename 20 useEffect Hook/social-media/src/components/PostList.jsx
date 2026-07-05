import { useContext, useEffect} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from  "./WelcomeMessage";
const PostList = () =>{
  const {postList,addInitialPost} = useContext(PostListData); // see line number 3
  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
    addInitialPost(data.posts);
    });
  },[]);
  return <>
  {postList.length == 0 && <WelcomeMessage></WelcomeMessage>}
  {postList.map((post) => <Post key = {post.id} post = {post}></Post>)}
  </>
}
export default PostList;