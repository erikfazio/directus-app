import { createDirectus, rest, readItem, readItems } from "@directus/sdk";

const API_URL = "https://erikfazio.directus.app";

export const client = createDirectus(API_URL).with(rest());

export async function getPosts() {
  return await client.request(readItems("posts"));
}

export async function getTestimonials() {
  return await client.request(readItems("testimonials"));
}

export async function getTestimonialsById(id: string) {
  return await client.request(readItem("testimonials", id));
}

export async function getPostById(id: string) {
  return await client.request(readItem("posts", id));
}

export async function getIntro() {
  return await client.request(readItem("intro", 1));
}

export async function getHeroImages() {
  const images = await client.request(readItems("hero_images"));
  return images.map((image) => ({
    ...image,
    link: `https://erikfazio.directus.app/assets/${image.link}`,
  }));
}
