import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <nav className="flex min-h-[15%]">
      </nav>
      <main className="flex min-h-[75%] flex-col items-center justify-between p-24 gap-3">
        <h1 className="text-9xl text-white">BETA ACCESS</h1> {}
        <div className="flex justify-start">
        <Link href="/register" className="bg-slate-700 w-40 h-8 rounded text-center mr-4'">
            <button>Créer un compte</button>
        </Link>
        <Link href="/login" className="bg-[#CEB2FF] w-40 h-8 rounded text-center">
            <button>Connexion</button>
        </Link>
        </div>
      </main>
    </>
  );
}
