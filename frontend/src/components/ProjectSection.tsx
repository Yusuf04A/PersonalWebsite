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
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }} data-aos="fade-up">Selected Projects.</h2>
            <p style={{ marginBottom: '3rem', color: '#9CA3AF' }} data-aos="fade-up">Klik projek untuk melihat detailnya.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <div key={project.id} className="glass-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedProject(project)} data-aos="fade-up" data-aos-delay={index * 100}>
                        <img
                            src={project.image ? project.image : 'https://placehold.co/600x400?text=No+Image'}
                            alt={project.title}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                marginBottom: '1.5rem',
                                border: '1px solid #333'
                            }}
                        />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                        <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>Klik untuk detail...</p>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '2rem' }}>{selectedProject.title}</h2>
                            <button onClick={() => setSelectedProject(null)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
                        </div>

                        <img
                            src={selectedProject.image ? selectedProject.image : 'https://placehold.co/600x400?text=No+Image'}
                            alt={selectedProject.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '300px',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                marginBottom: '1.5rem',
                                border: '2px solid #8B5CF6'
                            }}
                        />

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            {selectedProject.tags?.map((tag, idx) => (
                                <span key={idx} className="skill-badge" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h4 style={{ color: '#8B5CF6', marginBottom: '0.5rem' }}>DESKRIPSI</h4>
                        <p style={{ color: '#D1D5DB', marginBottom: '2rem', lineHeight: '1.8' }}>{selectedProject.description}</p>
                        <a href={selectedProject.link} target="_blank" style={{ display: 'inline-block', background: '#8B5CF6', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>Lihat Source Code ↗</a>
                    </div>
                </div>
            )}
        </section>
    );
}