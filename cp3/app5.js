let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// nodeType
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
// list.children[1].textContent = 'Hello';
// Children of children
// val = list.children[3].children;
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next siblin
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev siblin
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);