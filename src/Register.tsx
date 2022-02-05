import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => (
  <div className={'form__wrapper'}>
    <form>
      <div>
        <label>
          Логин: <input type="text" />
        </label>
      </div>

      <div>
        <label>
          Пароль: <input type="text" />
        </label>
      </div>
      <div>
        <button>Регистрация</button>
      </div>
      <Link to={'/register'}>Уже есть аккаунт?</Link>
    </form>
  </div>
);
