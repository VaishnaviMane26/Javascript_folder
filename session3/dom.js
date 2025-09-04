
// dom.js — demo of selecting elements, listening to events, updating text/classes


box.classList.add('active');
box.classList.remove('hidden');
box.classList.toggle('dark');      // toggles on click
box.style.backgroundColor = 'tomato'; // inline style (use CSS classes when possible)

// 1) Select elements
const title = document.querySelector('#title');
const toggleThemeBtn = document.querySelector('#toggleTheme');
const nameInput = document.querySelector('#name');
const preview = document.querySelector('#preview');
const addForm = document.querySelector('#addForm');
const itemInput = document.querySelector('#itemText');
const list = document.querySelector('#list');

// 2) Update text on load
title.textContent = 'DOM & Events — Demo';

// 3) Button: toggle .dark class on <body>
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleThemeBtn.textContent = document.body.classList.contains('dark')
    ? 'Switch to Light'
    : 'Switch to Dark';
});

// 4) Live preview from input
nameInput.addEventListener('input', () => {
  preview.textContent = nameInput.value.trim() ? `Hello, ${nameInput.value}!` : 'Start typing...';
});

// 5) Add list items via form (prevent refresh)
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = itemInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.className = 'item flex';
  li.innerHTML = `
    <span class="text">${text}</span>
    <button class="remove" aria-label="remove item">✖</button>
  `;
  list.append(li);
  itemInput.value = '';
  itemInput.focus();
});

// 6) Event delegation for remove buttons
list.addEventListener('click', (e) => {
  if (e.target.matches('.remove')) {
    e.target.closest('li')?.remove();
  }
});
btn.addEventListener('click', (e) => {
  console.log('clicked', e.target);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();               // stop page refresh
  console.log('Form data:', new FormData(form));
});

input.addEventListener('input', () => {
  preview.textContent = input.value;
});
list.addEventListener('click', (e) => {
  if (e.target.matches('.remove')) {
    e.target.closest('li').remove();
  }
});
const li = document.createElement('li');
li.className = 'item';
li.textContent = 'New item';
list.appendChild(li);   // or: list.append(li)
li.remove();


// 7) Example of reading/updating attributes
const link = document.querySelector('#docsLink');
if (link) {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noreferrer noopener');
}
