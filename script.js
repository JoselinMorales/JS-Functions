const btn = document.querySelector('button');

btn.onclick = function(){
 // displayMessage('Yahoo, a new message!!!!');
 displayMessage('Ricardo: Hola!','chat');

}


function displayMessage(msgText, msgType) { 

  const html = document.querySelector('html');

  const panel = document.createElement('div'); /*creando */
  panel.setAttribute('class', 'msgBox'); /* 1 atributo y 2 por el cual se cambia*/
  html.appendChild(panel); 
  
  const msg = document.createElement('p'); /* crear parrafo*/
  msg.textContent = msgText; /* string */ /*text content es como el h1 lo que dentro de */
  panel.appendChild(msg);
  
  const closeBtn = document.createElement('button'); 
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);


  closeBtn.onclick = function() { /* funcion anonima (no tiene nombre solo de damos click al bottom que estamos creando) */
    panel.parentNode.removeChild(panel);
  }

  if (msgType === 'warning') {
    msg.style.backgroundImage = 'url(images/warning.png)';
    panel.style.backgroundColor = 'red';

  } else if (msgType === 'chat') {
    msg.style.backgroundImage = 'url(images/chat.png)';
    panel.style.backgroundColor = 'aqua';

  } else {
    msg.style.paddingLeft = '20px';
  }

}
//displayMessage();//