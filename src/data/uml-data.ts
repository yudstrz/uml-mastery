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
    },

    // === USER FLOW COMPONENTS ===
    {
        id: 'start_end',
        type: 'userflow',
        name: 'Start / End',
        desc: 'Node awal atau akhir dari user flow. Biasanya berbentuk rounded rectangle untuk menandai titik mulai dan selesai perjalanan pengguna.',
        svg: '<svg viewBox="0 0 100 40" fill="white" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="90" height="30" rx="15"/></svg>'
    },
    {
        id: 'process',
        type: 'userflow',
        name: 'Process / Screen',
        desc: 'Menggambarkan halaman, layar, atau proses yang dilalui user. Contoh: "Tampilan Splash Screen", "Halaman Login".',
        svg: '<svg viewBox="0 0 100 40" fill="white" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="90" height="30" rx="4"/></svg>'
    },
    {
        id: 'decision_uf',
        type: 'userflow',
        name: 'Decision',
        desc: 'Titik keputusan dalam alur pengguna. Biasanya berdasarkan kondisi seperti "Sudah Login?" atau "Pembayaran Berhasil?".',
        svg: '<svg viewBox="0 0 50 50" fill="white" stroke="#2563EB" stroke-width="2"><path d="M25 5 L45 25 L25 45 L5 25 Z"/></svg>'
    },
    {
        id: 'flow_arrow',
        type: 'userflow',
        name: 'Flow Arrow',
        desc: 'Panah penghubung yang menunjukkan arah alur dari satu langkah ke langkah berikutnya dalam user journey.',
        svg: '<svg viewBox="0 0 50 20" stroke="#2563EB" stroke-width="2" fill="none"><line x1="0" y1="10" x2="40" y2="10"/><path d="M40 10 L35 5 M40 10 L35 15"/></svg>'
    }
];

// === USE CASE COMPONENTS (Only Final Challenge) ===
export const useCaseQuestions: QuizQuestion[] = [
    {
        scenario: 'Tantangan Akhir: Sistem Go Food',
        instruction: 'Susun Use Case Diagram LENGKAP dengan komponen dan SEMUA relasi (associations, include, extend).',
        targetSequence: [
            // Actors
            'actor',       // 0: Pelanggan
            'actor',       // 1: Admin Resto
            'actor',       // 2: Driver
            // Use Cases
            'usecase',     // 3: Login
            'usecase',     // 4: Mencari makanan
            'usecase',     // 5: Melakukan pemesanan
            'usecase',     // 6: Melakukan pembayaran
            'usecase',     // 7: Validasi Pembayaran (Include)
            'usecase',     // 8: Pakai promo (Extend)
            'usecase',     // 9: Mengelola Menu
            'usecase',     // 10: Menerima Pesanan (Resto)
            'usecase',     // 11: Menyiapkan makanan
            'usecase',     // 12: Menerima pesanan (Driver)
            'usecase',     // 13: Mengambil makanan
            'usecase',     // 14: Mengantar ke pelanggan
            // Relations (only include and extend, associations available in toolbox but not in fixed slots)
            'include',     // 15: Pembayaran <<include>> Validasi
            'extend',      // 16: Pemesanan <<extend>> Pakai Promo
        ],
        explanation: 'Diagram lengkap dengan aktor, use case, dan relasi Include/Extend.',
        layoutMode: 'gofood',
        slotConfig: [
            // Actors
            { label: 'Pelanggan', gridArea: '1 / 1 / 3 / 2' },
            { label: 'Admin Resto', gridArea: '9 / 1 / 11 / 2' },
            { label: 'Driver', gridArea: '6 / 5 / 8 / 6' },

            // Use Cases
            { label: 'Login', gridArea: '1 / 3 / 2 / 4' },
            { label: 'Mencari makanan', gridArea: '2 / 3 / 3 / 4' },
            { label: 'Melakukan pemesanan', gridArea: '3 / 3 / 4 / 4' },
            { label: 'Melakukan pembayaran', gridArea: '4 / 3 / 5 / 4' },
            { label: 'Validasi Pembayaran', gridArea: '5 / 3 / 6 / 4' },
            { label: 'Pakai promo', gridArea: '3 / 4 / 4 / 5' },
            { label: 'Mengelola Menu', gridArea: '8 / 3 / 9 / 4' },
            { label: 'Menerima Pesanan', gridArea: '9 / 3 / 10 / 4' },
            { label: 'Menyiapkan makanan', gridArea: '10 / 3 / 11 / 4' },
            { label: 'Menerima pesanan', gridArea: '6 / 4 / 7 / 5' },
            { label: 'Mengambil makanan', gridArea: '7 / 4 / 8 / 5' },
            { label: 'Mengantar ke pelanggan', gridArea: '8 / 4 / 9 / 5' },

            // Relations
            { label: '<<include>>', gridArea: '4 / 4 / 6 / 5' },
            { label: '<<extend>>', gridArea: '3 / 5 / 4 / 6' },

            // Associations (lines between actors and use cases)
            { label: '— (Login)', gridArea: '1 / 2 / 2 / 3' },
            { label: '— (Mencari)', gridArea: '2 / 2 / 3 / 3' },
            { label: '— (Pemesanan)', gridArea: '2 / 2 / 4 / 3' },
            { label: '— (Bayar)', gridArea: '2 / 2 / 5 / 3' },
            { label: '— (Menu)', gridArea: '8 / 2 / 9 / 3' },
            { label: '— (Terima)', gridArea: '9 / 2 / 10 / 3' },
            { label: '— (Siapkan)', gridArea: '10 / 2 / 11 / 3' },
            { label: '— (Terima D)', gridArea: '6 / 4 / 7 / 5' },
            { label: '— (Ambil)', gridArea: '7 / 4 / 8 / 5' },
            { label: '— (Antar)', gridArea: '7 / 4 / 9 / 5' },
        ]
    }
];

// === ACTIVITY COMPONENTS (Only Final Challenge) ===
export const activityQuestions: QuizQuestion[] = [
    {
        scenario: 'Tantangan Akhir: Alur Pemesanan Go Food',
        instruction: 'Susun Activity Diagram LENGKAP dengan semua action nodes dan control flow untuk setiap transisi.',
        targetSequence: [
            // Nodes
            'initial',       // 0: Start
            'action',        // 1: Masuk aplikasi
            'action',        // 2: Mencari makanan
            'action',        // 3: Memesan makanan
            'action',        // 4: Melakukan pembayaran
            'action',        // 5: Verifikasi pembayaran
            'action',        // 6: Menyiapkan pesanan
            'action',        // 7: Update status pesanan
            'action',        // 8: Mencari driver
            'action',        // 9: Terima pesanan
            'action',        // 10: Mengantar pesanan
            'action',        // 11: Update status pengiriman
            'action',        // 12: Menerima pesanan
            'final',         // 13: Final
            // Control Flows (ALL transitions)
            'control_flow',  // 14: Start → Masuk aplikasi
            'control_flow',  // 15: Masuk aplikasi → Mencari makanan
            'control_flow',  // 16: Mencari makanan → Memesan makanan
            'control_flow',  // 17: Memesan makanan → Bayar
            'control_flow',  // 18: Bayar → Verifikasi
            'control_flow',  // 19: Verifikasi → Menyiapkan
            'control_flow',  // 20: Menyiapkan → Update status
            'control_flow',  // 21: Update status → Mencari driver
            'control_flow',  // 22: Mencari driver → Terima pesanan
            'control_flow',  // 23: Terima pesanan → Mengantar
            'control_flow',  // 24: Mengantar → Update pengiriman
            'control_flow',  // 25: Update pengiriman → Menerima pesanan
            'control_flow',  // 26: Menerima pesanan → Finish
        ],
        explanation: 'Diagram lengkap dengan semua nodes dan control flow untuk setiap transisi.',
        layoutMode: 'activity_gofood',
        slotConfig: [
            // Row 1: Pelanggan (nodes)
            { label: 'Start', gridArea: '1 / 1 / 2 / 2' },
            { label: 'Masuk Aplikasi', gridArea: '1 / 3 / 2 / 4' },
            { label: 'Mencari Makanan', gridArea: '1 / 5 / 2 / 6' },
            { label: 'Memesan Makanan', gridArea: '1 / 7 / 2 / 8' },
            { label: 'Bayar', gridArea: '1 / 9 / 2 / 10' },

            // Row 3: Sistem (nodes) - Verifikasi below Bayar
            { label: 'Verifikasi Pembayaran', gridArea: '3 / 9 / 4 / 10' },

            // Row 5: Admin Resto (nodes) - Siapkan below Verifikasi
            { label: 'Menyiapkan Pesanan', gridArea: '5 / 9 / 6 / 10' },
            { label: 'Update Status', gridArea: '5 / 11 / 6 / 12' },

            // Row 3: Sistem (nodes) - Mencari Driver above Update Status? No, logic flow.
            // Update Status (5/11) -> Cari Driver (3/11).
            { label: 'Mencari Driver', gridArea: '3 / 11 / 4 / 12' },

            // Row 7: Driver (nodes) - Terima below Cari Driver
            { label: 'Terima Pesanan', gridArea: '7 / 11 / 8 / 12' },
            { label: 'Mengantar Pesanan', gridArea: '7 / 13 / 8 / 14' },
            { label: 'Update Pengiriman', gridArea: '7 / 15 / 8 / 16' },

            // Row 1: Pelanggan (nodes) - Menerima above Update Pengiriman
            { label: 'Menerima Pesanan', gridArea: '1 / 15 / 2 / 16' },
            { label: 'Finish', gridArea: '1 / 17 / 2 / 18' },

            // Control Flows (arrows between nodes)
            { label: '→', gridArea: '1 / 2 / 2 / 3' },   // Start → Masuk
            { label: '→', gridArea: '1 / 4 / 2 / 5' },   // Masuk → Mencari
            { label: '→', gridArea: '1 / 6 / 2 / 7' },   // Mencari → Memesan
            { label: '→', gridArea: '1 / 8 / 2 / 9' },   // Memesan → Bayar

            { label: '↓', gridArea: '2 / 9 / 3 / 10' },  // Bayar ↓ Verifikasi
            { label: '↓', gridArea: '4 / 9 / 5 / 10' },  // Verifikasi ↓ Menyiapkan
            { label: '→', gridArea: '5 / 10 / 6 / 11' }, // Menyiapkan → Update
            { label: '↑', gridArea: '4 / 11 / 5 / 12' }, // Update ↑ Mencari Driver
            { label: '↓', gridArea: '6 / 11 / 7 / 12' }, // Mencari ↓ Terima (Spans Row 4-6 gap? Using Row 6 gap)

            { label: '→', gridArea: '7 / 12 / 8 / 13' }, // Terima → Mengantar
            { label: '→', gridArea: '7 / 14 / 8 / 15' }, // Mengantar → Update

            { label: '↑', gridArea: '2 / 15 / 3 / 16' }, // Update ↑ Menerima (Using Row 2 gap - spans many rows visually)
            { label: '→', gridArea: '1 / 16 / 2 / 17' }, // Menerima → Finish
        ]
    }
];

// === USER FLOW COMPONENTS (1 Final Challenge) ===
export const userFlowQuestions: QuizQuestion[] = [
    {
        scenario: 'Tantangan: Alur Login Go Food',
        instruction: 'Susun alur login dengan 2 jalur: Jalur atas (sudah login) langsung ke Home, jalur bawah (belum login) melalui login dulu.',
        targetSequence: [
            'start_end',     // 0: Start
            'flow_arrow',    // 1: →
            'process',       // 2: Splash Screen
            'flow_arrow',    // 3: →
            'decision_uf',   // 4: Decision (Cek Login)
            // Branch Atas: Sudah Login (straight)
            'flow_arrow',    // 5: → (Sudah Login)
            'process',       // 6: Halaman Utama
            // Branch Bawah: Belum Login (down path)
            'flow_arrow',    // 7: ↓ (Belum Login)
            'process',       // 8: Login/Daftar
            'flow_arrow',    // 9: →
            'process',       // 10: Input Kredensial
            'flow_arrow',    // 11: ↑ (merge ke atas)
            // Continue to end
            'flow_arrow',    // 12: →
            'start_end'      // 13: End
        ],
        explanation: 'Decision mengarah ke 2 jalur: atas (sudah login) dan bawah (belum login).',
        layoutMode: 'userflow_branch',
        slotConfig: [
            // Row 1: Main path + upper branch
            // 9 Columns: 
            // 1(Start) 2(A) 3(Splash) 4(A) 5(Dec) 6(A_Top) 7(Home) 8(A_Right) 9(Merge/End)

            { label: 'Start', gridArea: '1 / 1 / 2 / 2' },
            { label: '→', gridArea: '1 / 2 / 2 / 3' },
            { label: 'Splash', gridArea: '1 / 3 / 2 / 4' },
            { label: '→', gridArea: '1 / 4 / 2 / 5' },
            { label: 'Decision', gridArea: '1 / 5 / 2 / 6' }, // Row 1 only

            // Upper branch (Sudah Login)
            { label: '→ Sudah', gridArea: '1 / 6 / 2 / 7' },
            { label: 'Home', gridArea: '1 / 7 / 2 / 8' },
            { label: '→', gridArea: '1 / 8 / 2 / 9' }, // Points to End
            { label: 'End', gridArea: '1 / 9 / 2 / 10' }, // Merge point/End

            // Lower branch (Belum Login)
            { label: '↓ Belum', gridArea: '2 / 5 / 3 / 6' }, // Arrow Down from Decision
            { label: 'Login', gridArea: '2 / 6 / 3 / 7' },
            { label: '→', gridArea: '2 / 7 / 3 / 8' },    // Arrow Right from Login
            { label: 'Kredensial', gridArea: '2 / 8 / 3 / 9' }, // Below Home arrow
            { label: '↑ merge', gridArea: '2 / 9 / 3 / 10' }, // Arrow Up to End

            // Extra: The sequence had one more arrow? Flow Arrow 12.
            // Start(0), A(1), Splash(2), A(3), Dec(4).
            // Bot: AD(5), Log(6), A(7), Kred(8), AU(9).
            // Top: A(10), Home(11).
            // Final: A(12), End(13).
            // Adjusted Map:
            // Top: A(10) -> Home(11).
            // We need A(12) somewhere.
            // If Home(11) is at 1/7. End(13) is at 1/9. 
            // Then A(12) is at 1/8. CORRECT.
            // Kred(8) is at 2/8. AU(9) is at 2/9? No, End is at 1/9. AU needs to be below End?
            // Yes, AU at 2/9 points to 1/9. Correct.
        ]
    }
];
