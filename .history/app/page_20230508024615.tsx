import FormData from "./Form";

export default async function Home() {
  const data: { id: number; title: string; content: string }[] =
    await getPosts();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormData />
      {data.map((post) => (
        <div key={post.id}>
          <h1 className="bg-slate-100 text-4xl text-black py-2 px-5 font-medium">
            Post: {post.title}
          </h1>
          <div className="bg-slate-100 text-2xl text-blue py-5 px-5 m-6 font-medium">
            Content: {post.content}
          </div>
        </div>
      ))}
    </main>
  );
}
