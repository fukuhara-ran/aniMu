export async function comment(discussion) {
  // console.log(JSON.stringify(account));
  try {
    const response = await fetch("http://localhost:3000/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discussion),
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function reply(discussion) {
  // console.log(JSON.stringify(account));
  try {
    const response = await fetch("http://localhost:3000/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discussion),
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getComment() {
  const response = await fetch("http://localhost:3000/komen");
  return await response.json();
}

export async function getCommentById(commentId) {
  // console.log(JSON.stringify(id));
  try {
    const response = await fetch('http://localhost:3000/comment/id/:commentId', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentId),
      credentials: "include",
    });
    console.log(JSON.stringify(response))
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}