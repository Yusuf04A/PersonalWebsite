import { useEffect, useState } from 'react';

// 1. Definisikan Tipe Data (Sama kayak di Backend tadi)
interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Ambil Data saat website dibuka
  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  return (
    // Container Utama (Gaya Minimalis)
    <div style={{ 
      fontFamily: "'Georgia', serif", // Font klasik clean
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px',
      color: '#333',
      lineHeight: '1.6'
    }}>
      
      {/* Header */}
      <header style={{ marginBottom: '60px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'normal', letterSpacing: '-1px' }}>
          Nama Kamu.
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Mahasiswa Informatika | Semester 5
        </p>
      </header>

      {/* Content: Projects */}
      <section>
        <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#999', marginBottom: '30px' }}>
          Selected Projects
        </h2>

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <div style={{ display: 'grid', gap: '40px' }}>
            {projects.map((project) => (
              <article key={project.id}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>
                  <a href={project.link} style={{ textDecoration: 'none', color: '#000' }}>
                    {project.title} ↗
                  </a>
                </h3>
                <p style={{ margin: 0, color: '#555' }}>
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

export default App;