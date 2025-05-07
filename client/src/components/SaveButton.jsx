import React from 'react';

const SaveButton = ({ task, onSave }) => {
  const totalWeight = task.children.reduce((sum, child) => sum + Number(child.weight || 0), 0);
  
  const canSave = totalWeight === 100;

  const handleSave = () => {
    if (canSave) {
      onSave(task);
    }
  };

  return (
    <button
      onClick={handleSave}
      disabled={!canSave}
      className={`px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1
        ${canSave 
          ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer' 
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      title={canSave ? "Save this activity" : "Complete all weights to 100% to save"}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      Save
    </button>
  );
};

export default SaveButton;