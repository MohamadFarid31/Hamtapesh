import { getBlogs } from "@/app/lib/api";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">مقالات</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((item: any) => (
          <a key={item.slug} href={`/blogs/${item.slug}`}>
            <div className="p-5 border rounded-lg hover:shadow">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
