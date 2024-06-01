const getUser = async (token:string) => {
    //make post req
  
    const user = await fetch("http://localhost:3000/api/me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
      next: {
        revalidate: 100,
        tags: ["user"],
      },
    });
    const res = await user.json();
    return res;
  };

  export {
    getUser
  }