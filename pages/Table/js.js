function searchUser() {
    const nome = $("#search").val();
    $.get(`http://52.72.243.224:7000/registros/${nome}`, function (data) {
      const userTable = $("#userTable");
      userTable.find("tr:gt(0)").remove();
  
      data.forEach(function (user) {
        const newRow = `
          <tr>
            <td>${user.register_id || ""}</td>
            <td>${user.register_name || ""}</td>
            <td>${user.quantity || ""}</td>
            <td>${user.data_formatada || ""}</td>
            <td>${user.id_de_registro || ""}</td>
          </tr>
        `;
        userTable.append(newRow);
      });
    });
  }
  