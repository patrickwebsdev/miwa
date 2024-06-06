import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPreviewPostBySlug } from "../../../lib/api";
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  const post = await getPreviewPostBySlug(slug);

  if (!post) {
    return new Response("Invalid slug", { status: 401 });
  }
  redirect(`/trabajos/${post.slug}`);
}
