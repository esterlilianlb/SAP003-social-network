import Button from '../components/button.js';
import Input from '../components/input.js';

function buttonLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((firebaseUser) => {
      window.location.hash = '#feed';
    })
    .catch((error) => {
      let errorCode = error.code;
      if (errorCode === 'auth/user-not-found') {
        throw alert('Usuário não encontrado');
      } else if (errorCode === 'auth/invalid-email') {
        throw alert('E-mail inválido');
      } else if (errorCode === 'auth/wrong-password') {
        throw alert('Senha incorreta');
      }
    });
}

function googleLogin() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
    window.location.hash = '#feed';
  }).catch((error) => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
}

function Home() {
  const template = `
    <header>
      <img src='../images/shewolf.png'>
      <h1>Alcatéia</h1>
      <h3>Bem-vinda!</h3>
    </header>
    <main class='home'>
    ${Input({
    class: 'email', placeholder: 'Email', type: 'email', name: 'email',
  })}
    ${Input({
    class: 'password', placeholder: 'Senha', type: 'password', name: 'password',
  })}
    ${Button({
    class: 'login', title: 'Entrar', id: 'button', onClick: buttonLogin,
  })}
    <p>Ou entre com o <button class='google' onClick=${googleLogin}><img src= ./images/icon.png width="30"></button></p>

    <p>Não tem conta? <a href='#register'>Registre-se</a>
    </main>
    
  `;

  return template;
}

export default Home;
