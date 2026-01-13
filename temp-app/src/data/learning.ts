export interface LearningSlide {
    icon: string;
    title: string;
    content: string;
}

export const learningSlides: LearningSlide[] = [
    {
        icon: "💡",
        title: "1. Dari Ide ke Aplikasi",
        content: ` <div class="visual-box" > <div class="visual-flow" > <span class="flow-item" >Mimpi / Ide</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >Analisis</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >UML (Rancang)</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >Aplikasi</span> </div> </div> <p>Jangan langsung menulis kode ! Membuat aplikasi itu seperti membangun rumah. Anda butuh gambar arsitek sebelum memanggil tukang batu.</p> <p>Alur yang benar memastikan aplikasi yang kita buat benar-benar berguna dan menyelesaikan masalah.</p> `
    },
    {
        icon: "⚠️",
        title: "2. Bahaya Tanpa Rencana",
        content: ` <div class="visual-box" style="background:#FEF2F2; border-color:#EF4444;" > <span style="font-size:3rem; margin-bottom:0.5rem;" >🏚️ vs 🏠</span> <div style="color:#991B1B; font-weight:bold;" >Tanpa Rencana=Runtuh</div> </div> <p>Tahukah kamu? Hampir <b>47% proyek IT gagal</b> karena kebutuhan yang tidak jelas di awal.</p> <ul style="margin-left:1.5rem; margin-bottom:1rem;" > <li>❌ Biaya membengkak</li> <li>❌ Waktu molor</li> <li>❌ Fitur tidak terpakai</li> </ul> <p>Analisis kebutuhan adalah pondasi agar tidak "salah bangun" .</p> `
    },
    {
        icon: "👷‍♂️",
        title: "3. Analis vs Developer",
        content: ` <p>Dalam proyek besar, peran dibagi dua. Jangan tertukar !</p> <table class="slide-table" > <tr> <th>Aspek</th> <th>Analis (Arsitek)</th> <th>Developer (Tukang)</th> </tr> <tr> <td><b>Fokus</b></td> <td>"APA yang ingin dicapai?"(Masalah)</td> <td>"BAGAIMANA cara buatnya?"(Teknis)</td> </tr> <tr> <td><b>Output</b></td> <td>Dokumen, Diagram UML</td> <td>Kode Program, Database</td> </tr> <tr> <td><b>Mindset</b></td> <td>Bisnis & Strategi</td> <td>Logika & Algoritma</td> </tr> </table> `
    },
    {
        icon: "👂",
        title: "4. Langkah 1: Mendengar",
        content: ` <p>Seorang analis harus menjadi pendengar yang baik sebelum merancang solusi.</p> <div class="visual-box" > <div style="display:flex; gap:2rem;" > <div> <div style="font-size:2rem;" >❓</div> <b>Why (Mengapa)?</b><br> <small>Tujuan Bisnis</small> </div> <div> <div style="font-size:2rem;" >🎯</div> <b>What (Apa)?</b><br> <small>Kebutuhan Sistem</small> </div> </div> </div> <p>Contoh: "Mengapa butuh sistem antrean?" -> "Agar pasien tidak menumpuk di lobi."(Why) -> "Sistem harus bisa booking online."(What).</p> `
    },
    {
        icon: "💎",
        title: "5. Value & Constraints",
        content: ` <p>Sebelum mulai, kita harus tahu "Harga" dan "Batasan" .</p> <table class="slide-table" > <tr> <th>Kategori</th> <th>Penjelasan</th> </tr> <tr> <td><b>Business Value</b></td> <td>Keuntungan apa yang didapat? Bisa berupa uang (Hemat Biaya) atau Citra (Klinik jadi modern).</td> </tr> <tr> <td><b>Constraints</b></td> <td>Batasan proyek. Misal: "Harus jadi dalam 3 bulan"(Waktu) atau "Server harus di Indonesia"(Regulasi).</td> </tr> </table> `
    },
    {
        icon: "⚖️",
        title: "6. Fitur vs Kualitas",
        content: ` <p>Sistem itu punya dua sisi mata uang. Bukan cuma soal "Bisa apa", tapi "Seberapa bagus" .</p> <table class="slide-table" > <tr> <th>Tipe</th> <th>Deskripsi</th> <th>Contoh</th> </tr> <tr> <td><b>Fungsional (Fitur)</b></td> <td>Apa yang sistem LAKUKAN.</td> <td>Login, Cetak Struk, Hitung Total.</td> </tr> <tr> <td><b>Non-Fungsional (Kualitas)</b></td> <td>Seberapa BAIK kerjanya.</td> <td>Loading < 2 detik, Aman dari Hacker, Mudah dipakai di HP.</td> </tr> </table> `
    },
    {
        icon: "🗺️",
        title: "7. Apa itu UML?",
        content: ` <div class="visual-box" > <span style="font-size:3rem;" >📝 + 🤝=✅</span> </div> <p><b>UML (Unified Modeling Language)</b> adalah bahasa standar internasional berupa diagram visual.</p> <p><b>Fungsinya:</b> Sebagai "Bahasa Penengah" antara orang bisnis (Klien) dan orang teknis (Programmer) agar tidak salah paham.</p> <p>UML adalah cetak biru (blueprint) software kita.</p> `
    },
    {
        icon: "👤",
        title: "8. Use Case Diagram",
        content: ` <p>Ini adalah diagram paling pertama yang dibuat. Sangat sederhana.</p> <div class="visual-box" > <svg width="200" height="100" viewBox="0 0 200 100" > < !-- Actor --> <circle cx="30" cy="30" r="10" fill="none" stroke="#4F46E5" stroke-width="2" /> <line x1="30" y1="40" x2="30" y2="70" stroke="#4F46E5" stroke-width="2" /> <line x1="10" y1="50" x2="50" y2="50" stroke="#4F46E5" stroke-width="2" /> <line x1="30" y1="70" x2="10" y2="90" stroke="#4F46E5" stroke-width="2" /> <line x1="30" y1="70" x2="50" y2="90" stroke="#4F46E5" stroke-width="2" /> < !-- Line --> <line x1="60" y1="50" x2="110" y2="50" stroke="#4F46E5" stroke-width="2" /> < !-- Use Case --> <ellipse cx="150" cy="50" rx="40" ry="20" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2" /> <text x="150" y="55" font-size="10" text-anchor="middle" fill="#4F46E5" >Login</text> </svg> </div> <p><b>Fokus:</b> Menjawab pertanyaan "SIAPA bisa melakukan APA?" .</p> <p>Diagram ini tidak peduli urutan waktu, hanya daftar fitur yang tersedia untuk setiap pengguna.</p> `
    },
    {
        icon: "🧩",
        title: "9. Komponen Use Case",
        content: ` <table class="slide-table" > <tr> <th width="30%" >Simbol</th> <th>Nama & Fungsi</th> </tr> <tr> <td style="text-align:center;" >👤 (Orang)</td> <td><b>Actor</b>: Siapapun yang berinteraksi dengan sistem (User, Admin, atau Sistem Lain).</td> </tr> <tr> <td style="text-align:center;" >⭕ (Oval)</td> <td><b>Use Case</b>: Fungsionalitas / Fitur spesifik (misal: "Tarik Tunai").</td> </tr> <tr> <td style="text-align:center;" >── (Garis)</td> <td><b>Association</b>: Garis penghubung antara Aktor dan Use Case.</td> </tr> <tr> <td style="text-align:center;" >⬜ (Kotak)</td> <td><b>Boundary</b>: Batas sistem. Memisahkan apa yang ada di dalam aplikasi dan di luar (dunia nyata).</td> </tr> </table> `
    },
    {
        icon: "🔗",
        title: "10. Relasi: Include vs Extend",
        content: ` <p>Dalam Use Case, ada dua hubungan spesial yang sering muncul:</p> <table class="slide-table" > <tr> <th>Relasi</th> <th>Sifat</th> <th>Contoh</th> </tr> <tr> <td><b>&lt;
&lt;
include&gt;
&gt;
</b></td><td><b>Wajib</b>. Use Case A tidak bisa jalan tanpa B.</td><td>"Transfer" ➜ <i>include</i>➜ "Cek Saldo"(Saldo wajib dicek).</td></tr><tr><td><b>&lt;
&lt;
extend&gt;
&gt;
</b></td><td><b>Opsional</b>. Use Case B hanya jalan jika kondisi tertentu.</td><td>"Cek Saldo" ➜ <i>extend</i>➜ "Cetak Struk"(Kalau mau saja).</td></tr></table><div class="visual-box"><span style="font-size:0.8rem; color:var(--secondary);">Tips: Include="Harus Ada", Extend="Boleh Ada" </span> </div> `
    },
    {
        icon: "🔄",
        title: "11. Activity Diagram",
        content: ` <p>Kalau Use Case itu "Daftar Menu", maka Activity Diagram adalah "Resep Masak" -nya.</p> <div class="visual-box" > <div class="visual-flow" > <span class="flow-item" style="background:#10B981; color:white; border:none;" >Mulai</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >Input</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >Cek?</span> <span class="flow-arrow" >➜</span> <span class="flow-item" style="background:#EF4444; color:white; border:none;" >Selesai</span> </div> </div> <p>Diagram ini menggambarkan alur kerja (workflow) langkah demi langkah, termasuk logika percabangan (IF/ELSE).</p> <p>Sangat mirip dengan Flowchart klasik.</p> `
    },
    {
        icon: "🔷",
        title: "12. Simbol Activity",
        content: ` <table class="slide-table" > <tr> <th>Simbol Visual</th> <th>Arti</th> </tr> <tr> <td>⚫ (Lingkaran Hitam)</td> <td><b>Start Node</b>: Titik di mana proses dimulai.</td> </tr> <tr> <td>🟥 (Persegi Panjang)</td> <td><b>Action</b>: Sebuah kegiatan atau aktivitas yang dilakukan.</td> </tr> <tr> <td>🔶 (Belah Ketupat)</td> <td><b>Decision</b>: Percabangan. Misal: "Saldo Cukup?"(Ya ke kiri, Tidak ke kanan).</td> </tr> <tr> <td>🎯 (Target)</td> <td><b>Final Node</b>: Titik proses berakhir/selesai.</td> </tr> </table> `
    },
    {
        icon: "🏗️",
        title: "13. Class Diagram",
        content: ` <p>Ini adalah diagram paling teknis. Menggambarkan struktur data statis.</p> <div class="visual-box" > <div style="border:2px solid var(--primary); width:150px; background:white;" > <div style="padding:5px; border-bottom:1px solid var(--primary); font-weight:bold; background:#EEF2FF;" >Siswa</div> <div style="padding:5px; border-bottom:1px solid var(--primary); text-align:left; font-size:0.8rem;" >- nama: String<br>- nis: Int</div> <div style="padding:5px; text-align:left; font-size:0.8rem;" >+ belajar()<br>+ ujian()</div> </div> </div> <p>Diagram ini menjadi cetak biru untuk pembuatan <b>Database</b> dan <b>Kelas Pemrograman</b> (OOP).</p> <p>Terdiri dari 3 bagian: Nama Kelas, Atribut (Data), dan Operasi (Fungsi).</p> `
    },
    {
        icon: "⏱️",
        title: "14. Sequence Diagram",
        content: ` <p>Menggambarkan interaksi antar objek berdasarkan <b>urutan waktu</b>.</p> <div class="visual-box" > <span style="font-size:0.9rem;" >User ➜ (Login) ➜ Server ➜ (Cek DB) ➜ Database</span> <br><br> <span style="color:var(--secondary); font-size:0.8rem;" >⬇️ Waktu berjalan ke bawah ⬇️</span> </div> <p>Menjelaskan detail: "Siapa mengirim pesan ke siapa, dan kapan?" .</p> <p>Cocok untuk merancang logika pertukaran data (API) yang kompleks.</p> `
    },
    {
        icon: "🏢",
        title: "15. Arsitektur Sistem (Layers)",
        content: ` <p>Sistem yang baik dibagi menjadi lapisan-lapisan (Layers) agar rapi.</p> <table class="slide-table" > <tr> <th>Layer</th> <th>Analogi Toko</th> <th>Fungsi IT</th> </tr> <tr> <td><b>Presentation</b></td> <td>Etalase / Kasir</td> <td><b>UI (User Interface)</b>: Apa yang user lihat.</td> </tr> <tr> <td><b>Business Logic</b></td> <td>Manajer Toko</td> <td><b>Logika Aplikasi</b>: Perhitungan, Validasi aturan.</td> </tr> <tr> <td><b>Data Layer</b></td> <td>Gudang</td> <td><b>Database</b>: Tempat simpan data aman.</td> </tr> </table> `
    },
    {
        icon: "🚀",
        title: "16. Kesimpulan: Alur Sukses",
        content: ` <div class="visual-box" style="background:#D1FAE5; border-color:#10B981;" > <b>Resep Sukses Proyek IT</b> </div> <ol style="margin-left:1.5rem; line-height:2;" > <li><b>Mimpi (Ide):</b> Temukan masalah yang ingin dipecahkan.</li> <li><b>Analisis:</b> Pahami kebutuhan (Why & What).</li> <li><b>Rancang (UML):</b> Buat peta visual (Use Case, Activity, dll).</li> <li><b>Konstruksi (Coding):</b> Bangun aplikasi berdasarkan rancangan.</li> </ol> <p style="margin-top:1rem; text-align:center; font-weight:bold; color:var(--primary);" >Selamat ! Anda siap menjadi Arsitek Sistem. 🎓</p> `
    }
];
