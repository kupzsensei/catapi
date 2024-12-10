const catapi = "https://api.thecatapi.com/v1/images/search?limit=20";

export const getCatAPI = async () => {
  const response = await fetch(catapi, {
    method: "GET",
  });

  const res = await response.json();

  return res;
};

export const postCatAPI = async (data) => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const res = await response.json();

  return res;
};
