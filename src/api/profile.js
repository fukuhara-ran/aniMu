export async function getUserDetails() {
  try {
    const response = await fetch("http://localhost:3000/getinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateUserInfo(account) {
  try {
    const response = await fetch("http://localhost:3000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
      credentials: "include",
    });
    // console.log(response);
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}