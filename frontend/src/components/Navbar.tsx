export default function navbar() {
    return (
        <nav className="navbar">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo Gradient */}
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none', color: 'white' }}>
                    <span className="text-gradient">Yusuf.</span>
                </a>

                {/* Menu Links (Anchor Links) */}
                <div className="nav-links" style={{ display: 'flex', gap: '2.5rem' }}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#journey">Journey</a> {/* Pengganti Blog */}
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}