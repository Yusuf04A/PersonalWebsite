import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// === TIPE DATA ===
interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    tags?: string[];
    image?: string;
}

interface Blog {
    id: number;
    title: string;
    excerpt: string;
    created_at: string;
}

interface Certificate {
    title: string;
    issuer: string;
    year: string;
    logo: string;  // Icon kecil (misal: logo python)
    image: string; // Gambar FULL sertifikat (untuk pop-up)
}

// === DATA SKILL ===
const mySkills = [
    { name: "Figma", code: "figma", level: "Advanced", percentage: 80 },
    { name: "Python", code: "py", level: "Intermediate", percentage: 60 },
    { name: "PHP", code: "php", level: "Advanced", percentage: 90 },
    { name: "JavaScript", code: "js", level: "Intermediate", percentage: 50 },
    { name: "TypeScript", code: "ts", level: "Beginner", percentage: 30 },
    { name: "React", code: "react", level: "Beginner", percentage: 20 },
    { name: "Next.js", code: "nextjs", level: "Beginner", percentage: 30 },
    { name: "Node.js", code: "nodejs", level: "Intermediate", percentage: 65 },
    { name: "Supabase", code: "supabase", level: "Intermediate", percentage: 70 },
    { name: "PostgreSQL", code: "postgres", level: "Beginner", percentage: 50 },
    { name: "Tailwind", code: "tailwind", level: "Beginner", percentage: 40 },
    { name: "Git", code: "git", level: "Intermediate", percentage: 80 },
    { name: "C#", code: "cs", level: "Beginner", percentage: 30 },
    { name: "Kotlin", code: "kotlin", level: "Beginner", percentage: 20 },
];

// === DATA SERTIFIKAT ===
// PENTING: Pastikan file gambar ada di folder 'public'
const certificates: Certificate[] = [
    {
        title: "Memulai Pemrograman dengan Pyhton",
        issuer: "Dicoding Indonesia",
        year: "2023-2026",
        logo: "/python.jpg",          // Logo kecil
        image: "python.jpg" // GANTI INI dengan nama file sertifikat aslimu yang besar
    },
    {
        title: "Belajar Dasar Visualisasi Data",
        issuer: "Dicoding Indonesia",
        year: "2023-2026",
        logo: "/visualisasi.png",
        image: "visualisasi.png"    // GANTI INI dengan nama file sertifikat aslimu yang besar
    },
];

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    // State untuk Modal
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null); // State baru untuk sertifikat

    const [formStatus, setFormStatus] = useState('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 100 });
        fetch('http://localhost:3000/projects').then(res => res.json()).then(setProjects);
        fetch('http://localhost:3000/blogs').then(res => res.json()).then(setBlogs);
    }, []);

    const handleContact = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        try {
            await fetch('http://localhost:3000/contact', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            setFormStatus('success'); setFormData({ name: '', email: '', message: '' });
        } catch { setFormStatus('error'); }
    };

    return (
        <main>
            {/* === HERO === */}
            <section id="home" className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '0' }}>
                <div style={{ width: '100%' }} data-aos="fade-up">
                    <p style={{ color: '#8B5CF6', letterSpacing: '2px', marginBottom: '1rem', fontWeight: '600' }}>WELCOME TO MY PORTFOLIO</p>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        Hi, I'm Yusuf Aditya.<br />
                        <span className="text-gradient-animated">Fullstack Developer.</span>
                    </h1>
                    <p style={{ maxWidth: '600px', color: '#9CA3AF', fontSize: '1.2rem', marginBottom: '3rem' }}>
                        Membangun solusi digital yang estetik dan fungsional. Fokus pada performa tinggi dan desain bersih.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="/cv-yusuf.pdf" download style={{ background: 'white', color: 'black', padding: '14px 32px', borderRadius: '50px', fontWeight: '700', textDecoration: 'none' }}>
                            Download CV ⇩
                        </a>
                        <a href="#contact" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: '600', textDecoration: 'none' }}>
                            Hubungi Saya
                        </a>
                    </div>
                </div>
            </section>

            {/* === ABOUT === */}
            <section id="about" className="container" style={{ marginBottom: '8rem' }}>
                <div className="glass-card" data-aos="fade-up">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <img src="/me.jpg" alt="Profile" style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', aspectRatio: '1/1' }} />
                            <div style={{ position: 'absolute', top: '20px', left: '-20px', width: '100%', height: '100%', border: '2px solid #8B5CF6', borderRadius: '20px', zIndex: -1 }}></div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Me.</h2>
                            <p style={{ marginBottom: '1.5rem', color: '#D1D5DB', fontSize: '1.1rem' }}>
                                Saya adalah mahasiswa Informatika semester 5. Saya percaya kode yang baik tidak hanya jalan, tapi mudah dirawat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* === JOURNEY === */}
            <section id="journey" className="container" style={{ marginBottom: '8rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }} data-aos="fade-up">My Journey.</h2>
                <div style={{ maxWidth: '800px' }}>
                    <div className="timeline-item" data-aos="fade-left">
                        <span style={{ color: '#8B5CF6', fontWeight: '700', fontSize: '0.9rem' }}>2021 - SEKARANG</span>
                        <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>Mahasiswa Teknik Informatika</h3>
                        <p style={{ color: '#9CA3AF' }}>Menempuh pendidikan S1 dan aktif dalam organisasi.</p>
                    </div>
                    {blogs.map((blog, index) => (
                        <div key={blog.id} className="timeline-item" data-aos="fade-left" data-aos-delay={index * 100}>
                            <span style={{ color: '#8B5CF6', fontWeight: '700', fontSize: '0.9rem' }}>{new Date(blog.created_at).getFullYear()}</span>
                            <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{blog.title}</h3>
                            <p style={{ color: '#9CA3AF' }}>{blog.excerpt}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* === PROJECTS === */}
            <section id="projects" className="container" style={{ marginBottom: '8rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }} data-aos="fade-up">Projects.</h2>
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
                                    objectFit: 'cover', // Biar gambar rapi tidak gepeng
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
            </section>

            {/* === TECH STACK === */}
            <section id="skills" className="container" style={{ marginBottom: '8rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }} data-aos="fade-up">Tech Stack.</h2>
                <div className="skills-grid">
                    {mySkills.map((skill, index) => (
                        <div key={index} className="skill-box" data-aos="zoom-in" data-aos-delay={index * 50}>
                            <div className="skill-icon-container">
                                <img src={`https://skillicons.dev/icons?i=${skill.code}`} alt={skill.name} />
                            </div>
                            <p className="skill-name">{skill.name}</p>
                            <div className="skill-hover-info">
                                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#8B5CF6' }}>{skill.level}</span>
                                <div className="progress-bg">
                                    <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
                                </div>
                                <span style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '0.2rem' }}>{skill.percentage}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* === CERTIFICATES === */}
            <section id="certificates" className="container" style={{ marginBottom: '8rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }} data-aos="fade-up">Certifications.</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            onClick={() => setSelectedCert(cert)} // KLIK UNTUK BUKA MODAL
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{
                                cursor: 'pointer',
                                borderLeft: '4px solid #8B5CF6', // Garis Ungu di kiri sebagai aksen
                                padding: '2rem', // Padding dibesarkan biar lega
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                transition: '0.3s'
                            }}
                        >
                            {/* BAGIAN GAMBAR DIHAPUS, TINGGAL TEKS SAJA */}

                            <div>
                                <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', lineHeight: '1.3', fontWeight: '700' }}>
                                    {cert.title}
                                </h3>

                                <p style={{ color: '#9CA3AF', fontSize: '0.95rem', margin: 0 }}>
                                    {cert.issuer}
                                </p>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                                    <span style={{ color: '#8B5CF6', fontWeight: '600', fontSize: '0.9rem' }}>{cert.year}</span>
                                    <span style={{ fontSize: '0.8rem', color: '#666', fontStyle: 'italic' }}>
                                        Lihat Sertifikat ↗
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* === CONTACT === */}
            <section id="contact" className="container" style={{ marginBottom: '4rem' }}>
                <div className="glass-card" style={{ maxWidth: '700px', margin: '0 auto' }} data-aos="zoom-in">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Let's Connect.</h2>
                    {formStatus === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem', color: '#4ADE80' }}><h3>✅ Pesan Terkirim!</h3></div>
                    ) : (
                        <form onSubmit={handleContact}>
                            <input className="input-field" placeholder="Nama Kamu" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                            <input className="input-field" type="email" placeholder="Email Kamu" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                            <textarea className="input-field" rows={5} placeholder="Tulis pesanmu..." required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                            <button type="submit" style={{ width: '100%', padding: '14px', background: 'white', color: 'black', border: 'none', borderRadius: '12px', fontWeight: '700', cursor: 'pointer' }}>Kirim Pesan</button>
                        </form>
                    )}
                </div>
            </section>

            {/* === MODAL PROJECT === */}
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
                                border: '2px solid #8B5CF6' // Border ungu biar keren
                            }}
                        />
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            {selectedProject.tags?.map((tag, idx) => (
                                <span key={idx} className="skill-badge" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>{tag}</span>
                            ))}
                        </div>
                        <h4 style={{ color: '#8B5CF6', marginBottom: '0.5rem' }}>DESKRIPSI</h4>
                        <p style={{ color: '#D1D5DB', marginBottom: '2rem', lineHeight: '1.8' }}>{selectedProject.description}</p>
                        <a href={selectedProject.link} target="_blank" style={{ display: 'inline-block', background: '#8B5CF6', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>Lihat Source Code ↗</a>
                    </div>
                </div>
            )}

            {/* === MODAL CERTIFICATE (LOGIKA YANG TADINYA HILANG) === */}
            {selectedCert && (
                <div className="modal-overlay" onClick={() => setSelectedCert(null)} style={{ zIndex: 1100 }}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                            <button onClick={() => setSelectedCert(null)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
                        </div>

                        {/* GAMBAR FULL SERTIFIKAT */}
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '2px solid #8B5CF6' }}
                            onError={(e) => e.currentTarget.src = 'https://placehold.co/800x600?text=Gambar+Tidak+Ditemukan'}
                        />

                        <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>{selectedCert.title}</h3>
                        <p style={{ color: '#9CA3AF' }}>{selectedCert.issuer} • {selectedCert.year}</p>
                    </div>
                </div>
            )}

        </main>
    );
}