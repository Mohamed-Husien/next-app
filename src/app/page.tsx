export const revalidate = 5;

export default function Home() {
  console.log("Home page rendered at", new Date().toISOString());

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        Welcome to My Store App
      </h1>
    </div>
  );
}
