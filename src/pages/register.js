import Button from '../components/button.js';
import Input from '../components/input.js';

function Register() {
  const template = `
    <header>
      <img src='../images/shewolf.png'>
      <h1>Alcatéia</h1>
      <h3>Bem-vinda!</h3>
    </header>
    <main class='register'>
    ${Input({
    class: 'name', placeholder: 'Nome', type: 'text', name: 'name',
  })}
    ${Input({
    class: 'email', placeholder: 'Email', type: 'email', name: 'email',
  })}
    ${Input({
    class: 'password', placeholder: 'Senha', type: 'password', name: 'password',
  })}
    ${Button({
    class: 'register', title: 'Registrar', id: 'button',
  })}
    <a href='#home'>Voltar</a>
    </main>
  `;

  return template;
}
export default Register;
