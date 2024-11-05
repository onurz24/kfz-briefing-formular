import React from 'react';

interface Step4Props {
  formData: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Step4: React.FC<Step4Props> = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Projektumfang</h2>
      <label>
        <p className="mt-2">Gibt es noch weitere Punkte, die besprochen werden müssen?</p>
        <p className="text-gray-500 text-sm">Bitte erläutern Sie Ihren Projektumfang.</p>
        <textarea
          name="project_scope"
          value={formData.project_scope}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full h-24"
        />
      </label>
    </div>
  );
};

export default Step4;
