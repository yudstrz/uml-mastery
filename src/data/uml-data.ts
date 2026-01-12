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
        instruction: 'Susun kembali Use Case Diagram Sistem Go Food dengan lengkap. Tempatkan Aktor dan Use Case pada posisi yang tepat sesuai alur bisnis.',
        // Urutan: Pelanggan (0), Admin Resto (1), Driver (2), Usecases...
        targetSequence: [
            'actor',       // 0: Pelanggan
            'actor',       // 1: Admin Resto
            'actor',       // 2: Driver
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
        ],
        explanation: 'Diagram Go Food melibatkan interaksi kompleks antara Pelanggan, Admin Resto, dan Driver dengan berbagai Use Case utama dan relasi Include/Extend.',
        layoutMode: 'gofood',
        slotConfig: [
            { label: 'Pelanggan', gridArea: '1 / 1 / 3 / 2' }, // Left Top
            { label: 'Admin Resto', gridArea: '9 / 1 / 11 / 2' }, // Left Bottom
            { label: 'Driver', gridArea: '6 / 5 / 8 / 6' }, // Right Middle

            // Use Cases (Center Column / System Box)
            { label: 'Login', gridArea: '1 / 3 / 2 / 4' },
            { label: 'Mencari makanan', gridArea: '2 / 3 / 3 / 4' },
            { label: 'Melakukan pemesanan', gridArea: '3 / 3 / 4 / 4' },
            { label: 'Melakukan pembayaran', gridArea: '4 / 3 / 5 / 4' },

            { label: 'Validasi Pembayaran', gridArea: '5 / 3 / 6 / 4' }, // Include from Pembayaran? Layout wise
            { label: 'Pakai promo', gridArea: '3 / 4 / 4 / 5' }, // Right of Pemesanan (Extend)

            { label: 'Mengelola Menu', gridArea: '8 / 3 / 9 / 4' },
            { label: 'Menerima Pesanan', gridArea: '9 / 3 / 10 / 4' },
            { label: 'Menyiapkan makanan', gridArea: '10 / 3 / 11 / 4' },

            { label: 'Menerima pesanan', gridArea: '6 / 4 / 7 / 5' }, // Driver related, slightly right
            { label: 'Mengambil makanan', gridArea: '7 / 4 / 8 / 5' },
            { label: 'Mengantar ke pelanggan', gridArea: '8 / 4 / 9 / 5' },
        ]
    }
];

// === ACTIVITY COMPONENTS (Only Final Challenge) ===
export const activityQuestions: QuizQuestion[] = [
    {
        scenario: 'Tantangan Akhir: Alur Pemesanan Go Food',
        instruction: 'Susun kembali Activity Diagram untuk proses pemesanan makanan via Go Food. Perhatikan alur antar swimlane (Pelanggan, Sistem, Admin Resto, Driver).',
        // 13 components based on flow
        targetSequence: [
            'initial',       // 0: Start (Pelanggan)
            'action',        // 1: Masuk aplikasi
            'action',        // 2: Mencari makanan
            'action',        // 3: Memesan makanan
            'action',        // 4: Melakukan pembayaran
            'action',        // 5: Verifikasi pembayaran (Sistem)
            'action',        // 6: Menyiapkan pesanan (Admin Resto)
            'action',        // 7: Update status pesanan (Admin Resto)
            'action',        // 8: Mencari driver (Sistem)
            'action',        // 9: Terima pesanan (Driver)
            'action',        // 10: Mengantar pesanan (Driver)
            'action',        // 11: Update status pengiriman (Driver)
            'action',        // 12: Menerima pesanan (Pelanggan) - kanan atas
            'final'          // 13: Final (Pelanggan)
        ],
        explanation: 'Proses melibatkan 4 pihak. Dimulai dari Pelanggan, diproses Sistem dan Resto, diantar Driver, dan kembali ke Pelanggan.',
        layoutMode: 'activity_gofood',
        slotConfig: [
            // Row 1: Pelanggan
            { label: 'Start', gridArea: '1 / 1 / 2 / 2' },
            { label: 'Masuk Aplikasi', gridArea: '1 / 2 / 2 / 3' },
            { label: 'Mencari Makanan', gridArea: '1 / 3 / 2 / 4' },
            { label: 'Memesan Makanan', gridArea: '1 / 4 / 2 / 5' },
            { label: 'Bayar', gridArea: '1 / 5 / 2 / 6' },

            // Row 2: Sistem (Verifikasi) -> Down from Bayar
            { label: 'Verifikasi Pembayaran', gridArea: '2 / 5 / 3 / 6' },

            // Row 3: Admin Resto (Siapkan) -> Down from Verifikasi
            { label: 'Menyiapkan Pesanan', gridArea: '3 / 5 / 4 / 6' },
            { label: 'Update Status', gridArea: '3 / 6 / 4 / 7' },

            // Row 2: Sistem (Cari Driver) -> Up from Update Status
            { label: 'Mencari Driver', gridArea: '2 / 6 / 3 / 7' },

            // Row 4: Driver (Flow) -> Down from Cari Driver
            { label: 'Terima Pesanan', gridArea: '4 / 6 / 5 / 7' },
            { label: 'Mengantar Pesanan', gridArea: '4 / 7 / 5 / 8' },
            { label: 'Update Pengiriman', gridArea: '4 / 8 / 5 / 9' },

            // Row 1: Pelanggan (Terima) -> Up from Update Pengiriman
            { label: 'Menerima Pesanan', gridArea: '1 / 8 / 2 / 9' },
            { label: 'Finish', gridArea: '1 / 9 / 2 / 10' }
        ]
    }
];

// === USER FLOW COMPONENTS (3 Separate Flows) ===
export const userFlowQuestions: QuizQuestion[] = [
    {
        scenario: 'Alur 1: Masuk ke Aplikasi',
        instruction: 'Susun alur login aplikasi Go Food dari membuka aplikasi hingga siap mencari makanan. Perhatikan ada 2 jalur dari Decision.',
        targetSequence: [
            'start_end',     // 0: Start (Klik Icon Aplikasi)
            'flow_arrow',    // 1
            'process',       // 2: Tampilan Splash Screen
            'flow_arrow',    // 3
            'decision_uf',   // 4: Cek Belum Login
            // Branch 1: Belum Login
            'flow_arrow',    // 5: arrow ke bawah (Belum Login)
            'process',       // 6: Halaman Login/Daftar
            'flow_arrow',    // 7
            'process',       // 8: Input Kredensial
            'flow_arrow',    // 9: arrow ke atas merge
            // Branch 2 dari decision langsung ke Home (Sudah Login)
            'flow_arrow',    // 10: arrow ke kanan (Sudah Login)
            'process',       // 11: Halaman Utama/Home
            'flow_arrow',    // 12
            'start_end'      // 13: End (Siap Mencari Makanan)
        ],
        explanation: 'Alur dimulai dari klik icon aplikasi, tampil splash screen, cek status login. Jika belum login: masuk halaman login/daftar → input kredensial. Jika sudah login: langsung ke halaman utama.',
        layoutMode: 'userflow_horizontal'
    },
    {
        scenario: 'Alur 2: Mencari Makanan',
        instruction: 'Susun alur pencarian makanan dari masuk aplikasi hingga melihat detail makanan.',
        targetSequence: [
            'start_end',     // 0: Start (Masuk Aplikasi)
            'flow_arrow',    // 1
            'process',       // 2: Klik Kolom Pencarian/Kategori
            'flow_arrow',    // 3
            'process',       // 4: Input Nama Makanan/Resto
            'flow_arrow',    // 5
            'process',       // 6: Sistem Menampilkan Hasil
            'flow_arrow',    // 7
            'start_end'      // 8: End (Detail Makanan)
        ],
        explanation: 'Alur pencarian dimulai dari aplikasi, klik kolom pencarian, input nama makanan/resto, sistem menampilkan hasil, lalu menuju detail makanan.',
        layoutMode: 'userflow_horizontal'
    },
    {
        scenario: 'Alur 3: Memesan Makanan',
        instruction: 'Susun alur pemesanan makanan dari memilih makanan hingga halaman pembayaran.',
        targetSequence: [
            'start_end',     // 0: Start (Pilih Makanan)
            'flow_arrow',    // 1
            'process',       // 2: Tentukan Jumlah/Catatan
            'flow_arrow',    // 3
            'process',       // 4: Klik Tambah ke Keranjang
            'flow_arrow',    // 5
            'process',       // 6: Klik Checkout
            'flow_arrow',    // 7
            'start_end'      // 8: End (Halaman Pembayaran)
        ],
        explanation: 'Alur pemesanan dimulai dari memilih makanan, tentukan jumlah/catatan, tambah ke keranjang, klik checkout, lalu ke halaman pembayaran.',
        layoutMode: 'userflow_horizontal'
    }
];
