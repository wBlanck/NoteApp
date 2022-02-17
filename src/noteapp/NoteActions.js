export const addNote = async (note) => {
  console.log("add");
  const response = await fetch("http://localhost:3000/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  const data = await response.json();

  return data;

  /* dispatch({
    type: "ADD_NOTE",
    payload: data,
  }); */
};
