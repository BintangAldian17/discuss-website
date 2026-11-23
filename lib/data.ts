// Ganti semua data placeholder di file ini.
export const site = {
  brand: "FANGXY DISCUS",
  tagline: "Premium Discus, Jakarta",
  whatsapp: "628998652062", // format internasional tanpa "+"
  facebook: "https://www.facebook.com/profile.php?id=61577818371046",
  address: "Jakarta Barat, Indonesia",
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const steps = [
  { title: "Pilih Ikan", text: "Lihat koleksi dan pilih Discus yang Anda suka." },
  { title: "Chat WhatsApp", text: "Konfirmasi ketersediaan, ukuran, dan harga." },
  { title: "Foto & Video", text: "Kami kirim foto/video asli ikan sebelum pembayaran." },
  { title: "Pengiriman", text: "Dipacking oksigen + styrofoam, dikirim ke seluruh Indonesia." },
];

export type Product = {
  name: string;
  grade: "A" | "SS" | "Premium";
  size: string;
  stock: number;
  description: string;
  image?: string; // taruh file di /public/products/
  credit?: string; // atribusi foto (wajib untuk lisensi CC); hapus jika pakai foto sendiri
};

// Foto sementara dari Wikimedia Commons. Ganti dengan foto ikan asli Anda.
export const heroCredit = "Foto: cuatrok77 / Wikimedia Commons, CC BY 2.0";

export const products: Product[] = [
  { name: "Red Turquoise", grade: "SS", size: "3–4 inch", stock: 6, image: "/products/red-turquoise.jpg", credit: "Bernard Dupont / Wikimedia Commons, CC BY-SA 2.0", description: "Pola garis merah menyala di atas dasar turquoise. Warna keluar maksimal di bawah lampu full spectrum." },
  { name: "Blue Diamond", grade: "Premium", size: "3–4 inch", stock: 4, image: "/products/blue-diamond.jpg", credit: "Brian Gratwicke / Wikimedia Commons, CC BY 2.0", description: "Biru solid tanpa garis dari kepala hingga sirip. Bersih, elegan, dan sangat kontras di aquascape hijau." },
  { name: "Cobalt Blue", grade: "A", size: "2–3 inch", stock: 7, image: "/products/cobalt-blue.jpg", credit: "Bernard Dupont / Wikimedia Commons, CC BY-SA 2.0", description: "Biru kobalt cerah dengan garis halus samar. Pilihan aman untuk pemula yang ingin warna biru kuat." },
  { name: "Blue Turquoise", grade: "A", size: "3–4 inch", stock: 5, image: "/products/blue-turquoise.jpg", credit: "Patrick Farrelly / Wikimedia Commons, Public domain", description: "Pola labirin turquoise yang rapat di seluruh badan. Varian klasik yang tetap jadi favorit hobiis." },
  { name: "Golden", grade: "Premium", size: "3–4 inch", stock: 2, image: "/products/golden.jpg", credit: "Brian Gratwicke / Wikimedia Commons, CC BY 2.0", description: "Kuning keemasan merata dengan mata merah. Salah satu varian paling dicari, stok terbatas." },
  { name: "Red Melon", grade: "SS", size: "3–4 inch", stock: 3, image: "/products/red-melon.jpg", credit: "H. Zell / Wikimedia Commons, CC BY-SA 3.0", description: "Oranye kemerahan solid dengan gradasi hangat. Warna makin pekat seiring umur dan pakan yang tepat." },
  { name: "Yellow Pigeon", grade: "A", size: "2–3 inch", stock: 6, image: "/products/yellow-pigeon.jpg", credit: "Valenzuela400 / Wikimedia Commons, CC BY-SA 4.0", description: "Dasar kuning lembut dengan bintik dan pola pigeon di sirip. Tenang dan mudah beradaptasi." },
  { name: "Red Snakeskin", grade: "SS", size: "3–4 inch", stock: 4, image: "/products/red-snakeskin.jpg", credit: "Valenzuela400 / Wikimedia Commons, CC BY-SA 4.0", description: "Garis merah halus dan rapat menyerupai kulit ular. Detail pola terlihat jelas dari dekat." },
];
