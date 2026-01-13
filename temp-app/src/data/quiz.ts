export interface Question {
    q: string;
    opts: string[];
    correct: number;
    exp: string;
}

export const theoryQuestions: Question[] = [
    { q: "Apa fokus utama seorang Analis Sistem?", opts: ["Menulis kode program secepat mungkin", "Memahami 'Apa yang ingin dicapai'", "Memperbaiki komputer rusak"], correct: 1, exp: "Analis Sistem fokus pada kebutuhan bisnis (APA), bukan teknis coding (BAGAIMANA)." },
    { q: "Apa fungsi utama Use Case Diagram?", opts: ["Menggambar database", "Menjelaskan fungsionalitas sistem & aktor", "Menghitung biaya proyek"], correct: 1, exp: "Use Case fokus pada 'APA' yang sistem lakukan dan 'SIAPA' yang berinteraksi." },
    { q: "'Sistem harus memuat halaman dalam 2 detik'. Ini contoh...?", opts: ["Fitur Fungsional", "Kualitas (Non-Fungsional)", "User Story"], correct: 1, exp: "Kecepatan adalah karakteristik kualitas (Seberapa baik), bukan fitur (Apa yang dilakukan)." },
    { q: "Simbol orang dalam Use Case Diagram disebut...?", opts: ["User", "Person", "Actor"], correct: 2, exp: "Dalam UML, pengguna atau sistem lain yang berinteraksi disebut Actor." },
    { q: "Simbol Belah Ketupat (Diamond) pada Activity Diagram berarti?", opts: ["Mulai", "Selesai", "Keputusan (Decision)"], correct: 2, exp: "Diamond digunakan untuk percabangan logika (Ya/Tidak)." },
    { q: "Garis putus-putus dengan label <<include>> berarti?", opts: ["Relasi Wajib", "Relasi Opsional", "Pewarisan"], correct: 0, exp: "Include artinya Use Case A 'selalu' memanggil Use Case B." },
    { q: "Diagram yang paling cocok untuk merancang struktur database adalah...?", opts: ["Activity Diagram", "Class Diagram", "Sequence Diagram"], correct: 1, exp: "Class Diagram menggambarkan entitas data dan relasinya, mirip dengan skema database." },
    { q: "Pada Sequence Diagram, waktu berjalan ke arah...?", opts: ["Kiri ke Kanan", "Atas ke Bawah", "Bawah ke Atas"], correct: 1, exp: "Sequence Diagram membaca urutan waktu dari atas (awal) ke bawah (akhir)." },
    { q: "Bagian arsitektur sistem yang menyimpan data disebut...?", opts: ["Presentation Layer", "Business Layer", "Data Layer"], correct: 2, exp: "Data Layer bertanggung jawab atas penyimpanan dan pengambilan data." },
    { q: "Apa langkah pertama yang benar sebelum Coding?", opts: ["Desain UI", "Analisis & Perancangan", "Testing"], correct: 1, exp: "Analisis kebutuhan dan perancangan harus dilakukan sebelum konstruksi (coding)." }
];
