// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response));
      
      function myFunction() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      }
