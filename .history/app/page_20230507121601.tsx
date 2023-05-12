async function getPost() {
  const response = await fetch("/api/post");
  if (!response.ok) {
    console.log(response);
  }
  const data = await response.json();
  console.log(data);
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="bg-slate-100 text-4xl text-black py-2 px-5 font-medium">
        My First Ap using NEXT.js, typescript, prisma and postgresSQL
      </h1>
    </main>
  );
}