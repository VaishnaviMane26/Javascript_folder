# DOM & Events

## 1) Selecting Elements
By ID: `const title = document.getElementById('title');`
By class: `const items = document.getElementsByClassName('item');` (HTMLCollection)
CSS selector (single): `const btn = document.querySelector('.btn');`
CSS selector (all): `const listItems = document.querySelectorAll('li.item');` (NodeList)



## 2) Reading & Updating Content/Attributes
```js
title.textContent = 'New Title';          
title.innerHTML = '<em>New</em> Title';   
title.setAttribute('data-id', '42');
input.value = 'hello';
link.href = 'https://example.com';