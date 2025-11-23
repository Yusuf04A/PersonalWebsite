import express, { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // PENTING: Biar bisa baca data JSON dari Contact Form

// Setup Supabase
const supabase = createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || ''
);

// --- ROUTES ---

// 1. Cek Server
app.get('/', (req, res) => {
    res.send('Backend API is running...');
});

// 2. PROJECTS (Portofolio)
app.get('/projects', async (req, res) => {
    const { data, error } = await supabase.from('projects').select('*').order('id', { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// 2b. PROJECT DETAIL (Ambil 1 project spesifik)
app.get('/projects/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// 3. BLOGS (Artikel)
app.get('/blogs', async (req, res) => {
    const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// 3b. BLOG DETAIL (Baca 1 artikel)
app.get('/blogs/:slug', async (req, res) => {
    const { slug } = req.params;
    const { data, error } = await supabase.from('blogs').select('*').eq('slug', slug).single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// 4. CONTACT (Terima Pesan)
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    // Validasi simpel
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Semua kolom harus diisi!' });
    }

    const { data, error } = await supabase.from('messages').insert([{ name, email, message }]);
    if (error) return res.status(500).json({ error: error.message });
    
    res.status(201).json({ message: 'Pesan berhasil dikirim!' });
});

// Jalankan Server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});