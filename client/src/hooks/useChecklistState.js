import { useState } from "react";
import { toast } from "react-toastify";
import { calculateTotalWeight } from "../utils/calculateWeight";

export const useChecklistState = () => {  
    const [tasks, setTasks] = useState([]);

    const addParentTask = () => {
        setTasks([...tasks, {id: Date.now(), title: "", unit: "", children: []}]);
        toast.success("Parent task added successfully!");
    };

    const updateParentTask = (id, updatedTask) => {
        const updated = tasks.map(task => task.id === id ? updatedTask : task);
        setTasks(updated);  
    };

    const deleteParentTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        toast.info("Activity deleted successfully!");
    }

    const addChildTask = (parentId) => {
        const parent = tasks.find(task => task.id === parentId);
        const totalWeight = calculateTotalWeight(parent.children);

        if(totalWeight >= 100) {
            toast.error("Total weight cannot exceed 100%");
            return;
        }
        const updatedParent = {
            ...parent,
            children: [
                ...parent.children,
                { id: Date.now(), title: "", unit: parent.unit || "", weight: 0 },
            ],
        };

        updateParentTask(parentId, updatedParent);
        toast.success("Sub-activity added successfully!");
    };  

    const updateChildTask = (parentId, childId, updatedChild) => {
        const parent = tasks.find(task => task.id === parentId);
        if(!parent) return;
        const updatedChildren = parent.children.map(child => child.id === childId ? updatedChild : child);

        const totalWeight = calculateTotalWeight(updatedChildren);
        if(totalWeight > 100) {
            toast.error("Total weight cannot exceed 100%");
            return;
        }

        const updatedParent = {
            ...parent,
            children: updatedChildren,
        };

        updateParentTask(parentId, updatedParent);
        return true;
    };

    const deleteChildTask = (parentId, childId) => {
        const parent = tasks.find(task => task.id === parentId);
        if(!parent) return;
        const updatedChildren = parent.children.filter(child => child.id !== childId);
        const updatedParent = {
            ...parent,
            children: updatedChildren,
        };
        updateParentTask(parentId, updatedParent);

        const calculateTotalWeight = (children) => {
            return children.reduce((sum, child) => sum + parseFloat(child.weight || 0), 0);
        }
        toast.info("Sub-activity deleted successfully!");
    }

    const saveCompleteTasks = (completeTasks) => {
        console.log('req.body:', completeTasks);
        toast.success(`${completeTasks.length} activities saved successfully!`);
        
        return completeTasks;
      };

      const saveTask = (task) => {
        const totalWeight = calculateTotalWeight(task.children);
        
        if (totalWeight === 100) {
          console.log('req.body:', task);
          toast.success(`Activity "${task.title}" saved successfully!`);
          return task;
        } else {
          toast.error("Cannot save: total weight must be exactly 100%");
          return null;
        }
      };
      
    return { tasks, addParentTask, updateParentTask, deleteParentTask, addChildTask, updateChildTask, deleteChildTask, calculateTotalWeight, saveCompleteTasks, saveTask };
}