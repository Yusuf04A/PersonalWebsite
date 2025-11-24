import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    tags?: string[];
    image?: string;
}

interface ProjectSectionProps {
    projects: Project[];
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="container" style={{ marginBottom: '8rem' }}>
            {/* Judul Section */}
            <h2 style={{ marginBottom: '0.5rem' }} data-aos="fade-up">Selected Projects.</h2>
            <p style={{ marginBottom: '3rem', color: '#9CA3AF' }} data-aos="fade-up">Klik projek untuk melihat detail & gambar.</p>

            {/* --- GRID KARTU PROJECT (TANPA GAMBAR) --- */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="glass-card"
                        style={{
                            cursor: 'pointer',
                            padding: '2rem', // Padding dibuat lega
                            display: 'flex', // Flex biar bisa atur posisi atas-bawah
                            flexDirection: 'column',
                            justifyContent: 'space-between', // Biar tombol 'Lihat Detail' selalu di bawah
                            minHeight: '280px' // Tinggi minimal biar seragam
                        }}
                        onClick={() => setSelectedProject(project)}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        {/* --- BAGIAN GAMBAR SUDAH DIHAPUS DI SINI --- */}

                        <div>
                            {/* Judul Kartu */}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>
                                {project.title}
                            </h3>

                            {/* Deskripsi (tetap di-truncate biar rapi, max 4 baris) */}
                            <p style={{ color: '#9CA3AF', fontSize: '1rem', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                {project.description}
                            </p>
                        </div>

                        {/* Tombol kecil di bawah */}
                        <div style={{ marginTop: 'auto' }}>
                            <span style={{ color: '#8B5CF6', fontSize: '0.95rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Lihat Detail & Gambar <span style={{ fontSize: '1.2rem' }}>↗</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MODAL POP-UP (GAMBAR TETAP ADA DI SINI) --- */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '700px',
                            width: '90%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.8rem', lineHeight: '1.3', paddingRight: '1rem' }}>{selectedProject.title}</h2>
                            <button onClick={() => setSelectedProject(null)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', flexShrink: 0 }}>✕</button>
                        </div>

                        {/* GAMBAR MUNCUL DI SINI */}
                        <img
                            src={selectedProject.image ? selectedProject.image : 'https://placehold.co/600x400?text=No+Image'}
                            alt={selectedProject.title}
                            style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem', border: '2px solid #8B5CF6' }}
                        />

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            {selectedProject.tags?.map((tag, idx) => (
                                <span key={idx} className="skill-badge" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>{tag}</span>
                            ))}
                        </div>

                        <h4 style={{ color: '#8B5CF6', marginBottom: '0.8rem', fontSize: '1.1rem' }}>DESKRIPSI LENGKAP</h4>
                        <p style={{ color: '#D1D5DB', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1rem' }}>{selectedProject.description}</p>

                        <div style={{ marginTop: 'auto' }}>
                            <a href={selectedProject.link} target="_blank" style={{ display: 'inline-block', background: '#8B5CF6', color: 'white', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '1rem' }}>Lihat Source Code ↗</a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}