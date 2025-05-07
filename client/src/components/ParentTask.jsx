import React, { useState, useEffect } from "react";
import ChildTask from "./ChildTask";
import DropdownSelector from "./DropdownSelector";
import SaveButton from "./SaveButton";

const ParentTask = ({ 
  task, 
  onUpdate, 
  onDelete, 
  onAddChild,
  onUpdateChild,
  onDeleteChild,
  calculateTotalWeight,
  onSaveTask
}) => {
  const [title, setTitle] = useState(task.title);
  const [unit, setUnit] = useState(task.unit);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    onUpdate({ ...task, title, unit });
  }, [title, unit]);

  const totalWeight = calculateTotalWeight(task.children);
  const progressColor = totalWeight === 100 
    ? "bg-green-500" 
    : totalWeight > 75 
      ? "bg-yellow-500" 
      : "bg-blue-500";

  return (
    <div className="border border-gray-200 rounded-md shadow-sm bg-white overflow-hidden">
      <div className="bg-gray-50 p-4 flex items-center gap-2">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        <input
          type="text"
          placeholder="Activity Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 rounded-md flex-1"
        />
        
        <DropdownSelector value={unit} onChange={setUnit} />
        
        <div className="font-semibold text-gray-700 min-w-[70px] text-right">
          {totalWeight}%
        </div>
        
        <SaveButton 
          task={task} 
          onSave={() => onSaveTask(task)} 
        />
        
        <button 
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 p-1"
          title="Delete Activity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-200">
        <div 
          className={`h-full ${progressColor} transition-all duration-300`} 
          style={{ width: `${totalWeight}%` }}
        ></div>
      </div>

      {isExpanded && (
        <div className="p-4">
          {task.children.map(child => (
            <ChildTask
              key={child.id}
              child={child}
              siblings={task.children}
              onUpdate={(updatedChild) => onUpdateChild(child.id, updatedChild)}
              onDelete={() => onDeleteChild(child.id)}
              parentUnit={unit}
            />
          ))}

          <button
            onClick={onAddChild}
            className="text-blue-600 hover:text-blue-800 hover:underline mt-3 flex items-center gap-1"
            disabled={totalWeight >= 100}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Sub-activity
          </button>
        </div>
      )}
    </div>
  );
};

export default ParentTask;