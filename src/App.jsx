
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
            />

            <br />

            <input
              id="userpost"
              placeholder="Enter post"
            // onChange={(e) => e.target.value = post}
            />
      
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
                    src={"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"}
                    className="avatar" />
                  <h4 className="nameElement">
                    {value.username[0].toUpperCase() + value.username.slice(1)}
                  </h4>
                  <p
                    className="postText"
                  >{value.userpost}</p>
                  <img
                    className="postImage"
                    src={"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f1f37a40a5db2c8275972c0%2F0x0.jpg"}
                    alt="" />

                  <img className="postImage" />
                  <button
                    className="btn btn-primary"
                    onClick={(e)=> deleteItem(index)}
                  >Delete Post</button>
                  {value.edit === true ? <input className="mt-2" placeholder="enter value to update" ref={updatedValue} /> : ""}
                  {value.edit === true ? <button className="mt-2" onClick={(e) => updateValue(index)}>Update value</button> : ""}
                  {
                    value.edit === false
                      ? 
                      <button
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
