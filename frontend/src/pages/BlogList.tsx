import { useEffect, useState } from 'react';

interface Blog {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    created_at: string;
}

export default function BlogList() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <main style={{ paddingBottom: '4rem' }}>
            <header style={{ marginBottom: '3rem' }} data-aos="fade-up">
                <h1>Writing.</h1>
                <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px' }}>
                    Pemikiran, tutorial, dan catatan perjalanan saya mendalami Software Engineering.
                </p>
            </header>

            {loading ? (
                <p>Loading articles...</p>
            ) : (
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {blogs.map((blog, index) => (
                        <a
                            href={`/blog/${blog.slug}`}
                            key={blog.id}
                            className="card" // Pakai class card biar kotak putih cantik
                            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div style={{ marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '600', color: '#2563EB', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {new Date(blog.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </div>

                            <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{blog.title}</h2>
                            <p style={{ margin: 0, color: '#6B7280' }}>{blog.excerpt}</p>

                            <div style={{ marginTop: '1rem', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Baca Selengkapnya <span>→</span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </main>
    );
}