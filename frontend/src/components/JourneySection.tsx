export default function JourneySection() {
    // DATA PENDIDIKAN
    const education = [
        {
            year: "2021 - SEKARANG",
            title: "S1 Teknik Informatika",
            place: "Universitas [Nama Kampusmu]",
            desc: "IPK Saat ini: 3.xx. Fokus pada Software Engineering dan Web Technologies."
        },
        {
            year: "2018 - 2021",
            title: "Jurusan IPA / RPL",
            place: "SMA/SMK [Nama Sekolahmu]",
            desc: "Lulus dengan nilai rata-rata ujian xx."
        }
    ];

    // DATA PENGALAMAN (Lomba, Organisasi, Magang)
    const experiences = [
        {
            year: "2023",
            title: "Juara 2 Hackathon Nasional",
            place: "Penyelenggara: [Nama Penyelenggara]",
            desc: "Membangun aplikasi web inovatif dalam waktu 24 jam menggunakan React & Node.js."
        },
        {
            year: "2022 - 2023",
            title: "Ketua Divisi IT",
            place: "Himpunan Mahasiswa Informatika",
            desc: "Bertanggung jawab mengelola website himpunan dan mengadakan workshop koding."
        },
        {
            year: "2022",
            title: "Peserta Studi Independen",
            place: "Dicoding Indonesia (Kampus Merdeka)",
            desc: "Belajar Front-End Web Development dan UI/UX Design."
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