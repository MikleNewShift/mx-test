function getData() {
  fetch("https://my-json-server.typicode.com/MikleNewShift/mx-test/db/0")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

getData();
