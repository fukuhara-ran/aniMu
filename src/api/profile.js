export async function getUserDetails() {
  try {
    const response = await fetch("http://localhost:3000/getinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    //console.log(responseJson.data);
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateUser(account) {
  // console.log(JSON.stringify(account));
  try {
    const response = await fetch("http://localhost:3000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
      credentials: "include",
    });
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}