import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Willkommen zum Fragebogen</h1>
        <p className="mb-4 text-left">
          Das Briefing dient dazu, den variablen Preis für dein Projekt zu ermitteln. Es enthält einige kurze Fragen,
          die optional beantwortet werden können – du kannst also auch nur die wichtigsten Punkte ausfüllen.
          Wenn es einfacher ist, können wir das Briefing auch über WhatsApp erledigen.
        </p>
        <p className="mb-4 text-left">
          Unser Ablauf ist unkompliziert: Wir arbeiten zunächst lokal auf unserem Server, sodass deine aktuelle
          Website online bleibt. Nach der Veröffentlichung stellen wir dir ein kostenloses Backup zum Download zur Verfügung.
        </p>
        <Link href="/briefing/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
            Fragebogen starten
          </button>
        </Link>
      </div>
    </div>
  );
}
