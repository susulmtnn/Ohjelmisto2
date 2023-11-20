/*
Open t1 folder in your IDE/editor. Add HTML by using innerHTML property (2p)
Add the following HTML code to the element with id="target"
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
 */

const selectedList = document.querySelector("#target");

const createdElement = document.createElement('li');

createdElement.textContent = "First item";

const createdElement2 = document.createElement('li');

createdElement2.textContent = "Second item";

const createdElement3 = document.createElement('li');

createdElement3.textContent = "Third item";

selectedList.appendChild(createdElement);

selectedList.appendChild(createdElement2);

selectedList.appendChild(createdElement3);

