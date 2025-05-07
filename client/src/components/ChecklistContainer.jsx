import React from "react";
import ParentTask from "./ParentTask";
import { useChecklistState } from "../hooks/useChecklistState";

const ChecklistContainer = () => {
  const {
    tasks,
    addParentTask,
    updateParentTask,
    deleteParentTask,
    addChildTask,
    updateChildTask,
    deleteChildTask,
    calculateTotalWeight,
    saveTask
  } = useChecklistState();

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {tasks.map(task => (
        <ParentTask
          key={task.id}
          task={task}
          onUpdate={(updatedTask) => updateParentTask(task.id, updatedTask)}
          onDelete={() => deleteParentTask(task.id)}
          onAddChild={() => addChildTask(task.id)}
          onUpdateChild={(childId, updatedChild) => updateChildTask(task.id, childId, updatedChild)}
          onDeleteChild={(childId) => deleteChildTask(task.id, childId)}
          calculateTotalWeight={calculateTotalWeight}
          onSaveTask={saveTask}
        />
      ))}
      
      <button
        onClick={addParentTask}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Add Activity
      </button>
    </div>
  );
};

export default ChecklistContainer;