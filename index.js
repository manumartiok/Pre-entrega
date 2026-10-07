const [, , method, route, ...args] = process.argv;

const [resource, id] = route.split("/");

const base_url = "https://dummyjson.com/";

const request = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};

if (method === "GET") {
  if (id) {
    const data = await request(`${base_url}${resource}/${id}`);
    console.log(data);
  } else {
    const data = await request(`${base_url}/${resource}`);
    console.log(data);
  }
} else if (method === "POST") {
  const [title, description] = args;
  if (!title || !description) {
    console.log("Indique el título y la descripción del item a crear");
  }
  const data = await request(`${base_url}${resource}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });
  console.log(data);
} else if (method === "DELETE") {
  if (!id) {
    console.log("Indique el ID del item a eliminar");
  }
  const data = await request(`${base_url}${resource}/${id}`, {
    method: "DELETE",
  });
  console.log(data);
} else {
  console.log("Método no encontrado");
}
