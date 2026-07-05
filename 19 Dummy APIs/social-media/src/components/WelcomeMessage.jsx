const WelcomeMessage = ({onGetPostsClick}) =>{
  return <center className="welcome-message">
    <h1 >There are no post</h1>
    <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Fetch Post From server</button>
  </center>
}
export default WelcomeMessage;