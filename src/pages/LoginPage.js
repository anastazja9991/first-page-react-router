import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label>
                Podaj login:   <input type="text" />
            </label><br />

            <label>
                Podaj hasło:   <input type="password" />
            </label>

            <button>Zaloguj</button>
        </div>
    );
}

export default LoginPage;