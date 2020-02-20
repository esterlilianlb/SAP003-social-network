import Button from '../components/button.js';
import Input from '../components/input.js';

function buttonLogin() {
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;
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
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
    window.location.hash = '#feed';
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
    <form>
    ${Input({
    id: 'emailLogin', class: 'email', placeholder: 'Email', type: 'email', name: 'email',
  })}
    ${Input({
    id: 'passwordLogin', class: 'password', placeholder: 'Senha', type: 'password', name: 'password',
  })}
    ${Button({
    class: 'login', title: 'Entrar', id: 'button', onClick: buttonLogin,
  })}
  </form>
    <p>Ou entre com o ${Button({ class: 'google', onClick: googleLogin, title: '<img src= ./images/icon.png width="30">' })}</p>

    <p>Não tem conta? <a href='#register'>Registre-se</a>
    </main>
    
  `;

  return template;
}

export default Home;
