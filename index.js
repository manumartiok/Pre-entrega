const [, , method, route, ...args] = process.argv;

const [resource, id] = route.split("/");

const base_url = "https://dummyjson.com/";

const request = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

if (method === "GET") {
  if (id) {
    fetch(`${base_url}${resource}/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  } else {
    fetch(`${base_url}${resource}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
}
