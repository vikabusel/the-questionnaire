const form = document.querySelector(".form");
const sendButton = document.querySelector(`#button`);
const userName = document.querySelector(`#name`);
const secondName = document.querySelector(`#secondName`);
const phone = document.querySelector(`#phone`);
const email = document.querySelector(`#email`);
const agree = document.querySelector(`#agree`);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  sendButton.addEventListener('click', () => {
    fetch(`https://polinashneider.space/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: vikabusel'
      },
      body: JSON.stringify({
        "name": userName.value,
        "secondName": secondName.value,
        "phone": phone.value,
        "email": email.value,
        "agree": agree.checked,
      }),
    })

    .then((result) => {
        return result.json();
    })

    .then((data) => {
        console.log(data);
        form.reset();
        alert('Регистрация прошла успешно!');
    })

    .catch((err) => {
        console.log(err);
        alert('Ошибка!');
    })
  })
});
