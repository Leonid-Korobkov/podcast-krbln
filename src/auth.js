export function getAuthForm() {
  return `
    <form class="mui-form" id="form-auth">
      <div class="mui-textfield mui-textfield--float-label">
        <input id="email" type="email" required>
        <label for="email">E-mail</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input id="password" type="password" required>
        <label for="password">Пароль</label>
      </div>
      <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Войти</button>
    </form>
  `
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyBCkHiefc278JrmlOjsq058leShlULN0Sc'
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({ email, password, returnSecureToken: true }),
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json()).then(data => data.idToken)
}
