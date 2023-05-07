async function getPosts() {
  const response = await fetch("/api/getPosts");
  if (!response.ok) {
    console.log(response);
  }
  return response.json();
}
export default async function Home() {
  const data = await getPosts();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="bg-slate-100 text-4xl text-black py-2 px-5 font-medium">
        My First Ap using NEXT.js, typescript, prisma and postgresSQL
      </h1>
    </main>
  );
}
