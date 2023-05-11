import FormData from "./Form";
async function getPosts() {
  const response = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!response.ok) {
    console.log(response);
  }
  return response.json();
}
export default async function Home() {
  const data: { id: number; title: string; content: string }[] =
    await getPosts();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormData />
      <div className="">
        <h1 className="bg-slate-100 text-4xl text-black py-2 px-5 font-medium">
          {data.map((post) => (
            <div key={post.id}>{post.title}</div>
            <div className="bg-slate-100 text-2xl text-black py-2 px-5 font-medium">
         
        </div>
          ))}
        </h1>
        
      </div>
    </main>
  );
}
