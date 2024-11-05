"use client";
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const steps = [
    { id: 1, name: "Hosting", component: Step1 },
    { id: 2, name: "Struktur & Funktionen", component: Step2 },
    { id: 3, name: "Inhalte & Design", component: Step3 },
    { id: 4, name: "Projektumfang", component: Step4 },
    { id: 5, name: "Zusätzliche Kommentare", component: Step5 },
  ];
const FormPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    url: '',
    hosting: '',
    check_hosting: false,
    backup_old_site: false,
    pages: '',
    website_goal: '',
    booking: false,
    shop: false,
    content: '',
    design: '',
    location: '',
    project_scope: '',
    additional_comments: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [submissionMessage, setSubmissionMessage] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
  
    // Use type assertion to ensure event.target is an HTMLInputElement for checkbox handling
    if (type === 'checkbox') {
      const checked = (event.target as HTMLInputElement).checked; // Type assertion here
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // // Perform validation if needed
    // const newErrors = [];
    // if (!formData.url) newErrors.push("Die URL ist erforderlich.");
    // if (!formData.pages) newErrors.push("Mindestens eine Seite ist erforderlich.");
    
    // if (newErrors.length > 0) {
    //   setErrors(newErrors);
    //   return;
    // }
  
    setErrors([]);
  
    try {
      const response = await fetch('/api/briefing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      setSubmissionMessage("Formular wurde übermittelt! (erneut Absenden möglich)");
      
      // Reset form data after successful submission
      setFormData({
        url: '',
        hosting: '',
        check_hosting: false,
        backup_old_site: false,
        pages: '',
        website_goal: '',
        booking: false,
        shop: false,
        content: '',
        design: '',
        location: '',
        project_scope: '',
        additional_comments: '',
      });
      setCurrentStep(0); // Reset to first step after success
    } catch (error) {
      console.error('Error:', error);
      setSubmissionMessage("Es gab einen Fehler bei der Übermittlung des Formulars.");
    }
  };
  

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Briefing Form</h1>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex-1 text-center ${currentStep >= index ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className="font-bold">{step.id}</div>
              <div className="text-sm">{step.name}</div>
            </div>
          ))}
        </div>
        <div className="h-1 bg-blue-600" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
      </div>
      <form onSubmit={currentStep === steps.length - 1 ? handleSubmit : undefined}>
        <CurrentStepComponent formData={formData} handleChange={handleChange} setStep={setCurrentStep} errors={errors} />
        <div className="flex justify-between mt-4 gap-2">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded"
            >
              Zurück
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ${currentStep === steps.length - 1 ? 'hidden' : ''}`}
          >
            Weiter
          </button>
          {currentStep === steps.length - 1 && (
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Abschicken
            </button>
          )}
        </div>
      </form>
      {submissionMessage && <p className="mt-4 text-center">{submissionMessage}</p>}
      {errors.length > 0 && <p className="mt-4 text-red-500 text-center">{errors.join(', ')}</p>}
    </div>
  );
};

export default FormPage;
