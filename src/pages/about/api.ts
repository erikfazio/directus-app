import { client } from "../../api";
import { readItems } from "@directus/sdk";

export async function getAboutPage() {
  const aboutPage = await client.request(readItems("about_page"));

  return {
    ...aboutPage,
    image: `https://erikfazio.directus.app/assets/${aboutPage?.image}`,
  };
}
