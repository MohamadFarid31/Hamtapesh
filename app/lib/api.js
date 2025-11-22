export async function getBlogs() {
  const res = await fetch("https://yourserver.com/api/blog", {
    cache: "no-store",
  });
  return res.json();
}

export async function getBlog(slug) {
  const res = await fetch(`https://yourserver.com/api/blog/${slug}`, {
    cache: "no-store",
  });
  return res.json();
}
