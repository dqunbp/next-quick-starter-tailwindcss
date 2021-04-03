import axios from "axios";

export interface HelloResponse {
  name: string;
}

export async function getHello() {
  const { data } = await axios.get<HelloResponse>("/api/hello");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
}
