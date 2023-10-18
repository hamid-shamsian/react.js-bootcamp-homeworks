import config from "../../config.json" assert { type: "json" };

export default async function http(method, resource, body) {
  try {
    const res = await fetch(config.API_URL + resource, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined
    });
    if (res.status === 404) location.assign("notFound.html");
    if (!res.ok) throw new Error(`An expected error occured: (${res.status}) ${res.message}`); // for handling other expected errors...
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}
