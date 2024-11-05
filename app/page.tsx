import Link from 'next/link';

export default function Home() {


  return (
    <div className="container mx-auto p-4">
      <Link href="/briefing/">
        <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
          Go to Briefing
        </button>
      </Link>
    </div>
  );
}
