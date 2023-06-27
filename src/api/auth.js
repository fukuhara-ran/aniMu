export async function Register(params){
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    credentials: "include",
  });
}

export async function Login(params){
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    credentials: "include",
  });
}

export async function Logout(){
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}