import { useEffect, useState } from 'react';
import { initialProjects } from '../data/projects';

const STORAGE_KEY = 'yasso-portfolio-projects';

export function useProjects() {
  const [projects, setProjects] = useState(() => {
    try {
      const savedProjects = localStorage.getItem(STORAGE_KEY);
      return savedProjects ? JSON.parse(savedProjects) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  return [projects, setProjects];
}