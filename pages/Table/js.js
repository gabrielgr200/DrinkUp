function searchUser() {
    const nome = $("#search").val();
    $.get(`https://api-agua.onrender.com/registros/${nome}`, function (data) {
      const userTable = $("#userTable");
      userTable.find("tr:gt(0)").remove();
  
      data.forEach(function (user) {
        const newRow = `
          <tr>
            <td>${user.register_id || ""}</td>
            <td>${user.register_name || ""}</td>
            <td>${user.quantity || ""}</td>
            <td>${user.data_formatada || ""}</td>
          </tr>
        `;
        userTable.append(newRow);
      });
    });
  }
  