export interface Scenario {
    title: string;
    text: string;
    seq: string[];
    exp: string;
}

export interface Relation {
    source: number;
    target: number;
    type: string;
}

export interface BuilderData {
    actors: string[];
    usecases: string[];
    mappings: Record<string, number[]>; // Key is actor index (as string), value is array of usecase indices
    relations: Relation[];
}

export interface Template {
    title: string;
    actors: string[];
    usecases: string[];
    mappings: Record<string, number[]>;
    relations: Relation[];
}

export type ViewType = 'usecase' | 'activity';

export const visualScenarios = {
    usecase: [
        {
            title: "Login System", text: "User memasukkan data, dan Sistem memvalidasinya.", seq: ['actor', 'assoc', 'usecase', 'assoc', 'actor_sys'], exp: "User (Actor) terhubung ke Use Case, dan Use Case butuh validasi dari Sistem (Actor lain)."
        },
        {
            title: "Fitur Wajib (Include)", text: "Saat Transfer Uang, sistem WAJIB Cek Saldo.", seq: ['usecase', 'include', 'usecase'], exp: "Transfer 'Include' Cek Saldo. Artinya Cek Saldo selalu dijalankan."
        },
        {
            title: "Sistem ATM", text: "Nasabah menarik tunai dari Mesin ATM (Hardware).", seq: ['actor', 'assoc', 'usecase', 'assoc', 'actor_sys'], exp: "Nasabah -> Tarik Tunai -> Sistem Bank."
        }
    ],
    activity: [
        {
            title: "Login Flow", text: "Mulai -> Input Data -> Validasi -> Selesai.", seq: ['start', 'flow', 'action', 'flow', 'action', 'flow', 'end'], exp: "Alur linear sederhana: Start -> Input -> Validasi -> End."
        },
        {
            title: "Cek Stok (Decision)", text: "Cek Barang -> Jika Ada (Kirim), Jika Kosong (Pesan).", seq: ['action', 'flow', 'decision'], exp: "Setelah aksi Cek Barang, masuk ke Decision untuk bercabang."
        },
        {
            title: "Paralel (Fork)", text: "Mulai -> Split menjadi 2 proses (Kirim Email & SMS).", seq: ['start', 'flow', 'fork'], exp: "Fork Node memecah satu aliran menjadi banyak aliran paralel."
        }
    ]
};

export const builderTemplates: Record<string, Template> = {
    gofood: {
        title: 'Go-Food',
        actors: ['Pelanggan', 'Driver', 'Restoran'],
        usecases: ['Pilih Menu', 'Pesan', 'Bayar', 'Antar', 'Selesai'],
        mappings: {
            '0': [0, 1, 2], '1': [3, 4], '2': [2, 3]
        },
        relations: [
            { source: 1, target: 2, type: 'include' }
        ]
    },
    atm: {
        title: 'ATM System',
        actors: ['Nasabah', 'Sistem Bank'],
        usecases: ['Masukkan Kartu', 'Verifikasi PIN', 'Cek Saldo', 'Tarik Tunai', 'Struk Print'],
        mappings: {
            '0': [0, 1, 2, 3], '1': [1, 2, 3]
        },
        relations: [
            { source: 3, target: 4, type: 'extend' }
        ]
    }
};
