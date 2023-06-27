export async function comment(params){
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/discussion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    credentials: "include",
  });
}

export async function reply(params){
    return fetch(`${import.meta.env.VITE_BACKEND_URL}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
        credentials: "include",
      });
}
