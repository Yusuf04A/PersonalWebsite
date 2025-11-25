export default function JourneySection() {
    // DATA PENDIDIKAN
    const education = [
        {
            year: "2023 - SEKARANG",
            title: "S1 Informatika",
            place: "Universitas Islam Indonesia"
        },
        {
            year: "2020 - 2023",
            title: "Jurusan IPA",
            place: "SMAN 1 JETIS"
        },
    ];

    // DATA PENGALAMAN (Lomba, Organisasi, Magang)
    const experiences = [
        {
            year: "2025",
            title: "Asisten Laboratorium Siber",
            place: "Departemen Informatika, Universitas Islam Indonesia",
            desc: "Membantu Laboratorium Siber dalam pengembangan dan pengelolaan lingkungan praktikum, membimbing mahasiswa melalui praktik keamanan siber dan sistem jaringan secara langsung, menjelaskan konsep dasar keamanan, jaringan, dan pemrograman, serta mendukung operasional laboratorium dan kegiatan pembelajaran secara keseluruhan."
        },
        {
            year: "2025",
            title: "Hipster (Design & Front-End Role)",
            place: "Google Developer Group on Campus UII",
            desc: "Merancang konsep UI/UX, mengembangkan komponen front-end untuk proyek komunitas, dan berkolaborasi dalam membangun pengalaman pengguna yang menarik."
        },
        {
            year: "2024",
            title: "Asisten Penelitian",
            place: "Universitas Islam Indonesia",
            desc: "Membantu membuat sebuah aplikasi berbasis android bernama Health Risk Calculator pada penelitian dosen",
        },
        {
            year: "2022-2023",
            title: "Olimpiade Penelitian Siswa Indonesia",
            place: "Pusat Prestasi Nasional (Puspresnas)",
            desc: "Mengembangkan media Pendidikan karakter berbasis Aumented Reality dalam upaya menyampaikan Pendidikan karakter pada remaja milenial."
        }
    ];

    return (
        <section id="journey" className="container" style={{ marginBottom: '8rem' }}>

            {/* BAGIAN 1: PENDIDIKAN */}
            <div style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }} data-aos="fade-up">Education.</h2>
                <div style={{ maxWidth: '900px' }}>
                    {education.map((edu, index) => (
                        <div key={index} className="timeline-item" data-aos="fade-left" data-aos-delay={index * 100}>
                            <span style={{ color: '#8B5CF6', fontWeight: '700', fontSize: '0.9rem' }}>{edu.year}</span>
                            <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>{edu.title}</h3>
                            <p style={{ color: 'white', fontWeight: '500', marginBottom: '0.5rem' }}>{edu.place}</p>
                            <p style={{ color: '#9CA3AF' }}>{edu.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* BAGIAN 2: PENGALAMAN / ORGANISASI */}
            <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }} data-aos="fade-up">Experience & Achievements.</h2>
                <div style={{ maxWidth: '900px' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item" data-aos="fade-left" data-aos-delay={index * 100}>
                            <span style={{ color: '#8B5CF6', fontWeight: '700', fontSize: '0.9rem' }}>{exp.year}</span>
                            <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>{exp.title}</h3>
                            <p style={{ color: 'white', fontWeight: '500', marginBottom: '0.5rem' }}>{exp.place}</p>
                            <p style={{ color: '#9CA3AF' }}>{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}