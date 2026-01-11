import { UmlComponent, QuizQuestion } from '../types';

export const umlData: UmlComponent[] = [
    // === USE CASE COMPONENTS ===
    {
        id: 'actor',
        type: 'usecase',
        name: 'Actor',
        desc: 'Mewakili peran pengguna (manusia) atau sistem lain yang berinteraksi langsung dengan sistem yang sedang dibuat. Aktor berada di luar sistem (stand-alone).',
        svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><circle cx="25" cy="15" r="8"/><path d="M25 23 L25 38 M10 28 L40 28 M15 50 L25 38 L35 50"/></svg>'
    },
    {
        id: 'actor_system',
        type: 'usecase',
        name: 'Actor (System)',
        desc: 'Mewakili sistem eksternal lain yang berinteraksi dengan sistem kita, misalnya Payment Core banking atau layanan API pihak ketiga.',
        svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="40" height="40" rx="4"/><circle cx="25" cy="18" r="5"/><path d="M25 23 L25 35 M15 28 L35 28 M18 42 L25 35 L32 42"/><text x="13" y="12" font-size="6" fill="#2563EB" stroke="none">&lt;&lt;system&gt;&gt;</text></svg>'
    },
    {
        id: 'usecase',
        type: 'usecase',
        name: 'Use Case',
        desc: 'Menggambarkan fungsionalitas atau fitur spesifik yang dapat dilakukan oleh sistem. Biasanya dimodelkan dengan kata kerja (contoh: Login, Bayar).',
        svg: '<svg viewBox="0 0 100 50" fill="white" stroke="#2563EB" stroke-width="2"><ellipse cx="50" cy="25" rx="45" ry="20"/></svg>'
    },
    {
        id: 'assoc_solid',
        type: 'usecase',
        name: 'Association',
        desc: 'Garis penghubung antara Aktor dan Use Case, menunjukkan adanya interaksi atau komunikasi. Tidak menggambarkan aliran data, hanya partisipasi.',
        svg: '<svg viewBox="0 0 50 50" stroke="#2563EB" stroke-width="2"><line x1="0" y1="25" x2="50" y2="25"/></svg>'
    },
    {
        id: 'include',
        type: 'usecase',
        name: 'Include',
        desc: 'Hubungan di mana satu Use Case WAJIB memanggil Use Case lain. Contoh: "Transfer Dana" include "Cek Saldo".',
        svg: '<svg viewBox="0 0 80 40" fill="none" stroke="#2563EB" stroke-width="2"><path d="M0 20 L75 20" stroke-dasharray="4,2"/><path d="M75 20 L65 15 M75 20 L65 25"/><text x="15" y="15" font-size="8" fill="#2563EB" stroke="none">&lt;&lt;include&gt;&gt;</text></svg>'
    },
    {
        id: 'extend',
        type: 'usecase',
        name: 'Extend',
        desc: 'Hubungan opsional di mana satu Use Case BISA memperluas fungsi Use Case lain pada kondisi tertentu. Contoh: "Daftar" extend "Daftar via Google".',
        svg: '<svg viewBox="0 0 80 40" fill="none" stroke="#2563EB" stroke-width="2"><path d="M0 20 L75 20" stroke-dasharray="4,2"/><path d="M75 20 L65 15 M75 20 L65 25"/><text x="15" y="15" font-size="8" fill="#2563EB" stroke="none">&lt;&lt;extend&gt;&gt;</text></svg>'
    },
    {
        id: 'generalization',
        type: 'usecase',
        name: 'Generalization',
        desc: 'Hubungan pewarisan (parent-child). Child mewarisi perilaku Parent. Bisa antar Aktor (User -> Admin) atau antar Use Case.',
        svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><line x1="0" y1="25" x2="40" y2="25"/><path d="M40 25 L30 20 L30 30 Z" fill="#2563EB"/></svg>'
    },
    {
        id: 'boundary',
        type: 'usecase',
        name: 'System Boundary',
        desc: 'Kotak pembatas yang memisahkan apa yang ada di DALAM sistem (Use Case) dan di LUAR sistem (Aktor).',
        svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="40" height="40"/><text x="8" y="15" font-size="6" fill="#2563EB" stroke="none">System</text></svg>'
    },

    // === ACTIVITY COMPONENTS ===
    {
        id: 'initial',
        type: 'activity',
        name: 'Initial Node',
        desc: 'Titik awal dimulainya suatu alur aktivitas. Setiap Activity Diagram harus memiliki satu Initial Node.',
        svg: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="#2563EB"/></svg>'
    },
    {
        id: 'final',
        type: 'activity',
        name: 'Activity Final',
        desc: 'Titik akhir yang menandakan selesainya seluruh proses dalam Activity Diagram.',
        svg: '<svg viewBox="0 0 40 40" fill="none" stroke="#2563EB" stroke-width="3"><circle cx="20" cy="20" r="15"/><circle cx="20" cy="20" r="8" fill="#2563EB"/></svg>'
    },
    {
        id: 'action',
        type: 'activity',
        name: 'Action',
        desc: 'Satu langkah proses atau kegiatan tunggal yang dilakukan oleh sistem atau aktor. Contoh: "Validasi Form", "Simpan Data".',
        svg: '<svg viewBox="0 0 80 40" fill="white" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="70" height="30" rx="10"/></svg>'
    },
    {
        id: 'decision',
        type: 'activity',
        name: 'Decision / Merge',
        desc: 'Titik percabangan (kondisi if/else) atau penggabungan kembali alur (merge). Memiliki 1 input dan banyak output (untuk decision) atau sebaliknya.',
        svg: '<svg viewBox="0 0 50 50" fill="white" stroke="#2563EB" stroke-width="2"><path d="M25 5 L45 25 L25 45 L5 25 Z"/></svg>'
    },
    {
        id: 'fork_h',
        type: 'activity',
        name: 'Fork / Join',
        desc: 'Digunakan untuk memecah alur menjadi paralal (Fork) atau menggabungkan alur paralel menjadi satu (Join).',
        svg: '<svg viewBox="0 0 60 20"><rect x="5" y="8" width="50" height="6" fill="#2563EB"/></svg>'
    },
    {
        id: 'control_flow',
        type: 'activity',
        name: 'Control Flow',
        desc: 'Garis panah yang menunjukkan urutan eksekusi dari satu aktivitas ke aktivitas berikutnya.',
        svg: '<svg viewBox="0 0 50 20" stroke="#2563EB" stroke-width="2" fill="none"><line x1="0" y1="10" x2="40" y2="10"/><path d="M40 10 L35 5 M40 10 L35 15"/></svg>'
    },
    {
        id: 'partition_v',
        type: 'activity',
        name: 'Swimlane',
        desc: 'Area vertikal untuk mengelompokkan aktivitas berdasarkan siapa yang bertanggung jawab (Misal: User, System, Database).',
        svg: '<svg viewBox="0 0 50 60" fill="none" stroke="#2563EB" stroke-width="1"><rect x="5" y="5" width="40" height="50"/><line x1="5" y1="15" x2="45" y2="15"/></svg>'
    }
];

export const useCaseQuestions: QuizQuestion[] = [
    {
        scenario: 'Login Sistem',
        instruction: 'User (Aktor) melakukan Login (Use Case). Hubungkan keduanya.',
        targetSequence: ['actor', 'assoc_solid', 'usecase'],
        explanation: 'Gunakan garis Asosiasi biasa untuk menghubungkan Aktor manusia dan Use Case.',
        layoutMode: 'boundary'
    },
    {
        scenario: 'Sistem Pembayaran',
        instruction: 'Sistem harus menghubungi Payment Gateway (System Actor) untuk memproses pembayaran.',
        targetSequence: ['usecase', 'assoc_solid', 'actor_system'],
        explanation: 'Aktor Sistem digambarkan kotak dengan stereotype <<system>>.',
        layoutMode: 'boundary'
    },
    {
        scenario: 'Pewarisan Use Case',
        instruction: '"Bayar Kredit" adalah jenis khusus dari "Bayar". Gambarkan pewarisannya.',
        targetSequence: ['usecase', 'generalization', 'usecase'],
        explanation: 'Panah Generalization menunjuk dari Anak (Bayar Kredit) ke Induk (Bayar).'
    },
    {
        scenario: 'Include Wajib',
        instruction: 'Saat "Login", sistem wajib melakukan "Verifikasi Password".',
        targetSequence: ['usecase', 'include', 'usecase'],
        explanation: 'Relasi Include menandakan fungsi yang PASTI dijalankan (wajib) oleh use case pemanggil.'
    },
    {
        scenario: 'Extend Opsional',
        instruction: 'Saat "Checkout", user BISA (tidak wajib) memilih "Asuransi Tambahan".',
        targetSequence: ['usecase', 'extend', 'usecase'],
        explanation: 'Relasi Extend digunakan untuk fitur tambahan yang bersifat opsional/kondisional.'
    },
    {
        scenario: 'Pewarisan Actor',
        instruction: 'Admin memiliki semua kemampuan User biasa, plus fitur tambahan.',
        targetSequence: ['actor', 'generalization', 'actor'],
        explanation: 'Admin adalah turunan (anak) dari User (induk) menggunakan Generalization.'
    },
    {
        scenario: 'System Boundary',
        instruction: 'Tempatkan Use Case "Register" di dalam lingkup sistem.',
        targetSequence: ['boundary', 'usecase'],
        explanation: 'System Boundary memvisualisasikan batasan aplikasi yang sedang dibuat.',
        override: true
    }
];

export const activityQuestions: QuizQuestion[] = [
    {
        scenario: 'Alur Dasar',
        instruction: 'Mulai -> Isi Form -> Selesai.',
        targetSequence: ['initial', 'control_flow', 'action', 'control_flow', 'final'],
        explanation: 'Setiap activity diagram dimulai dengan Initial Node dan diakhiri Activity Final.',
        layoutMode: 'swimlane',
        swimlaneHeaders: ['User'],
        slotMapping: [0, 0, 0, 0, 0]
    },
    {
        scenario: 'Percabangan (Login)',
        instruction: 'Input Password -> Cek Valid? -> (Ya/Tidak).',
        targetSequence: ['action', 'control_flow', 'decision'],
        explanation: 'Gunakan Decision (belah ketupat) untuk memecah alur berdasarkan kondisi benar/salah.',
        layoutMode: 'swimlane',
        swimlaneHeaders: ['System'],
        slotMapping: [0, 0, 0]
    },
    {
        scenario: 'Proses Paralel',
        instruction: 'Setelah Bayar, sistem kirim Email DAN update Stok secara bersamaan.',
        targetSequence: ['action', 'control_flow', 'fork_h'],
        explanation: 'Fork Node (batang hitam) membagi satu alur menjadi beberapa alur yang berjalan paralel.'
    },
    {
        scenario: 'Sinkronisasi (Join)',
        instruction: 'Tunggu Verifikasi Email selesai DAN Verifikasi NoHP selesai -> Baru akun aktif.',
        targetSequence: ['action', 'fork_h', 'action'],
        // Note: Simplification for quiz visual -> usually action -> join -> action but using fork_h visual for join is same
        explanation: 'Join Node menunggu semua proses paralel selesai sebelum melanjutkan ke langkah berikutnya.'
    },
    {
        scenario: 'Swimlane (Tanggung Jawab)',
        instruction: 'Tunjukkan bahwa aktivitas "Validasi Data" dilakukan oleh "Sistem".',
        targetSequence: ['partition_v', 'action'],
        explanation: 'Swimlane membagi area diagram kolom-per-kolom untuk menjelaskan siapa yang melakukan apa.',
        override: true
    }
];
