import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16">
        <Image
          src="/logo.png"
          alt="Yuba City Fire Department Logo"
          width={300}
          height={300}
          priority
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Under Construction
        </h1>
        <p className="text-xl text-gray-300 text-center">Coming Soon</p>
      </main>
    </div>
  );
}
