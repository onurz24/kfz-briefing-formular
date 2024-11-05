import React from 'react';

interface Step5Props {
  formData: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Step5: React.FC<Step5Props> = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Zusätzliche Anmerkungen</h2>
      <label>
        <p>Zusätzliche Anmerkungen:</p>
        <textarea
          name="additional_comments"
          value={formData.additional_comments}
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full h-24"
          placeholder='z. B. Besondere Wünsche oder Informationen, die wir beachten sollten.'
        />
      </label>
    </div>
  );
};

export default Step5;
