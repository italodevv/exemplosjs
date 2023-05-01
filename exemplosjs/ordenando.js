let swap = (a, b) => {
    [a, b] = [b, a];
    return console.log(a,b);
  }
  

  var adicionar = () => {
    var num = document.getElementById('valor').value;
    var lista = document.getElementById('lista');
  
    var novoItem = document.createElement('li');
    novoItem.textContent = num;
    lista.appendChild(novoItem);
  
    document.getElementById('valor').value = '';
  }
  
  var ordenar = () => {
    var lis = [...document.getElementsByTagName('li')];
    var todos = lis.map(li => Number(li.textContent));
    todos.sort((a, b) => a - b);
  
    var lista = document.getElementById('lista');
    lista.innerHTML = '';
  
    todos.forEach(num => {
      var novoItem = document.createElement('li');
      novoItem.textContent = num;
      lista.appendChild(novoItem);
    });
  }
  

  var misturar = () => {
    var lis = [...document.getElementsByTagName('li')];
    var todos = lis.map(li => Number(li.textContent));
    todos.sort(() => Math.random() - 0.5);
  
    var lista = document.getElementById('lista');
    lista.innerHTML = '';
  
    todos.forEach(num => {
      var novoItem = document.createElement('li');
      novoItem.textContent = num;
      lista.appendChild(novoItem);
    });
  }
  