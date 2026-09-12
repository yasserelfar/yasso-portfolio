import { useState } from 'react';

const emptyProject = {
  title: '',
  description: '',
  image: '',
  link: '',
  githubLink: '',
  tags: '',
};

export default function Admin({ projects, setProjects }) {
  const [form, setForm] = useState(emptyProject);
  const [message, setMessage] = useState('');

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const project = {
      ...form,
      id: `project-${Date.now()}`,
      tags: form.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
      reverse: projects.length % 2 === 1,
    };
    setProjects([project, ...projects]);
    setForm(emptyProject);
    setMessage('Project added successfully.');
  }

  function removeProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
    setMessage('Project removed.');
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-orange-500">Portfolio Admin</p>
            <h1 className="text-3xl font-extrabold uppercase sm:text-5xl">Manage Projects</h1>
          </div>
          <a href="/" className="border border-white px-5 py-2 transition hover:bg-white hover:text-black">View portfolio</a>
        </div>

        <form onSubmit={handleSubmit} className="mb-12 grid gap-4 border border-zinc-700 bg-black p-5 sm:grid-cols-2 sm:p-8">
          <input required name="title" value={form.title} onChange={handleChange} placeholder="Project title" className="admin-input" />
          <input required name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="admin-input" />
          <input required name="link" value={form.link} onChange={handleChange} placeholder="Live project URL" className="admin-input" />
          <input name="githubLink" value={form.githubLink} onChange={handleChange} placeholder="GitHub URL (optional)" className="admin-input" />
          <input required name="tags" value={form.tags} onChange={handleChange} placeholder="Tags separated by commas" className="admin-input sm:col-span-2" />
          <textarea required name="description" value={form.description} onChange={handleChange} placeholder="Project description" rows="5" className="admin-input sm:col-span-2" />
          <button type="submit" className="bg-orange-500 px-6 py-3 font-bold text-black transition hover:bg-orange-400 sm:col-span-2">Add project</button>
          {message && <p className="text-sm text-orange-400 sm:col-span-2">{message}</p>}
        </form>

        <div className="grid gap-4">
          {projects.map((project) => (
            <article key={project.id} className="flex flex-wrap items-center justify-between gap-4 border border-zinc-800 p-4">
              <div className="flex items-center gap-4">
                <img src={project.image} alt="" className="h-16 w-20 rounded object-cover" />
                <div>
                  <h2 className="font-bold">{project.title}</h2>
                  <p className="text-sm text-zinc-400">{project.tags.join(' / ')}</p>
                </div>
              </div>
              <button type="button" onClick={() => removeProject(project.id)} className="border border-red-500 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500 hover:text-white">Delete</button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}