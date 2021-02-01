
import './App.css';
import React, { useState, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [userPosts, setPost] = useState([]);
  var updatedValue = useRef();
  function post(e) {
    e.preventDefault();
    var new_post = userPosts.push({
      userpost: document.getElementById("userpost").value,
      username: document.getElementById("username").value,
      edit: false,
    })
    setPost([...userPosts], new_post)
    document.getElementById("username").value = " "
    document.getElementById("userpost").value = " "
  }
  function deleteItem(index) {
    var old_posts = [...userPosts];
    old_posts.splice(index, 1);
    setPost(old_posts);
  }
  function updateValue(index) {
    console.log("updated value is = > ", updatedValue);
    var old_post = [...userPosts];
    old_post[index].userpost = updatedValue.current.value;
    old_post[index].edit = false;
    setPost(old_post);
  }

  function editValue(index) {
    var editPost = [...userPosts];
    editPost[index].edit = true;
    setPost(editPost);
  }

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={(e) => post(e)}>
          <div className="inputFields">
            <input
              placeholder="Enter your name"
              id="username"
            >
            </input>

            <br />

            <input
              id="userpost"
              placeholder="Enter post"
            // onChange={(e) => e.target.value = post}
            >
            </input>
            <br />
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
        </form>
      </div>
      {
        userPosts.map((value, index) => {
          return (
            <div className="mediaCard" key={index}>
              <div className="container">
                <div className="cardContent">

                  <small className="timeStamp">6h</small>
                  <img
                    src={"https://c.files.bbci.co.uk/13605/production/_111256397_060306797-1.jpg"}
                    className="avatar" />
                  <h4 className="nameElement">
                    {value.username[0].toUpperCase() + value.username.slice(1)}
                  </h4>
                  <p
                    className="postText"
                  >{value.userpost}</p>
                  <img
                    className="postImage"
                    src={"data:image/png;base64,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"} name={"Azhar"} src={"https://c.files.bbci.co.uk/13605/production/_111256397_060306797-1.jpg"}
                    alt="" />

                  <img className="postImage" />
                  <button
                    className="btn btn-primary"
                    onClick={(e) => deleteItem(index)}
                  >Delete Post</button>
                  {value.edit === true ? <input className="mt-2" placeholder="enter value to update" ref={updatedValue}  ></input> : ""}
                  {value.edit === true ? <button className="mt-2" onClick={(e) => updateValue(index)}>Update value</button> : ""}
                  {
                    value.edit === false

                      ? <button
                        className="mt-2"
                        onClick={(e) => editValue(index)}
                      >Edit value</button>
                      :
                      ""
                  }

                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
//  function App({src , name , postSrc}) {
//     return (
//       <div className="mediaCard">
//       <div className="cardContent">
//       <small className="timeStamp">6h</small>
//         <img
//           src={src}
//           className="avatar" />
//         <h4 className="nameElement">
//           {name}
//         </h4>
//         <p
//         className="postText"
//         >Hahaha</p>
//         <img
//         className="postImage"
//          src={postSrc} 
//          alt="" />

//         <img className="postImage" />
//       </div>
//     </div>
//     );
//   }
















// function App({src , name , postSrc}) {
//   return (
//     <div className="App">
//      <div className="mediaCard">
//        <div className="cardContent">
//      <img src={src} className="avatar" />
//      <h4 className="nameElement">
//     {name}
//      </h4>
//      <small className="timeStamp">6h</small>
//      <img className="postImage" src={postSrc} />
//      </div>
//      </div>
//     </div>
//   );
// }

export default App;
