const SERVER_URL = "http://localhost:3001";

function getList() {
  return fetch(`${SERVER_URL}/List`)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      return data;
    });
}

function addList(TODOList) {
  return fetch(`${SERVER_URL}/List`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(TODOList)
  });
}

function editList (TODOListId, TODOList) {
  return fetch(`${SERVER_URL}/List/${TODOListId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...TODOList })
  });
}

function deleteList (TODOListId) {
  return fetch(`${SERVER_URL}/List/${TODOListId}`, {
    method: "DELETE"
  });
}

export { getList, addList, deleteList , editList };
