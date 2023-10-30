fetch('https://52.72.243.224:7000/registros/register')
  .then(response => response.json())
  .then(data => {
    const idInput = document.getElementById('id');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');

    if (data.length > 0) {
      idInput.value = data[0].id || '';
      nameInput.value = data[0].name || '';
      passwordInput.value = data[0].password || '';
    } else {
      idInput.value = '';
      nameInput.value = '';
      passwordInput.value = '';
    }
  })
  .catch(error => console.error('Erro ao buscar registros:', error));
