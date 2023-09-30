<?php include "template/header.php"; ?>


<body data-bs-spy="scroll" data-bs-target="#navScroll" id="tentang">

    <nav id="navScroll" class="navbar navbar-expand-lg bg-body-tertiary navbar-light fixed-top" tabindex="0">
        <div class="container-fluid container-navbar text-white px-lg-5 px-4 p-3">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav fw-bold">
                    <li class="nav-item me-5">
                        <a class="nav-link color-mb" href="index.php">
                            Beranda
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link color-mb" href="virtual360.php">
                            Virtual Tour 360
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link color-mb" href="potensi-wisata.php">
                            Potensi Wisata
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link color-mb" href="galeri.php">
                            Galeri
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link color-mb" id="galeri-navbar" href="tentang.php">
                            Tentang
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>

        <div class="w-100 overflow-hidden h-100 mt-lg-5 mt-3" id="potensi-wisata" data-aos="fade-right" id="one">
            <div class="container-fluid position-relative" style="background: linear-gradient(180deg, rgba(36, 107, 93, 0) 79.57%, rgba(39, 90, 82, 0.86) 100%), url(img/laduma.webp); background-repeat: no-repeat; background-size: cover; height: 160px; opacity: 0.8;">

                <div class="align-items-center" style=" height:100%;">

                    <div class="position-relative mt-5 d-flex justify-content-between" data-aos="fade-up">
                        <h1 class="display-1 fw-bold mt-2 font-1 text-white p-5" style="font-size: 40px;">Tentang
                        </h1>
                    </div>

                </div>
            </div>

        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-6 col-12 mb-lg-0 mb-5">
                    <div class="p-4" style="background-color: #F4F3ED; height: 180px;">
                        <h4 class="font-1 fw-bold">Lokasi</h4>
                        <p>Desa Adat Pinge berlokasi di Banjar Baru, Desa Pinge,Kecamatan
                            MargaKabupaten Tabanan, Bali
                        </p>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn hub font-1 text-dark justify-content-end" style="width: 120px; height: 35px; font-size: 15px; margin-top: 0px;"><a href="https://www.google.com/maps/place/DESA+WISATA+PINGE/@-8.390309,115.179033,16z/data=!4m6!3m5!1s0x2dd226b7d965eb53:0x3483e1082db8d7c0!8m2!3d-8.3903092!4d115.1790329!16s%2Fg%2F11dfxd6h2x?hl=id&entry=ttu" target="_blank" style="text-decoration: none;" class="text-dark fw-bold">Lihat
                                    Lokasi</a>

                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12 mb-lg-0 mb-5">
                    <div class="p-4" style="background-color: #F4F3ED; height: 180px;">
                        <h4 class=" font-1 fw-bold">Kontak Pengelola Desa Adat Pinge</h4>
                        <p>Gung Aji : +62 812-3874-570</p>
                        <p style="margin-top: -15px;">Jero Bendesa Adat Pinge : +62 822-6615-0071</p>
                        <p style="margin-top: -15px;">Pak Mega : +62 857-3858-6260</p>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn hub font-1 fw-bold text-dark justify-content-end button-hub"><a href="https://api.whatsapp.com/send?phone=6282266150071&text=Halo%20!" target="_blank" style="text-decoration: none;" class="text-dark">Hubungi</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-5 mt-3">
                <div class="p-4" style="background-color: #F4F3ED;">
                    <h4 class="font-1 fw-bold">Ucapan Terimakasih Kepada :</h4>
                    <p>Bendesa Adat Pinge : I Made Jadrayasa</p>
                    <p>Pengelola Desa : Anak Agung Ngurah Putra Arimbawa, SP</p>
                    <p>Dosen Pembimbing I : I Nyoman Rudy Hendrawan, S.Kom., M.Kom</p>
                    <p>Dosen Pembimbing II : I Gede Harsemadi, S.Kom., M.T.</p>
                    <p>Mahasiswa : Ni Luh Putu Sintya Budyawati</p>
                    <p>Dan segenap masyarakat Desa Adat Pinge</p>
                </div>
            </div>
        </div>

    </main>

    <?php include "template/footer.php"; ?>

    <!-- <script src="js/bootstrap.bundle.min.js"></script> -->
    <script src="js/aos.js"></script>
    <script>
        AOS.init({
            duration: 800, // values from 0 to 3000, with step 50ms
        });

        let scrollpos = window.scrollY;
        const header = document.querySelector(".navbar");
        const header_height = header.offsetHeight;

        const add_class_on_scroll = () => header.classList.add("scrolled", "shadow-sm");
        const remove_class_on_scroll = () => header.classList.remove("scrolled", "shadow-sm");

        window.addEventListener('scroll', function() {
            scrollpos = window.scrollY;

            if (scrollpos >= header_height) {
                add_class_on_scroll();
            } else {
                remove_class_on_scroll();
            }

            console.log(scrollpos);
        })
    </script>


    <!-- <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> -->



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous">
    </script>
</body>

</html>