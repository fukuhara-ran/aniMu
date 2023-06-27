export async function profile () {
  return fetch("http://localhost:3000/getinfo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}

export async function updateProfile (params) {
  return fetch("http://localhost:3000/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    credentials: "include",
  });
}
