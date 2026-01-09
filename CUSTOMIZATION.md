# 🎨 Customization Guide - Portofolio Website

Panduan lengkap untuk mengcustomize website sesuai kebutuhan Anda.

## 🌈 Mengubah Color Scheme

Semua warna diatur di CSS variables, sehingga mudah diubah di satu tempat.

### Location: `style.css` - `:root` section

```css
:root {
  --bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --bg-color: #f5f7fa;
  --card: #ffffff;
  --muted: #666666;
  --accent: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #667eea;
  --gap: 20px;
  --radius: 12px;
  --shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
}
```

### Contoh: Mengubah ke Color Scheme Biru

```css
:root {
  --bg: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  --accent-color: #3498db;
  /* Rest sama... */
}
```

### Contoh: Mengubah ke Color Scheme Hijau

```css
:root {
  --bg: linear-gradient(135deg, #27ae60 0%, #229954 100%);
  --accent-color: #27ae60;
  /* Rest sama... */
}
```

### Contoh: Mengubah ke Color Scheme Merah

```css
:root {
  --bg: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  --accent-color: #e74c3c;
  /* Rest sama... */
}
```

### Popular Color Combinations

#### Sunset (Orange-Red)
```css
--bg: linear-gradient(135deg, #f39c12 0%, #e74c3c 100%);
--accent-color: #f39c12;
```

#### Ocean (Light Blue-Teal)
```css
--bg: linear-gradient(135deg, #1abc9c 0%, #3498db 100%);
--accent-color: #1abc9c;
```

#### Forest (Green)
```css
--bg: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
--accent-color: #2ecc71;
```

#### Midnight (Dark Blue-Purple)
```css
--bg: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
--accent-color: #3498db;
```

---

## 🔤 Mengubah Font

### Mengubah Font Family

Location: `style.css` - `body` selector

Default:
```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Contoh: Menggunakan Google Fonts

1. Tambahkan di `<head>` setiap HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

2. Ubah CSS:
```css
body {
  font-family: 'Poppins', sans-serif;
}
```

### Popular Google Fonts untuk Portfolio

```html
<!-- Modern Sans -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

<!-- Playful -->
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap" rel="stylesheet">

<!-- Professional -->
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&display=swap" rel="stylesheet">

<!-- Tech/Modern -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

---

## 📐 Mengubah Layout & Spacing

### Gap (Spacing antar elements)

Location: `:root` dalam `style.css`

```css
--gap: 20px;  /* Ubah nilai sesuai kebutuhan */
```

- Default: `20px`
- Lebih compact: `12px`
- Lebih spacious: `28px`

### Border Radius (Sudut elements)

```css
--radius: 12px;  /* Ubah untuk lebih rounded atau angular */
```

- Very rounded: `20px`
- Standard: `12px`
- Angular/Sharp: `4px`

### Mengubah Max Width Content

Location: `section` selector dalam `style.css`

```css
section {
  width: min(1100px, 90%);  /* Ubah 1100px untuk width maksimal */
}
```

---

## 🔲 Shadow Effects

### Box Shadow Variables

```css
--shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
--shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
```

### Membuat Shadow lebih tebal

```css
--shadow: 0 12px 48px rgba(102, 126, 234, 0.25);  /* Lebih tebal */
```

### Membuat Shadow lebih subtle

```css
--shadow: 0 4px 16px rgba(102, 126, 234, 0.08);  /* Lebih subtle */
```

---

## 📱 Mengubah Responsive Breakpoints

Location: `@media` queries dalam `style.css`

### Default Breakpoints:
- Desktop: > 900px
- Tablet: 800-900px
- Mobile: < 800px
- Small Phone: < 500px

### Mengubah untuk mobile-first approach:

```css
/* Ubah @media (max-width: 800px) menjadi: */
@media (max-width: 768px) {
  /* ... */
}
```

---

## 🎬 Mengubah Animations

### Slow down animations

Location: `style.css` - `.hamburger span`, `nav ul li a`, dll

Ubah `transition` dari `0.3s` menjadi `0.5s` atau lebih:

```css
.hamburger span {
  transition: all 0.5s ease;  /* Lebih slow */
}
```

### Mengubah Animation Type

```css
/* Dari ease ke linear */
transition: all 0.3s linear;

/* Dari ease ke ease-in-out */
transition: all 0.3s ease-in-out;

/* Dari ease ke ease-out */
transition: all 0.3s ease-out;
```

### Disable Animations (untuk performance)

```css
/* Uncomment di :root */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🌙 Menambahkan Dark Mode

### Tambahkan di `style.css`:

```css
/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --card: #2d2d2d;
    --muted: #b0b0b0;
  }
  
  body::before {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    opacity: 0.1;
  }
}
```

---

## 🎨 Mengubah Card Styling

Location: `.project-item` selector

```css
.project-item {
  border: 2px solid transparent;  /* Ubah border style */
  box-shadow: var(--shadow-sm);   /* Ubah shadow */
  border-radius: var(--radius);   /* Ubah border radius */
}
```

### Contoh: Add gradient border

```css
.project-item {
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #667eea, #764ba2) border-box;
  border: 2px solid transparent;
  border-radius: var(--radius);
}
```

---

## 🔤 Mengubah Heading Styles

Location: `section h2` selector

Default:
```css
section h2 {
  color: var(--accent-color);
  font-size: 2rem;
  margin-bottom: 24px;
}
```

### Ubah untuk lebih decorative:

```css
section h2 {
  color: var(--accent-color);
  font-size: 2.5rem;
  margin-bottom: 24px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  letter-spacing: 1px;
}
```

---

## 📧 Mengubah Contact Information

### Email Form Action

Location: `informasi.html` - `<form>` tag

```html
<form action="mailto:your-email@example.com?subject=Komentar dari Website" 
      method="post" enctype="text/plain">
```

Ubah `your-email@example.com` dengan email Anda.

### Social Media Links

Location: `kontak.html` - `.contact-list` links

```html
<!-- Instagram -->
<a href="https://instagram.com/your-username" target="_blank">
  @your-username
</a>

<!-- GitHub -->
<a href="https://github.com/your-username" target="_blank">
  your-username
</a>

<!-- Email -->
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>

<!-- WhatsApp -->
<a href="https://wa.me/your-phone-number" target="_blank">
  Your Phone Number
</a>
```

---

## 🖼️ Mengubah Images

### Profile Photo

Location: `profile.html`

```html
<img src="foto okan.jpeg" alt="Foto Ockan" class="responsive-media">
```

Ubah `foto okan.jpeg` dengan path ke foto Anda.

### Project Thumbnails

Location: `karya.html`

```html
<img src="berita.PNG" alt="Website Portal Berita" class="responsive-media">
```

Ubah nama file dengan file Anda.

### Media Files

Location: `media.html`

```html
<!-- Foto -->
<img src="kucing.jpeg" alt="Foto contoh" class="responsive-media">

<!-- Video -->
<source src="video.mp4" type="video/mp4">

<!-- Audio -->
<source src="TULUS-Jatuh-Suka-(CeeNaija.com).mp3" type="audio/mpeg">

<!-- PDF -->
<object data="project.pdf" type="application/pdf">
```

---

## 🔧 Advanced Customization

### Mengubah Navbar Style

Location: `nav` selector

```css
nav {
  background: var(--accent);
  padding: 16px 20px;           /* Ubah padding */
  position: sticky;              /* Ubah untuk fixed */
  top: 0;
  box-shadow: var(--shadow);
}
```

### Mengubah Footer Style

Location: `footer` selector

```css
footer {
  background: linear-gradient(90deg, #2c3e50, #34495e);
  padding: 24px 20px;            /* Ubah padding */
  border-top: 3px solid var(--accent-color);
}
```

---

## 💾 Tips & Best Practices

1. **Selalu backup** `style.css` sebelum edit besar
2. **Test di browser** setelah setiap perubahan besar
3. **Gunakan CSS variables** untuk konsistensi
4. **Mobile-first approach** saat customize responsive
5. **Keep color scheme consistent** di semua elemen
6. **Test accessibility** setelah color changes
7. **Check image sizes** untuk optimal loading

---

## 🎯 Contoh Customization Lengkap

### Scenario: Ubah website jadi professional corporate style

1. **Color Scheme** → Dark Blue & Gold
```css
--bg: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
--accent-color: #d4af37;  /* Gold */
```

2. **Font** → Professional serif
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
```

3. **Spacing** → More formal
```css
--gap: 28px;
--radius: 2px;  /* More angular */
```

4. **Navbar** → Fixed position
```css
nav {
  position: fixed;
  width: 100%;
  z-index: 1000;
}
```

---

✨ **Happy Customizing!**
