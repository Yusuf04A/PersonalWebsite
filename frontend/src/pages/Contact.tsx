import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const res = await fetch('http://localhost:3000/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) { setStatus('success'); setFormData({ name: '', email: '', message: '' }); }
            else setStatus('error');
        } catch { setStatus('error'); }
    };

    return (
        <main style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '4rem' }}>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-down">
                <h1>Get in Touch 📬</h1>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                    Tertarik berkolaborasi atau punya tawaran project? <br />
                    Isi form di bawah, saya akan membalas secepatnya.
                </p>
            </div>

            {/* CARD FORMULIR */}
            <div className="card modern-form" data-aos="fade-up">
                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                        <h3>Pesan Terkirim!</h3>
                        <p>Terima kasih sudah menghubungi saya.</p>
                        <button onClick={() => setStatus('idle')} style={{ marginTop: '1rem', background: 'none', border: 'none', color: '#2563EB', cursor: 'pointer', textDecoration: 'underline' }}>Kirim pesan lagi</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nama Lengkap</label>
                            <input
                                type="text" required
                                className="modern-input"
                                placeholder="Contoh: Budi Santoso"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label>Email</label>
                            <input
                                type="email" required
                                className="modern-input"
                                placeholder="nama@email.com"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label>Pesan</label>
                            <textarea
                                rows={5} required
                                className="modern-input"
                                placeholder="Ceritakan detail project atau tujuanmu..."
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Mengirim...' : 'Kirim Pesan 🚀'}
                        </button>

                        {status === 'error' && <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>Gagal mengirim. Coba lagi ya.</p>}
                    </form>
                )}
            </div>

            {/* Info Tambahan */}
            <div style={{ textAlign: 'center', marginTop: '3rem', color: '#666' }} data-aos="fade-up" data-aos-delay="200">
                <p>Atau hubungi langsung via email:</p>
                <a href="mailto:email@kamu.com" style={{ color: '#111', fontWeight: '600', textDecoration: 'none' }}>yusuf@example.com ↗</a>
            </div>
        </main>
    );
}