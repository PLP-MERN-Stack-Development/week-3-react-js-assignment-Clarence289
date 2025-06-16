import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from './Button';
import Card from './Card';

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  // Toggle task completion status
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={addTask} className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <Button type="submit">Add Task</Button>
      </form>

      <div className="flex gap-2">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <Card key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span
                className={`${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.text}
              </span>
            </div>
            <Button
              variant="danger"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaskManager; 