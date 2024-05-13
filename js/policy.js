const cookie = document.getElementById('agreecookie');
const policy = document.getElementById('policy');

cookie.addEventListener('click', (e) => {
  e.preventDefault();
  policy.classList.add('hidden');
});

