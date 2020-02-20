import Input from '../components/input.js';
import Button from '../components/button.js';

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.hash = '#home';
  }, (error) => {
    console.error('Sign Out Error', error);
  });
}

function loadPosts() {
  const postList = document.getElementById('postdiv');
  firebase.firestore().collection('posts')
    .onSnapshot((snap) => {
      snap.forEach((post) => {
        const posts = post.data().text;
        postList.innerHTML = posts;
      });
    });
}
loadPosts();


function formSubmit() {
  const text = document.querySelector('.postText');
  const id = firebase.auth().currentUser.uid;
  const db = firebase.firestore();
  const post = {
    text: text.value,
    date: new Date(),
    user: id,
    likes: 0,
  };
  db.collection('posts').add(post)
    .then(() => {
      text.value = '';
    });
}


function Timeline() {
  const template = `
    <header class='feed'>
        <h1>Alcateia</h1>
        ${Button({
    class: 'logout', title: 'Sair', onClick: logout,
  })}
    </header>
    <div class='user'>
        <div class='photo'></div>
        <p>Fulana da Silva</p>
    </div>
    <section class='align'>
        <form class='post'>
            ${Input({ id: 'postText', class: 'postText', placeholder: 'O que você está pensando?', type: 'text' })}
            ${Button({
    class: 'sendPost', title: 'Postar', id: 'button', onClick: formSubmit,
  })}
        </form>
    </section>
    <div id='postdiv'></div>
    `;


  return template;
}
export default Timeline;
