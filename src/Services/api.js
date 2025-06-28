export async function request(url, method, data) {
  const token = localStorage.getItem("token"); // or sessionStorage, or another source

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // add header if token exists
    },
  };

  if (method !== "GET" && data) {
    options.body = JSON.stringify(data);
  }

  if (method === "GET" && data) {
    const params = new URLSearchParams(data).toString();
    url += `?${params}`;
  }

  const res = await fetch("http://localhost:8000/api/" + url, options);


  return res;
}
