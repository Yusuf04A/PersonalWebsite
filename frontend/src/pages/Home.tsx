import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import JourneySection from '../components/JourneySection';
import ProjectSection from '../components/ProjectSection';

// === TIPE DATA ===
interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    tags?: string[];
    image?: string;
}

interface Certificate {
    title: string;
    issuer: string;
    year: string;
    logo: string;
    image: string;
}

// === DATA SKILL (Tech Stack) ===
const mySkills = [
    { name: "Python", code: "py", level: "Intermediate", percentage: 70 },
    { name: "PHP", code: "php", level: "Beginner", percentage: 40 },
    { name: "JavaScript", code: "js", level: "Advanced", percentage: 90 },
    { name: "TypeScript", code: "ts", level: "Intermediate", percentage: 75 },
    { name: "React", code: "react", level: "Advanced", percentage: 85 },
    { name: "Next.js", code: "nextjs", level: "Intermediate", percentage: 70 },
    { name: "Node.js", code: "nodejs", level: "Intermediate", percentage: 65 },
    { name: "Supabase", code: "supabase", level: "Intermediate", percentage: 70 },
    { name: "PostgreSQL", code: "postgres", level: "Beginner", percentage: 50 },
    { name: "Tailwind", code: "tailwind", level: "Advanced", percentage: 95 },
    { name: "Git", code: "git", level: "Intermediate", percentage: 80 },
    { name: "Figma", code: "figma", level: "Beginner", percentage: 40 },
    { name: "C#", code: "cs", level: "Beginner", percentage: 30 },
];

// === DATA SERTIFIKAT ===
const certificates: Certificate[] = [
    {
        title: "Belajar Dasar Pemrograman Web",
        issuer: "Dicoding Indonesia",
        year: "2023",
        logo: "/python.jpg", // Ikon kecil (tidak ditampilkan di kartu baru, tapi ada di data)
        image: "/python.jpg" // File gambar asli di folder public
    },
    {
        title: "Visualisasi Data",
        issuer: "Dicoding Indonesia",
        year: "2023",
        logo: "/visualisasi.png",
        image: "/visualisasi.png"
    },
];

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const [formStatus, setFormStatus] = useState('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 100 });
        // Fetch Project dari Database Supabase
        fetch('http://localhost:3000/projects').then(res => res.json()).then(setProjects);
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

            {/* === 1. HERO SECTION (FONT SUDAH DIPERBAIKI) === */}
            <section id="home" className="container hero-section">
                <div style={{ width: '100%' }} data-aos="fade-up">

                    <p style={{ color: '#8B5CF6', letterSpacing: '2px', marginBottom: '1rem', fontWeight: '600', fontSize: '0.9rem' }}>
                        WELCOME TO MY PORTFOLIO
                    </p>

                    {/* KEMBALI MENGGUNAKAN H1 AGAR FONT BESAR */}
                    <h1 style={{ marginBottom: '1.5rem', fontWeight: '800', lineHeight: '1.1' }}>
                        Hi, I'm Yusuf Aditya.<br />
                        <span className="text-gradient-animated">Fullstack Developer.</span>
                    </h1>

                    <p style={{ maxWidth: '600px', color: '#9CA3AF', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Membangun solusi digital yang estetik dan fungsional. Fokus pada performa tinggi dan desain bersih.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="/yusuf-cv.pdf" download style={{ background: 'white', color: 'black', padding: '14px 32px', borderRadius: '50px', fontWeight: '700', textDecoration: 'none' }}>
                            Download CV ⇩
                        </a>
                        <a href="#contact" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: '600', textDecoration: 'none' }}>
                            Hubungi Saya
                        </a>
                    </div>
                </div>
            </section>

            {/* === 2. ABOUT ME === */}
            <section id="about" className="container" style={{ marginBottom: '8rem' }}>
                <div data-aos="fade-up">
                    <div className="about-grid">
                        <div className="about-image-wrapper" style={{ position: 'relative' }}>
                            <img src="/me.jpg" alt="Profile" style={{ width: '100%', borderRadius: '24px', objectFit: 'cover', aspectRatio: '1/1', filter: 'grayscale(20%)' }} />
                            <div style={{ position: 'absolute', top: '20px', left: '-20px', width: '100%', height: '100%', border: '2px solid #8B5CF6', borderRadius: '24px', zIndex: -1 }}></div>
                        </div>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>About Me.</h2>
                            <p style={{ marginBottom: '1.5rem', color: '#D1D5DB', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Saya adalah mahasiswa Informatika semester 5. Saya percaya kode yang baik tidak hanya jalan, tapi mudah dirawat.
                            </p>
                            <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: '1.8' }}>
                                Saya adalah pribadi disiplin dengan manajemen waktu yang baik dan mampu menyelesaikan tugas secara efisien. Berpengalaman dalam multitasking, saya terbiasa mengelola
                                beberapa tanggung jawab sekaligus tanpa mengurangi fokus dan ketelitian. Saya juga menyukai bidang
                                desain untuk mengekspresikan ide saya, serta memiliki keingintahuan tinggi untuk terus belajar dan cepat beradaptasi dengan tantangan baru.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* === 3. JOURNEY (Imported Component) === */}
            <JourneySection />

            {/* === 4. PROJECTS (Imported Component) === */}
            <ProjectSection projects={projects} />

            {/* === 5. TECH STACK === */}
            <section id="skills" className="container" style={{ marginBottom: '8rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">Tech Stack.</h2>
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

            {/* === 6. CERTIFICATES === */}
            <section id="certificates" className="container" style={{ marginBottom: '8rem' }}>
                <h2 style={{ marginBottom: '3rem' }} data-aos="fade-up">Certifications.</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            onClick={() => setSelectedCert(cert)}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{ cursor: 'pointer', borderLeft: '4px solid #8B5CF6', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: '0.3s' }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', lineHeight: '1.3', fontWeight: '700' }}>{cert.title}</h3>
                                <p style={{ color: '#9CA3AF', fontSize: '0.95rem', margin: 0 }}>{cert.issuer}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                                    <span style={{ color: '#8B5CF6', fontWeight: '600', fontSize: '0.9rem' }}>{cert.year}</span>
                                    <span style={{ fontSize: '0.8rem', color: '#666', fontStyle: 'italic' }}>Lihat Sertifikat ↗</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* === 7. CONTACT === */}
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

            {/* === MODAL CERTIFICATE (POP-UP) === */}
            {selectedCert && (
                <div className="modal-overlay" onClick={() => setSelectedCert(null)} style={{ zIndex: 1100 }}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '700px', // Lebar maksimal modal dikurangi dikit
                            width: '90%',
                            textAlign: 'center',
                            maxHeight: '90vh', // Biar modal gak lebih tinggi dari layar
                            overflowY: 'auto'  // Biar bisa discroll kalau layar HP pendek
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                            <button onClick={() => setSelectedCert(null)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
                        </div>

                        {/* GAMBAR DIBATASI TINGGINYA */}
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '60vh', 
                                width: 'auto',    
                                objectFit: 'contain',
                                borderRadius: '8px',
                                border: '2px solid #8B5CF6',
                                margin: '0 auto', 
                                display: 'block'
                            }}
                            onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400?text=Gambar+Tidak+Ditemukan'}
                        />

                        <h3 style={{ marginTop: '1.5rem', fontSize: '1.5rem', lineHeight: '1.3' }}>{selectedCert.title}</h3>
                        <p style={{ color: '#9CA3AF' }}>{selectedCert.issuer} • {selectedCert.year}</p>
                    </div>
                </div>
            )}

        </main>
    );
}