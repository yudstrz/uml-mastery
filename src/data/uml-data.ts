import { UmlComponent, QuizQuestion } from '../types';

export const umlData: UmlComponent[] = [
    // === USE CASE COMPONENTS ===
    { id: 'actor', type: 'usecase', name: 'Actor (User)', desc: 'Pengguna manusia.', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><circle cx="25" cy="15" r="8"/><path d="M25 23 L25 38 M10 28 L40 28 M15 50 L25 38 L35 50"/></svg>' },
    { id: 'actor_system', type: 'usecase', name: 'Actor (System)', desc: 'Sistem eksternal.', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="40" height="40" rx="4"/><circle cx="25" cy="18" r="5"/><path d="M25 23 L25 35 M15 28 L35 28 M18 42 L25 35 L32 42"/><text x="13" y="12" font-size="6" fill="#2563EB" stroke="none">&lt;&lt;system&gt;&gt;</text></svg>' },
    { id: 'actor_db', type: 'usecase', name: 'Actor (Database)', desc: 'Database eksternal.', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><path d="M10 10 Q25 0 40 10 L40 40 Q25 50 10 40 Z"/><path d="M10 10 Q25 20 40 10"/><text x="14" y="30" font-size="8" fill="#2563EB" stroke="none">DB</text></svg>' },
    { id: 'actor_service', type: 'usecase', name: 'Actor (Service)', desc: 'Web Service/API.', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><circle cx="25" cy="15" r="8"/><path d="M25 23 L25 38 M10 28 L40 28 M15 50 L25 38 L35 50"/><text x="30" y="10" font-size="6" fill="#2563EB" stroke="none">API</text></svg>' },
    { id: 'actor_hardware', type: 'usecase', name: 'Actor (Hardware)', desc: 'Perangkat keras.', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><rect x="10" y="10" width="30" height="30" /><text x="12" y="28" font-size="6" fill="#2563EB" stroke="none">&lt;&lt;hw&gt;&gt;</text></svg>' },
    { id: 'usecase', type: 'usecase', name: 'Use Case', desc: 'Fungsionalitas.', svg: '<svg viewBox="0 0 100 50" fill="white" stroke="#2563EB" stroke-width="2"><ellipse cx="50" cy="25" rx="45" ry="20"/></svg>' },
    { id: 'usecase_abstract', type: 'usecase', name: 'Abstract Use Case', desc: 'Use case abstrak.', svg: '<svg viewBox="0 0 100 50" fill="white" stroke="#2563EB" stroke-width="2"><ellipse cx="50" cy="25" rx="45" ry="20"/><text x="25" y="28" font-style="italic" font-size="10" fill="#2563EB" stroke="none">Abstract</text></svg>' },
    { id: 'assoc_solid', type: 'usecase', name: 'Association', desc: 'Komunikasi 2 arah.', svg: '<svg viewBox="0 0 50 50" stroke="#2563EB" stroke-width="2"><line x1="0" y1="25" x2="50" y2="25"/></svg>' },
    { id: 'assoc_arrow', type: 'usecase', name: 'Directed Assoc', desc: 'Navigasi 1 arah.', svg: '<svg viewBox="0 0 50 50" stroke="#2563EB" stroke-width="2" fill="none"><line x1="0" y1="25" x2="45" y2="25"/><path d="M45 25 L35 20 M45 25 L35 30"/></svg>' },
    { id: 'include', type: 'usecase', name: 'Include', desc: 'Wajib.', svg: '<svg viewBox="0 0 80 40" fill="none" stroke="#2563EB" stroke-width="2"><path d="M0 20 L75 20" stroke-dasharray="4,2"/><path d="M75 20 L65 15 M75 20 L65 25"/><text x="15" y="15" font-size="8" fill="#2563EB" stroke="none">&lt;&lt;include&gt;&gt;</text></svg>' },
    { id: 'extend', type: 'usecase', name: 'Extend', desc: 'Opsional.', svg: '<svg viewBox="0 0 80 40" fill="none" stroke="#2563EB" stroke-width="2"><path d="M0 20 L75 20" stroke-dasharray="4,2"/><path d="M75 20 L65 15 M75 20 L65 25"/><text x="15" y="15" font-size="8" fill="#2563EB" stroke="none">&lt;&lt;extend&gt;&gt;</text></svg>' },
    { id: 'generalization', type: 'usecase', name: 'Generalization', desc: 'Pewarisan.', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><line x1="0" y1="25" x2="40" y2="25"/><path d="M40 25 L30 20 L30 30 Z" fill="#2563EB"/></svg>' },
    { id: 'dependency', type: 'usecase', name: 'Dependency', desc: 'Ketergantungan lemah.', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><line x1="0" y1="25" x2="45" y2="25" stroke-dasharray="3,3"/><path d="M45 25 L35 20 M45 25 L35 30"/></svg>' },
    { id: 'boundary', type: 'usecase', name: 'System Boundary', desc: 'Batasan sistem.', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="40" height="40"/><text x="8" y="15" font-size="6" fill="#2563EB" stroke="none">System</text></svg>' },
    { id: 'note', type: 'usecase', name: 'Note', desc: 'Catatan.', svg: '<svg viewBox="0 0 50 40" fill="#fffbeb" stroke="#2563EB" stroke-width="1"><path d="M5 5 L35 5 L45 15 L45 35 L5 35 Z"/><path d="M35 5 L35 15 L45 15"/></svg>' },
    { id: 'note_link', type: 'usecase', name: 'Note Link', desc: 'Link ke note.', svg: '<svg viewBox="0 0 50 50" fill="none" stroke="#2563EB" stroke-width="1"><line x1="5" y1="45" x2="45" y2="5" stroke-dasharray="2,2"/></svg>' },

    // === ACTIVITY COMPONENTS ===
    { id: 'initial', type: 'activity', name: 'Initial Node', desc: 'Start.', svg: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="#2563EB"/></svg>' },
    { id: 'final', type: 'activity', name: 'Activity Final', desc: 'End.', svg: '<svg viewBox="0 0 40 40" fill="none" stroke="#2563EB" stroke-width="3"><circle cx="20" cy="20" r="15"/><circle cx="20" cy="20" r="8" fill="#2563EB"/></svg>' },
    { id: 'flow_final', type: 'activity', name: 'Flow Final', desc: 'End one path.', svg: '<svg viewBox="0 0 40 40" fill="none" stroke="#2563EB" stroke-width="2"><circle cx="20" cy="20" r="15"/><line x1="10" y1="10" x2="30" y2="30"/><line x1="30" y1="10" x2="10" y2="30"/></svg>' },
    { id: 'action', type: 'activity', name: 'Action', desc: 'Proses.', svg: '<svg viewBox="0 0 80 40" fill="white" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="70" height="30" rx="10"/></svg>' },
    { id: 'loop_node', type: 'activity', name: 'Loop Node', desc: 'Looping.', svg: '<svg viewBox="0 0 80 40" fill="white" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="70" height="30" rx="5"/><path d="M60 30 L70 20 L60 10" fill="none"/><text x="10" y="25" font-size="8" fill="#2563EB" stroke="none">loop</text></svg>' },
    { id: 'call_behavior', type: 'activity', name: 'Call Behavior', desc: 'Sub-proses.', svg: '<svg viewBox="0 0 80 40" fill="white" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="70" height="30" rx="10"/><path d="M55 25 L55 35 M60 25 L60 35 M65 25 L65 35"/></svg>' },
    { id: 'send_signal', type: 'activity', name: 'Send Signal', desc: 'Kirim sinyal.', svg: '<svg viewBox="0 0 80 40" fill="white" stroke="#2563EB" stroke-width="2"><path d="M5 5 L55 5 L75 20 L55 35 L5 35 Z"/></svg>' },
    { id: 'time_event', type: 'activity', name: 'Time Event', desc: 'Timer.', svg: '<svg viewBox="0 0 40 40" fill="none" stroke="#2563EB" stroke-width="2"><path d="M10 10 L30 10 L10 30 L30 30 Z"/><path d="M10 10 L10 30 M30 10 L30 30"/></svg>' },
    { id: 'decision', type: 'activity', name: 'Decision', desc: 'Percabangan.', svg: '<svg viewBox="0 0 50 50" fill="white" stroke="#2563EB" stroke-width="2"><path d="M25 5 L45 25 L25 45 L5 25 Z"/></svg>' },
    { id: 'merge', type: 'activity', name: 'Merge', desc: 'Penggabungan.', svg: '<svg viewBox="0 0 50 50" fill="white" stroke="#2563EB" stroke-width="2"><path d="M25 5 L45 25 L25 45 L5 25 Z"/><text x="18" y="30" font-size="8" fill="#2563EB" stroke="none">merge</text></svg>' },
    { id: 'fork_h', type: 'activity', name: 'Fork (Horiz)', desc: 'Split.', svg: '<svg viewBox="0 0 60 20"><rect x="5" y="8" width="50" height="6" fill="#2563EB"/></svg>' },
    { id: 'join_h', type: 'activity', name: 'Join (Horiz)', desc: 'Sync.', svg: '<svg viewBox="0 0 60 20"><rect x="5" y="8" width="50" height="6" fill="#1e293b"/></svg>' },
    { id: 'fork_v', type: 'activity', name: 'Fork (Vert)', desc: 'Split V.', svg: '<svg viewBox="0 0 20 60"><rect x="8" y="5" width="6" height="50" fill="#2563EB"/></svg>' },
    { id: 'join_v', type: 'activity', name: 'Join (Vert)', desc: 'Sync V.', svg: '<svg viewBox="0 0 20 60"><rect x="8" y="5" width="6" height="50" fill="#1e293b"/></svg>' },
    { id: 'object_node', type: 'activity', name: 'Object Node', desc: 'Data.', svg: '<svg viewBox="0 0 60 40" fill="white" stroke="#2563EB" stroke-width="2"><rect x="5" y="5" width="50" height="30"/></svg>' },
    { id: 'control_flow', type: 'activity', name: 'Control Flow', desc: 'Alur.', svg: '<svg viewBox="0 0 50 20" stroke="#2563EB" stroke-width="2" fill="none"><line x1="0" y1="10" x2="40" y2="10"/><path d="M40 10 L35 5 M40 10 L35 15"/></svg>' },
    { id: 'object_flow', type: 'activity', name: 'Object Flow', desc: 'Alur Data.', svg: '<svg viewBox="0 0 50 20" stroke="#2563EB" stroke-width="2" fill="none"><line x1="0" y1="10" x2="40" y2="10"/><path d="M40 10 L35 5 M40 10 L35 15"/></svg>' },
    { id: 'expansion_region', type: 'activity', name: 'Exp. Region', desc: 'Koleksi.', svg: '<svg viewBox="0 0 60 40" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="3,3"><rect x="5" y="5" width="50" height="30" rx="5"/><path d="M10 5 L10 35 M20 5 L20 35 M30 5 L30 35 M40 5 L40 35 M50 5 L50 35"/></svg>' },
    { id: 'partition_v', type: 'activity', name: 'Swimlane', desc: 'Partisi.', svg: '<svg viewBox="0 0 50 60" fill="none" stroke="#2563EB" stroke-width="1"><rect x="5" y="5" width="40" height="50"/><line x1="5" y1="15" x2="45" y2="15"/></svg>' },
    { id: 'exception_handler', type: 'activity', name: 'Exception', desc: 'Error.', svg: '<svg viewBox="0 0 50 20" stroke="#ef4444" stroke-width="2" fill="none"><path d="M0 10 L10 5 L20 15 L30 5 L40 15 L50 10"/></svg>' }
];

export const useCaseQuestions: QuizQuestion[] = [
    {
        scenario: 'Akses API Eksternal',
        instruction: 'Sistem harus mengambil data dari layanan pembayaran (Service Actor).',
        targetSequence: ['usecase', 'assoc_solid', 'actor_service'],
        explanation: 'Actor Service digunakan untuk sistem eksternal non-manusia.',
        layoutMode: 'boundary'
    },
    {
        scenario: 'Interaksi Database',
        instruction: 'Use Case "Simpan Data" menyimpan ke Database eksternal.',
        targetSequence: ['usecase', 'assoc_arrow', 'actor_db'],
        explanation: 'Panah mengarah ke DB karena Use Case yang mengirim data.',
        layoutMode: 'boundary'
    },
    {
        scenario: 'Pewarisan Use Case',
        instruction: '"Bayar Kredit" mewarisi sifat "Bayar" (Generalization).',
        targetSequence: ['usecase', 'generalization', 'usecase'],
        explanation: 'Panah Generalization menunjuk dari Anak ke Induk.'
    },
    {
        scenario: 'Include Wajib',
        instruction: 'Saat "Login", sistem wajib "Verifikasi Password".',
        targetSequence: ['usecase', 'include', 'usecase'],
        explanation: 'Include menandakan relasi yang selalu dijalankan (wajib).'
    },
    {
        scenario: 'Extend Opsional',
        instruction: 'Saat "Checkout", user BISA memilih "Asuransi".',
        targetSequence: ['usecase', 'extend', 'usecase'],
        explanation: 'Extend digunakan untuk fitur opsional.'
    },
    {
        scenario: 'Hardware Sensor',
        instruction: 'Sistem menerima data dari Sensor Suhu (Hardware Actor).',
        targetSequence: ['actor_hardware', 'assoc_arrow', 'usecase'],
        explanation: 'Sensor adalah aktor perangkat keras.'
    },
    {
        scenario: 'Pewarisan Actor',
        instruction: 'Admin adalah bentuk khusus dari User biasa.',
        targetSequence: ['actor', 'generalization', 'actor'],
        explanation: 'Generalization juga berlaku antar Aktor.'
    },
    {
        scenario: 'System Boundary',
        instruction: 'Gambarkan Use Case berada di dalam Batasan Sistem.',
        targetSequence: ['boundary', 'usecase'],
        explanation: 'Boundary memisahkan internal sistem dengan aktor luar.',
        override: true
    },
    {
        scenario: 'Ketergantungan',
        instruction: 'Use Case A bergantung lemah pada Use Case B.',
        targetSequence: ['usecase', 'dependency', 'usecase'],
        explanation: 'Garis putus-putus panah terbuka untuk dependensi umum.'
    },
    {
        scenario: 'Catatan (Note)',
        instruction: 'Tambahkan catatan penjelasan pada Use Case.',
        targetSequence: ['usecase', 'note_link', 'note'],
        explanation: 'Gunakan Note Link (putus-putus) untuk menghubungkan catatan.'
    }
];

export const activityQuestions: QuizQuestion[] = [
    {
        scenario: 'Proses Bisnis Sederhana',
        instruction: 'Mulai -> Terima Pesanan -> Selesai.',
        targetSequence: ['initial', 'control_flow', 'action', 'control_flow', 'final'],
        explanation: 'Alur dasar Activity Diagram.',
        layoutMode: 'swimlane',
        swimlaneHeaders: ['User', 'System']
    },
    {
        scenario: 'Percabangan (Decision)',
        instruction: 'Cek Stok -> (Ada/Tidak) -> Proses Selanjutnya.',
        targetSequence: ['action', 'control_flow', 'decision'],
        explanation: 'Decision Node memecah alur berdasarkan kondisi.',
        layoutMode: 'swimlane',
        swimlaneHeaders: ['System']
    },
    {
        scenario: 'Paralelisme (Fork)',
        instruction: 'Mulai -> Split menjadi 2 proses bersamaan.',
        targetSequence: ['initial', 'control_flow', 'fork_h'],
        explanation: 'Fork Node membagi satu token menjadi beberapa token paralel.'
    },
    {
        scenario: 'Sinkronisasi (Join)',
        instruction: 'Tunggu 2 proses selesai -> Gabung -> Lanjut.',
        targetSequence: ['action', 'join_h', 'action'],
        explanation: 'Join Node menunggu semua token masuk sebelum melanjutkan.'
    },
    {
        scenario: 'Pengulangan (Loop)',
        instruction: 'Validasi -> (Gagal) Ulangi -> (Sukses) Lanjut.',
        targetSequence: ['action', 'control_flow', 'decision', 'control_flow', 'action'],
        explanation: 'Loop dibentuk dengan mengarahkan Decision kembali ke aktivitas sebelumnya.'
    },
    {
        scenario: 'Kirim Sinyal',
        instruction: 'Proses -> Kirim Notifikasi (Signal).',
        targetSequence: ['action', 'control_flow', 'send_signal'],
        explanation: 'Send Signal (Pentagon cembung) untuk event asinkron.'
    },
    {
        scenario: 'Timer Event',
        instruction: 'Tunggu 1 Jam -> Lanjut Proses.',
        targetSequence: ['time_event', 'control_flow', 'action'],
        explanation: 'Time Event (Jam Pasir) untuk trigger berbasis waktu.'
    },
    {
        scenario: 'Alur Objek (Dokumen)',
        instruction: 'Buat Laporan (Action) -> Dokumen Laporan (Object) -> Review.',
        targetSequence: ['action', 'object_flow', 'object_node', 'object_flow', 'action'],
        explanation: 'Object Flow menghubungkan Action dengan Object Node.'
    },
    {
        scenario: 'Penanganan Error',
        instruction: 'Proses Transaksi -> Error -> Rollback.',
        targetSequence: ['action', 'exception_handler', 'action'],
        explanation: 'Exception Handler (Zigzag) menangkap kesalahan proses.',
        layoutMode: 'swimlane',
        swimlaneHeaders: ['Trans.', 'Error Log']
    },
    {
        scenario: 'Swimlane (Partition)',
        instruction: 'Tentukan bahwa aksi ini dilakukan oleh "Gudang".',
        targetSequence: ['partition_v', 'action'],
        explanation: 'Swimlane mempartisi diagram berdasarkan peran/departemen.',
        override: true
    }
];
