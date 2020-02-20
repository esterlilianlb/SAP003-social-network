import Button from '../components/button.js';
import Input from '../components/input.js';

function buttonRegister() {
  const email = document.getElementById('emailReg').value;
  const password = document.getElementById('passwordReg').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      window.location.hash = '#feed';
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
}

function Register() {
  const template = `
    <header>
      <img src='../images/shewolf.png'>
      <h1>Alcatéia</h1>
      <h3>Bem-vinda!</h3>
    </header>
    <main class='register'>
    <form>
    ${Input({
    id: 'nameReg', placeholder: 'Nome', type: 'text', name: 'name',
  })}
    ${Input({
    id: 'emailReg', placeholder: 'Email', type: 'email', name: 'email',
  })}
    ${Input({
    id: 'passwordReg', placeholder: 'Senha', type: 'password', name: 'password',
  })}
    ${Button({
    class: 'register', title: 'Registrar', id: 'button', onClick: buttonRegister,
  })}
    </form>
    <a href='#home'>Voltar</a>
    </main>
  `;

  return template;
}
export default Register;
