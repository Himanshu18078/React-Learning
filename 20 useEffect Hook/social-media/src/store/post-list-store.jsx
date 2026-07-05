import { createContext, useReducer } from "react";

export const PostList = createContext({
  // The Following are the default values
  postList: [],
  addPost: () => { },
  deletePost: () => { },
  addInitialPost : () => { },
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList
  if (action.type === 'DELETE_POST') {
    newPostList = currentPostList.filter(post => post.id !== action.payLoad.postId)
  }
  else if(action.type === 'ADD_POST'){
    newPostList = [action.payLoad , ...currentPostList];
  }
  else if(action.type === 'ADD_INITIAL_POST'){
    newPostList = action.payLoad.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payLoad: {
        id: Date.now(),
        title: postTitle,
        body: postBody ,
        reactions: reaction,
        userId: userId,
        tags: tags,
      },
    })
  };
  const addInitialPost = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POST',
      payLoad: {
        posts
      },
    })
  };

  const deletePost = (postId) => {
    dispatchPostList(
      {
        type: 'DELETE_POST',
        payLoad: {
          postId
        }
      })
  };
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPost :addInitialPost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;