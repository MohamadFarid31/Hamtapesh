import { getBlog } from "@/app/lib/api";
import BlogLayout from "@/app/components/blog/BlogLayout";

export const dynamic = "force-dynamic";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) return <div>یافت نشد</div>;

  return <BlogLayout blog={blog} />;
}
