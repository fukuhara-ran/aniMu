export const profile = () => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

export const updateProfile = (params) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    credentials: "include",
  });
};
