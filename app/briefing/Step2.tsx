import React from 'react';

interface Step2Props {
  formData: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  setStep: (step: number) => void;
}

const Step2: React.FC<Step2Props> = ({ formData, handleChange, setStep }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Projektumfang</h2>
      <label>
        <p className="mt-2">Welche Seiten möchten Sie? (z. B. Startseite, Kontakt, Impressum):</p>
        <p className="text-gray-500 text-sm">Bitte beschreiben Sie die gewünschten Seiten und Funktionalitäten.</p>
        <textarea
          name="pages"
          value={formData.pages}
          placeholder='z. B. 5 Seiten (Startseite, Über Uns, Preise, Leistungen, Kontakt) mit Kontaktformular und Buchungssystem oder Newsletter'
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full h-24"
        />
      </label>
      <label>
        <p>Ziel der Website:</p>
        <p className="text-gray-500 text-sm">Bitte erläutern Sie das Hauptziel Ihrer Website.</p>
        <textarea
          name="website_goal"
          value={formData.website_goal}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full h-24"
          placeholder='z. B. Informieren über Leistungen oder viele Terminbuchungen'
        />
      </label>
      <label>
        <p>Termin Buchungsfunktion benötigt?</p>
        <p className="text-gray-500 text-sm">Möchten Sie eine Buchungsfunktion auf Ihrer Website integrieren?</p>
        <select
          name="booking"
          value={formData.booking ? 'true' : 'false'}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        >
          <option value="false">Nein</option>
          <option value="true">Ja</option>
        </select>
      </label>
      <label>
        <p>Vollständiger Online-Shop benötigt?</p>
        <p className="text-gray-500 text-sm">Benötigen Sie einen Online-Shop für den Verkauf von Produkten oder Dienstleistungen?</p>
        <select
          name="shop"
          value={formData.shop ? 'true' : 'false'}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        >
          <option value="false">Nein</option>
          <option value="true">Ja (+€)</option>
        </select>
      </label>
    </div>
  );
};

export default Step2;
