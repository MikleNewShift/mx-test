"use strict";

async function showData() {
  let data;

  await fetch(
    "https://my-json-server.typicode.com/MikleNewShift/mx-test/questions"
  )
    .then((response) => response.json())
    .then((json) => {
      data = json;
    });

  console.log(data);

  const questions = data;

  const container = document.querySelector(".container");

  questions.map((question) => {
    container.innerHTML += `<h1>${question.title}</h1>`;
    question.answers.map((answer) => {
      container.innerHTML += `<p>${answer.name}</p>`;
    });
  });
}

showData();
