import express, { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import cors from 'cors'; // Opsional: Tambahkan cors biar aman nanti pas disambung frontend

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Buka akses

// Setup Supabase
const supabase = createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || ''
);

// Rute Utama
app.get('/', (req, res) => {
    res.send('Backend Personal Website: AKTIF');
});

// Rute : AMBIL SEMUA PROJECT
app.get('/projects', async (req: Request, res: Response) => {
    // Query ke tabel 'projects'
    const { data, error } = await supabase
        .from('projects') // Pastikan nama tabel sama persis dengan di SQL tadi
        .select('*');     // Ambil semua kolom

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    // Kirim datanya ke browser/frontend
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});