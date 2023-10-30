fetch('http://52.72.243.224:7000/registros/register')
  .then(response => response.json())
  .then(data => {
    const idInput = document.getElementById('id');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');

    if (data.length > 0) {
      // Preencha os campos de input com os dados do primeiro registro (ou outro registro, se necessário).
      idInput.value = data[0].id || '';
      nameInput.value = data[0].name || '';
      passwordInput.value = data[0].password || '';
    } else {
      // Se não houver dados, defina os campos de input como vazios.
      idInput.value = '';
      nameInput.value = '';
      passwordInput.value = '';
    }
  })
  .catch(error => console.error('Erro ao buscar registros:', error));
