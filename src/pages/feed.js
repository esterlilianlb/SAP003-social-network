import Input from '../components/input.js';
import Button from '../components/button.js';

function formSubmit() {
  const text = document.querySelector('.postText').value;
  const id = firebase.auth().currentUser.uid;
  const post = {
    text,
    user: id,
    likes: 0,
    comments: [],
  };
  firebase.firestore().collection('posts').add(post)
    .then((docRef) => {
      const printPost = document.querySelector('.postdiv');
      const template = `
      <div class='postCard'>
      <div class'postLikes' id='gostei${postId}'>${id}    <p class='likes'>Likes:${post.data().likes}</p></div>
      <div class='buttons'>
      ${window.button.component({dataId: postId,  class: 'like', title:'❤️', onClick: likePost})}
      ${window.button.component({dataId: postId, class: 'delete', title:'🗑️', onClick: deleteButton})}
      </div>
      <p class='text'>    
      ${post.data().text}  
      </p>
      
    </div>
        `;
      printPost.innerHTML += template;
    });
  text.value = '';
}


function Timeline() {
  const template = `
    <header class='feed'>
        <h1>Alcateia</h1>
    </header>
    <div class='user'>
        <div class='photo'></div>
        <p>Fulana da Silva</p>
    </div>
    <section class='align'>
        <form class='post'>
            ${Input({ class: 'postText', placeholder: 'O que você está pensando?', type: 'textarea' })}
            ${Button({
    class: 'sendPost', title: 'Postar', id: 'button', onClick: formSubmit,
  })}
        </form>
    </section>
    `;


  return template;
}
export default Timeline;
