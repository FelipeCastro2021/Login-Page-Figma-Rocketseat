import Envelope from './assets/Envelope.svg';
import CloseLock from './assets/LockSimple.svg';
import Lock from './assets/LockSimpleOpen.svg';

import global from './Global.module.css';
import styles from './App.module.css';

export default function App() {
  function handlePasswordShow(event) {
    const inputPsw = document.querySelector('input[name="password"]');
    const passwordIcon = event.currentTarget;

    event.preventDefault();

    handleTogglePasswordIcon(passwordIcon);

    handleTogglePasswordType(inputPsw);
  }

  function handleTogglePasswordIcon(passwordIcon) {
    const passwordAttribute = passwordIcon.getAttribute('src');

    passwordIcon.setAttribute(
      'src',
      passwordAttribute === Lock ? CloseLock : Lock
    );
  }

  function handleTogglePasswordType(inputPsw) {
    const passwordType = inputPsw.getAttribute('type');
    inputPsw.setAttribute(
      'type',
      passwordType == 'password' ? 'text' : 'password'
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Entrar</h1>

      <form>
        <div>
          <label htmlFor="email">E-mail address</label>
          <div className={styles.input}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="xxxx@xxx.xxx"
            />
            <img src={Envelope} alt="" />
          </div>
        </div>

        <div>
          <label htmlFor="psw">Your secret password</label>
          <div className={styles.input}>
            <input
              type="password"
              name="password"
              id="psw"
              placeholder="1234567890"
            />
            <img
              src={CloseLock}
              alt=""
              className="icon"
              onClick={handlePasswordShow}
            />
          </div>
        </div>

        <button>
          Fazer login <i>→</i>
        </button>
      </form>
    </div>
  );
}
