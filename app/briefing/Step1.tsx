import React from 'react';

interface Step1Props {
  formData: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  errors: string[];
}

const Step1: React.FC<Step1Props> = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Aktuelle Website</h2>
      <label>
        <p className="mt-2">URL der aktuellen Website:</p>
        <input
          type="text"
          name="url"
          placeholder="z. B. https://www.ihrewebsite.de"
          value={formData.url}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        />
      </label>
      <label>
        <p>Hosting Anbieter:</p>
        <p className="text-gray-500 text-sm">Nennen Sie den Anbieter (optional die monatlichen Kosten).</p>
        <input
          type="text"
          name="hosting"
          placeholder="z. B. Strato, IONOS"
          value={formData.hosting}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        />
      </label>
      <label className="inline-flex items-center mt-2">
        <input
          type="checkbox"
          name="check_hosting"
          checked={formData.check_hosting}
          onChange={handleChange}
          className="mr-2"
        />
        <span>Sollen wir Ihre Hosting-Kosten überprüfen.</span>
      </label>
      <label className="inline-flex items-center mt-2">
        <input
          type="checkbox"
          name="backup_old_site"
          checked={formData.backup_old_site}
          onChange={handleChange}
          className="mr-2"
        />
        <span>Kostenloses Backup der alten Website, falls möglich.</span>
      </label>
      {errors.length > 0 && <p className="text-red-500">{errors.join(', ')}</p>}
    </div>
  );
};

export default Step1;
