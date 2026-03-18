/**
 * ============================================
 * SITE CONFIGURATION — Edit this file only!
 * ============================================
 *
 * Untuk deploy ke domain baru, ubah nilai di bawah ini.
 * Tidak perlu mengedit file lain.
 *
 * Format domain: tanpa protokol (https://), tanpa trailing slash (/)
 * Contoh: 'mydomain.com', bukan 'https://mydomain.com/'
 *
 * Jalankan "node setup.js" untuk generate file ini secara otomatis,
 * atau edit manual sesuai kebutuhan Anda.
 */
var SITE_CONFIG = {
    // ── Domain Utama (Production) ──────────────────────────
    // Domain utama yang digunakan untuk akses situs
    PRIMARY_DOMAIN: 'rianlabs.id',

    // ── Daftar Domain yang Diizinkan ───────────────────────
    // Semua domain (termasuk www dan alias lainnya)
    // yang diizinkan untuk mengakses aplikasi ini.
    ALLOWED_DOMAINS: [
        'rianlabs.id',
        'www.rianlabs.id',
    ],

    // ── Pattern Subdomain yang Diizinkan ───────────────────
    // Subdomain wildcard, e.g. '*.rianlabs.id' direpresentasikan
    // sebagai '.rianlabs.id' (dengan titik di depan).
    ALLOWED_SUBDOMAIN_SUFFIXES: [
        '.rianlabs.id',
    ],

    // ── Cloudflare Pages Preview ───────────────────────────
    // Izinkan akses dari *.pages.dev (Cloudflare Pages preview deployments)
    ALLOW_PAGES_DEV: true,

    // ── Local Development ──────────────────────────────────
    // Izinkan akses dari localhost dan 127.0.0.1
    ALLOW_LOCALHOST: true
};
