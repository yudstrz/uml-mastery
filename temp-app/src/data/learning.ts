export interface LearningSlide {
    icon: string;
    title: string;
    content: string; // HTML string
}

export const learningSlides: LearningSlide[] = [
    {
        icon: "💡",
        title: "1. Dari Ide ke Aplikasi",
        content: `
            <div class="visual-box bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 my-6 flex flex-col items-center">
                <div class="visual-flow flex flex-wrap justify-center items-center gap-4">
                    <span class="flow-item bg-white px-4 py-2 rounded-lg border border-slate-200 font-bold text-indigo-600 shadow-sm">Mimpi / Ide</span>
                    <span class="flow-arrow text-slate-400 font-bold text-xl">➜</span>
                    <span class="flow-item bg-white px-4 py-2 rounded-lg border border-slate-200 font-bold text-indigo-600 shadow-sm">Analisis</span>
                    <span class="flow-arrow text-slate-400 font-bold text-xl">➜</span>
                    <span class="flow-item bg-white px-4 py-2 rounded-lg border border-slate-200 font-bold text-indigo-600 shadow-sm">UML (Rancang)</span>
                    <span class="flow-arrow text-slate-400 font-bold text-xl">➜</span>
                    <span class="flow-item bg-white px-4 py-2 rounded-lg border border-slate-200 font-bold text-indigo-600 shadow-sm">Aplikasi</span>
                </div>
            </div>
            <p class="mb-4">Jangan langsung menulis kode! Membuat aplikasi itu seperti membangun rumah. Anda butuh gambar arsitek sebelum memanggil tukang batu.</p>
            <p>Alur yang benar memastikan aplikasi yang kita buat benar-benar berguna dan menyelesaikan masalah.</p>
        `
    },
    {
        icon: "⚠️",
        title: "2. Bahaya Tanpa Rencana",
        content: `
            <div class="visual-box bg-red-50 p-6 rounded-xl border border-red-200 my-6 flex flex-col items-center">
                <span class="text-5xl mb-2">🏚️ vs 🏠</span>
                <div class="text-red-800 font-bold">Tanpa Rencana = Runtuh</div>
            </div>
            <p class="mb-4">Tahukah kamu? Hampir <b class="font-bold">47% proyek IT gagal</b> karena kebutuhan yang tidak jelas di awal.</p>
            <ul class="list-disc ml-6 mb-4 space-y-2">
                <li>❌ Biaya membengkak</li>
                <li>❌ Waktu molor</li>
                <li>❌ Fitur tidak terpakai</li>
            </ul>
            <p>Analisis kebutuhan adalah pondasi agar tidak "salah bangun".</p>
        `
    },
    {
        icon: "👷‍♂️",
        title: "3. Analis vs Developer",
        content: `
            <p class="mb-4">Dalam proyek besar, peran dibagi dua. Jangan tertukar!</p>
            <div class="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                <table class="w-full text-sm text-left">
                    <thead class="bg-indigo-600 text-white">
                        <tr>
                            <th class="p-3">Aspek</th>
                            <th class="p-3">Analis (Arsitek)</th>
                            <th class="p-3">Developer (Tukang)</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="border-b border-slate-100">
                            <td class="p-3 font-semibold">Fokus</td>
                            <td class="p-3">"APA yang ingin dicapai?" (Masalah)</td>
                            <td class="p-3">"BAGAIMANA cara buatnya?" (Teknis)</td>
                        </tr>
                        <tr class="border-b border-slate-100 bg-slate-50">
                            <td class="p-3 font-semibold">Output</td>
                            <td class="p-3">Dokumen, Diagram UML</td>
                            <td class="p-3">Kode Program, Database</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-semibold">Mindset</td>
                            <td class="p-3">Bisnis & Strategi</td>
                            <td class="p-3">Logika & Algoritma</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        icon: "👂",
        title: "4. Langkah 1: Mendengar",
        content: `
            <p class="mb-4">Seorang analis harus menjadi pendengar yang baik sebelum merancang solusi.</p>
            <div class="visual-box bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 my-6 flex justify-center">
                <div class="flex gap-8 text-center">
                    <div>
                        <div class="text-4xl mb-2">❓</div>
                        <b class="block text-indigo-900">Why (Mengapa)?</b>
                        <small class="text-slate-500">Tujuan Bisnis</small>
                    </div>
                    <div>
                        <div class="text-4xl mb-2">🎯</div>
                        <b class="block text-indigo-900">What (Apa)?</b>
                        <small class="text-slate-500">Kebutuhan Sistem</small>
                    </div>
                </div>
            </div>
            <p>Contoh: "Mengapa butuh sistem antrean?" -> "Agar pasien tidak menumpuk di lobi." (Why) -> "Sistem harus bisa booking online." (What).</p>
        `
    },
    {
        icon: "💎",
        title: "5. Value & Constraints",
        content: `
            <p class="mb-4">Sebelum mulai, kita harus tahu "Harga" dan "Batasan".</p>
            <div class="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                <table class="w-full text-sm text-left">
                    <thead class="bg-indigo-600 text-white">
                        <tr>
                            <th class="p-3">Kategori</th>
                            <th class="p-3">Penjelasan</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="border-b border-slate-100">
                            <td class="p-3 font-semibold">Business Value</td>
                            <td class="p-3">Keuntungan apa yang didapat? Bisa berupa uang (Hemat Biaya) atau Citra (Klinik jadi modern).</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-semibold">Constraints</td>
                            <td class="p-3">Batasan proyek. Misal: "Harus jadi dalam 3 bulan" (Waktu) atau "Server harus di Indonesia" (Regulasi).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        icon: "⚖️",
        title: "6. Fitur vs Kualitas",
        content: `
            <p class="mb-4">Sistem itu punya dua sisi mata uang. Bukan cuma soal "Bisa apa", tapi "Seberapa bagus".</p>
            <div class="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                <table class="w-full text-sm text-left">
                    <thead class="bg-indigo-600 text-white">
                        <tr>
                            <th class="p-3">Tipe</th>
                            <th class="p-3">Deskripsi</th>
                            <th class="p-3">Contoh</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="border-b border-slate-100">
                            <td class="p-3 font-semibold">Fungsional (Fitur)</td>
                            <td class="p-3">Apa yang sistem LAKUKAN.</td>
                            <td class="p-3">Login, Cetak Struk, Hitung Total.</td>
                        </tr>
                        <tr class="bg-slate-50">
                            <td class="p-3 font-semibold">Non-Fungsional (Kualitas)</td>
                            <td class="p-3">Seberapa BAIK kerjanya.</td>
                            <td class="p-3">Loading < 2 detik, Aman dari Hacker, Mudah dipakai di HP.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        icon: "🗺️",
        title: "7. Apa itu UML?",
        content: `
            <div class="visual-box bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 my-6 flex flex-col items-center">
                <span class="text-5xl">📝 + 🤝 = ✅</span>
            </div>
            <p class="mb-2"><b>UML (Unified Modeling Language)</b> adalah bahasa standar internasional berupa diagram visual.</p>
            <p class="mb-2"><b>Fungsinya:</b> Sebagai "Bahasa Penengah" antara orang bisnis (Klien) dan orang teknis (Programmer) agar tidak salah paham.</p>
            <p>UML adalah cetak biru (blueprint) software kita.</p>
        `
    },
    {
        icon: "👤",
        title: "8. Use Case Diagram",
        content: `
            <p class="mb-4">Ini adalah diagram paling pertama yang dibuat. Sangat sederhana.</p>
            <div class="visual-box bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 my-6 flex justify-center">
                <svg width="200" height="100" viewBox="0 0 200 100">
                    <!-- Actor -->
                    <circle cx="30" cy="30" r="10" fill="none" class="stroke-indigo-600" stroke-width="2"/>
                    <line x1="30" y1="40" x2="30" y2="70" class="stroke-indigo-600" stroke-width="2"/>
                    <line x1="10" y1="50" x2="50" y2="50" class="stroke-indigo-600" stroke-width="2"/>
                    <line x1="30" y1="70" x2="10" y2="90" class="stroke-indigo-600" stroke-width="2"/>
                    <line x1="30" y1="70" x2="50" y2="90" class="stroke-indigo-600" stroke-width="2"/>
                    <!-- Line -->
                    <line x1="60" y1="50" x2="110" y2="50" class="stroke-indigo-600" stroke-width="2"/>
                    <!-- Use Case -->
                    <ellipse cx="150" cy="50" rx="40" ry="20" class="fill-indigo-50 stroke-indigo-600" stroke-width="2"/>
                    <text x="150" y="55" font-size="10" text-anchor="middle" class="fill-indigo-600">Login</text>
                </svg>
            </div>
            <p class="mb-2"><b>Fokus:</b> Menjawab pertanyaan "SIAPA bisa melakukan APA?".</p>
            <p>Diagram ini tidak peduli urutan waktu, hanya daftar fitur yang tersedia untuk setiap pengguna.</p>
        `
    },
    {
        icon: "🧩",
        title: "9. Komponen Use Case",
        content: `
            <div class="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                <table class="w-full text-sm text-left">
                    <thead class="bg-indigo-600 text-white">
                        <tr>
                            <th class="p-3 w-1/4">Simbol</th>
                            <th class="p-3">Nama & Fungsi</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="border-b border-slate-100">
                            <td class="p-3 text-center text-xl">👤</td>
                            <td class="p-3"><b>Actor</b>: Siapapun yang berinteraksi dengan sistem (User, Admin, atau Sistem Lain).</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-3 text-center text-xl">⭕</td>
                            <td class="p-3"><b>Use Case</b>: Fungsionalitas / Fitur spesifik (misal: "Tarik Tunai").</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-3 text-center text-xl">──</td>
                            <td class="p-3"><b>Association</b>: Garis penghubung antara Aktor dan Use Case.</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-center text-xl">⬜</td>
                            <td class="p-3"><b>Boundary</b>: Batas sistem. Memisahkan apa yang ada di dalam aplikasi dan di luar (dunia nyata).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        icon: "🔗",
        title: "10. Relasi: Include vs Extend",
        content: `
            <p class="mb-4">Dalam Use Case, ada dua hubungan spesial yang sering muncul:</p>
            <div class="overflow-hidden rounded-lg border border-slate-200 shadow-sm mb-4">
                <table class="w-full text-sm text-left">
                    <thead class="bg-indigo-600 text-white">
                        <tr>
                            <th class="p-3">Relasi</th>
                            <th class="p-3">Sifat</th>
                            <th class="p-3">Contoh</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="border-b border-slate-100">
                            <td class="p-3 font-mono text-indigo-700">&lt;&lt;include&gt;&gt;</td>
                            <td class="p-3"><b>Wajib</b>. Use Case A tidak bisa jalan tanpa B.</td>
                            <td class="p-3">"Transfer" ➜ <i>include</i> ➜ "Cek Saldo" (Saldo wajib dicek).</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-mono text-indigo-700">&lt;&lt;extend&gt;&gt;</td>
                            <td class="p-3"><b>Opsional</b>. Use Case B hanya jalan jika kondisi tertentu.</td>
                            <td class="p-3">"Cek Saldo" ➜ <i>extend</i> ➜ "Cetak Struk" (Kalau mau saja).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="text-center text-sm text-slate-500 italic">
                Tips: Include = "Harus Ada", Extend = "Boleh Ada"
            </div>
        `
    },
    {
        icon: "🔄",
        title: "11. Activity Diagram",
        content: `
            <p class="mb-4">Kalau Use Case itu "Daftar Menu", maka Activity Diagram adalah "Resep Masak"-nya.</p>
            <div class="visual-box bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 my-6 flex flex-col items-center">
                 <div class="visual-flow flex flex-wrap justify-center items-center gap-4">
                    <span class="flow-item bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold shadow-sm">Mulai</span>
                    <span class="flow-arrow text-slate-400 font-bold text-xl">➜</span>
                    <span class="flow-item bg-white px-4 py-2 rounded-lg border border-slate-200 font-bold text-indigo-600 shadow-sm">Input</span>
                    <span class="flow-arrow text-slate-400 font-bold text-xl">➜</span>
                    <span class="flow-item bg-white px-4 py-2 rounded-lg border border-slate-200 font-bold text-indigo-600 shadow-sm">Cek?</span>
                    <span class="flow-arrow text-slate-400 font-bold text-xl">➜</span>
                    <span class="flow-item bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-sm">Selesai</span>
                </div>
            </div>
            <p class="mb-2">Diagram ini menggambarkan alur kerja (workflow) langkah demi langkah, termasuk logika percabangan (IF/ELSE).</p>
            <p>Sangat mirip dengan Flowchart klasik.</p>
        `
    },
    {
        icon: "🔷",
        title: "12. Simbol Activity",
        content: `
            <div class="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                <table class="w-full text-sm text-left">
                    <thead class="bg-indigo-600 text-white">
                        <tr>
                            <th class="p-3 w-1/4">Simbol Visual</th>
                            <th class="p-3">Arti</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="border-b border-slate-100">
                            <td class="p-3 text-center text-xl">⚫</td>
                            <td class="p-3"><b>Start Node</b>: Titik di mana proses dimulai.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-3 text-center text-xl">🟥</td>
                            <td class="p-3"><b>Action</b>: Sebuah kegiatan atau aktivitas yang dilakukan.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-3 text-center text-xl">🔶</td>
                            <td class="p-3"><b>Decision</b>: Percabangan. Misal: "Saldo Cukup?" (Ya ke kiri, Tidak ke kanan).</td>
                        </tr>
                        <tr>
                            <td class="p-3 text-center text-xl">🎯</td>
                            <td class="p-3"><b>Final Node</b>: Titik proses berakhir/selesai.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        icon: "🏗️",
        title: "13. Class Diagram",
        content: `
            <p class="mb-4">Ini adalah diagram paling teknis. Menggambarkan struktur data statis.</p>
            <div class="visual-box bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 my-6 flex justify-center">
                <div class="border-2 border-indigo-600 w-40 bg-white">
                    <div class="p-2 border-b border-indigo-600 font-bold bg-indigo-50 text-center">Siswa</div>
                    <div class="p-2 border-b border-indigo-600 text-left text-xs">
                        - nama: String<br/>
                        - nis: Int
                    </div>
                    <div class="p-2 text-left text-xs">
                        + belajar()<br/>
                        + ujian()
                    </div>
                </div>
            </div>
            <p class="mb-2">Diagram ini menjadi cetak biru untuk pembuatan <b>Database</b> dan <b>Kelas Pemrograman</b> (OOP).</p>
            <p>Terdiri dari 3 bagian: Nama Kelas, Atribut (Data), dan Operasi (Fungsi).</p>
        `
    },
    {
        icon: "⏱️",
        title: "14. Sequence Diagram",
        content: `
            <p class="mb-4">Menggambarkan interaksi antar objek berdasarkan <b>urutan waktu</b>.</p>
            <div class="visual-box bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 my-6 flex flex-col items-center">
                <span class="text-sm">User ➜ (Login) ➜ Server ➜ (Cek DB) ➜ Database</span>
                <br/>
                <span class="text-slate-500 text-xs">⬇️ Waktu berjalan ke bawah ⬇️</span>
            </div>
            <p class="mb-2">Menjelaskan detail: "Siapa mengirim pesan ke siapa, dan kapan?".</p>
            <p>Cocok untuk merancang logika pertukaran data (API) yang kompleks.</p>
        `
    },
    {
        icon: "🏢",
        title: "15. Arsitektur Sistem (Layers)",
        content: `
            <p class="mb-4">Sistem yang baik dibagi menjadi lapisan-lapisan (Layers) agar rapi.</p>
            <div class="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                <table class="w-full text-sm text-left">
                    <thead class="bg-indigo-600 text-white">
                        <tr>
                            <th class="p-3">Layer</th>
                            <th class="p-3">Analogi Toko</th>
                            <th class="p-3">Fungsi IT</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="border-b border-slate-100">
                            <td class="p-3 font-semibold">Presentation</td>
                            <td class="p-3">Etalase / Kasir</td>
                            <td class="p-3"><b>UI (User Interface)</b>: Apa yang user lihat.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-3 font-semibold">Business Logic</td>
                            <td class="p-3">Manajer Toko</td>
                            <td class="p-3"><b>Logika Aplikasi</b>: Perhitungan, Validasi aturan.</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-semibold">Data Layer</td>
                            <td class="p-3">Gudang</td>
                            <td class="p-3"><b>Database</b>: Tempat simpan data aman.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        icon: "🚀",
        title: "16. Kesimpulan: Alur Sukses",
        content: `
            <div class="bg-emerald-50 border border-emerald-400 p-4 rounded-lg text-center font-bold text-emerald-800 mb-6">
                Resep Sukses Proyek IT
            </div>
            <ol class="list-decimal ml-6 space-y-4 mb-6">
                <li><b>Mimpi (Ide):</b> Temukan masalah yang ingin dipecahkan.</li>
                <li><b>Analisis:</b> Pahami kebutuhan (Why & What).</li>
                <li><b>Rancang (UML):</b> Buat peta visual (Use Case, Activity, dll).</li>
                <li><b>Konstruksi (Coding):</b> Bangun aplikasi berdasarkan rancangan.</li>
            </ol>
            <p class="text-center font-bold text-indigo-600 text-lg">Selamat! Anda siap menjadi Arsitek Sistem. 🎓</p>
        `
    }
];
