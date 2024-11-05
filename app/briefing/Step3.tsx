import React from 'react';

interface Step3Props {
  formData: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Step3: React.FC<Step3Props> = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Inhalte und Design</h2>
      <label>
        <p className="mt-2">Gibt es bereits Texte und Bilder oder Videos?</p>
        <p className="text-gray-500 text-sm">Bitte geben Sie an, ob bereits Inhalte vorhanden sind.</p>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full h-24"
          placeholder='z. B. Ja, ich habe die Texte und Bilder bereits. Ich benötige jedoch Unterstützung beim Design.'
        />
      </label>
      <label>
        <p>Haben Sie spezielle Design-Vorstellungen?</p>
        <p className="text-gray-500 text-sm">Bitte beschreiben Sie Ihre Wünsche zum Design der Website.</p>
        <textarea
          name="design"
          value={formData.design}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full h-24"
          placeholder='z. B. Farben, Layout, Stil, etc. oder eine Orientierungs Website die ansprechend aussieht'
        />
      </label>
      <label>
        <p>Standort:</p>
        <p className="text-gray-500 text-sm">Wo ist Ihr Unternehmen ansässig?</p>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        />
      </label>
    </div>
  );
};

export default Step3;
