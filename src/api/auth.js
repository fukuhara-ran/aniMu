export async function register(account) {
  // console.log(JSON.stringify(account));
  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function login(account) {
  // console.log(JSON.stringify(account));
  try {
    const response = await fetch("http://localhost:3000/login", {
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
export async function logout(account) {
  // console.log(JSON.stringify(account));
  try {
    const response = await fetch("http://localhost:3000/logout", {
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