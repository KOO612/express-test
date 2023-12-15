const id = document.querySelector('#id'),
  pass = document.querySelector('#pass'),
  loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', login);

function login() {
  const req = {
    id: id.value,
    pass: pass.value,
  };

  console.log(req);
}
