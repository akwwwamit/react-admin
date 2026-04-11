export const getToken = () => {
  const token = localStorage.getItem("userInfo");
  return token ? JSON.parse(token) : null;
};

export const refreshToken = () => {
  const totken = getToken();
  fetch("https://dummyjson.com/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      refreshToken: totken.refreshToken, 
      expiresInMins: 30,
    })
  })
    .then((res) => res.json())
    .then((data) =>{
        let newToken = {...totken, accessToken: data.accessToken, refreshToken: data.refreshToken};
        localStorage.setItem("userInfo", JSON.stringify(newToken));
    });
};
