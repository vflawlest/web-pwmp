// Script untuk menghilangkan preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("mainContent");
  preloader.style.display = "none"; // Sembunyikan preloader
  mainContent.style.display = "block"; // Tampilkan konten utama
});
