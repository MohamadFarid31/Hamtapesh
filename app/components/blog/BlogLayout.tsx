export default function BlogLayout({ blog }: { blog: any }) {
  return (
    <div className="container mx-auto py-10 prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
