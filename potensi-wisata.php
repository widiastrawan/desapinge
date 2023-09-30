<?php include "template/header.php"; ?>

<body data-bs-spy="scroll" data-bs-target="#navScroll" id="galeri">

    <nav id="navScroll" class="navbar navbar-expand-lg bg-body-tertiary navbar-light fixed-top" tabindex="0">
        <div class="container-fluid container-navbar text-white px-lg-5 px-4 m-3">
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
                        <a class="nav-link color-mb" id="galeri-navbar" href="potensi-wisata.php">
                            Potensi Wisata
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link color-mb" href="galeri.php">
                            Galeri
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link color-mb" href="tentang.php">
                            Tentang
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="bg-white">
        <div class="w-100 overflow-hidden h-100 mt-lg-5 mt-3" id="potensi-wisata" data-aos="fade-right">

            <div class="container-fluid position-relative" style="background: linear-gradient(180deg, rgba(36, 107, 93, 0) 79.57%, rgba(39, 90, 82, 0.86) 100%), url(img/laduma.webp); background-repeat: no-repeat; background-size: cover; height: 160px; opacity: 0.8;">

                <div class="align-items-center" style=" height:100%;">

                    <div class="position-relative mt-5 d-flex justify-content-between" data-aos="fade-up">
                        <h1 class="display-1 fw-bolder mt-2 font-1 text-white p-5" style="font-size: 40px;">Potensi
                            Wisata - Laduma
                        </h1>
                    </div>

                </div>
            </div>

            <div class="container bg-white position-relative my-5">

                <div class="row justify-content-center w-lg-100" data-aos="fade-right" style="margin: 0 !important; margin-bottom: 220px;">

                    <div class="col-12 col-lg-6 mb-lg-0 mb-5" data-aos="fade-right">
                        <a href="#laduma">
                            <div class="container-fluid position-relative w-auto" style="background: url(img/laduma.webp); background-repeat: no-repeat; background-size: cover; height: 200px;" data-bs-toggle="modal" data-bs-target="#laduma">
                            </div>
                        </a>
                        <a href="#laduma2">
                            <div class="container-fluid position-relative mt-4 w-100" style="background: url(img/laduma\ dapur.webp); background-repeat: no-repeat; background-size: cover; height: 200px;" data-bs-toggle="modal" data-bs-target="#laduma2">
                            </div>
                        </a>
                    </div>

                    <div class="col-12 col-lg-6 position-relative">
                        <h1 class="font-1 fw-bold" style="font-size: 40px;">Laduma: Tourist
                            Attraction Center untuk wisata MICE Desa Adat Pinge</h1>
                        <p class="text-center font-4 pt-2" style="text-align: justify !important;">Letaknya berada
                            di
                            tanah Desa Adat Pinge bagian utara di beri nama
                            LADUMA, untuk mrngingat areal tersebut dulunya dalah lahan pertanian Catu Desa
                            atau Pelaba Desa ( tanah milik Desa Adat Pinge). Tourism Atraction ini menjadi Pusat
                            Aktivitas utama Wisatawan yang di dalamnya ada kebun bunga, tempat berfoto,
                            taman bermain, taman edukasi kuliner tradisional, tempat menari dna menabuh yang
                            di kelola warga Desa Adat Pinge, ruang terbuka untuk melakukan pertemuan dan
                            kegiatan wisata MICE ( Meeting, Incentive, Convention, Exhibition). Jenis wisata
                            MICE ini dipahami sebagai jenis wisata konvensi, perjalanan insentif, dan pameran
                            yang merupakan usaha dengan kegiatan memberi jasa pelayanan bagi suatu
                            pertemuan sekelompok orang untuk membahas masalah yang mereka hadapi. Jika
                            wisata MICE dilaksanakan di Desa Wisata Pinge, tentu para wisatawan/peserta MICE
                            juga mendapat pengalaman baru dan keunikan Desa Adat Pinge
                        </p>
                        <div class="d-flex justify-content-center justify-content-lg-end mt-5">
                            <a href="desaadatpinge.php" class="text-dark text-decoration-none me-5"><img src="img/arrow-left.png" alt="" style="width: 20px;" class="me-2">Sebelumnya
                                Desa Adat Pinge</a>
                            <a href="homestay.php" class="text-dark text-decoration-none">Selanjutnya Homestay<img src="img/arrow-right.png" alt="" style="width: 20px;" class="ms-2"></a>
                        </div>
                    </div>

                </div>
                <div class="modal" id="laduma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content" style="display: flex; align-items: center; margin-top: 150px;">
                            <div id="carouselExampleIndicators" class="carousel slide image-modal">
                                <div class="carousel-inner image-modal">
                                    <div class="carousel-item active">
                                        <img src="img/laduma.webp" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal" id="laduma2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content" style="display: flex; align-items: center; margin-top: 150px;">
                            <div id="carouselExampleIndicators" class="carousel slide image-modal">
                                <div class="carousel-inner image-modal">
                                    <div class="carousel-item active">
                                        <img src="img/laduma dapur.webp" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </main>

    <?php include "template/footer.php"; ?>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>


    <script src="js/aos.js"></script>
    <script>
        AOS.init({
            duration: 800,
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

        var TrandingSlider = new Swiper('.tranding-slider', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    </script>


    <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>