export async function getUserDetails() {
  try {
    const response = await fetch("http://localhost:3000/getinfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}