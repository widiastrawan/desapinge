<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Desa Adat Pinge</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

    <link rel="apple-touch-icon" sizes="180x180" href="img/Lambang_Kabupaten_Tabanan.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/Lambang_Kabupaten_Tabanan.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/Lambang_Kabupaten_Tabanan.png">
    <link rel="icon" type="image/png" sizes="96x96" href="img/Lambang_Kabupaten_Tabanan.png">

    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <link rel="stylesheet" href="css/carousel.css">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">

</head>

<body data-bs-spy="scroll" data-bs-target="#navScroll" id="galeri">

    <nav id="navScroll" class="navbar navbar-expand-lg bg-transparent navbar-dark fixed-top" tabindex="0">
        <div class="container-fluid container-navbar text-white px-lg-5 px-4 m-3">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end ul-mobile p-3" id="navbarSupportedContent">
                <ul class="navbar-nav fw-bold">
                    <li class="nav-item me-5">
                        <a class="nav-link li-color" href=" index.php">
                            Beranda
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link li-color" id="galeri-navbar" href="">
                            Virtual Tour 360
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link li-color" href="potensi-wisata.php">
                            Potensi Wisata
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link li-color" href="galeri.php">
                            Galeri
                        </a>
                    </li>
                    <li class="nav-item me-5">
                        <a class="nav-link li-color" href="tentang.php">
                            Tentang
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <div class="w-100 overflow-hidden" id="top">

            <div class="container-fluid position-relative" style="background: linear-gradient(180deg, rgba(36, 107, 93, 0) 79.57%, rgba(39, 90, 82, 0.86) 100%), url(img/virtualtour.webp); background-repeat: no-repeat; background-size: cover; height: 800px; opacity: 0.8;">

                <div class="row align-items-center" style=" height:100%;">

                    <div class="col position-relative" data-aos="fade-up">
                        <h1 class="text-center mt-5 font-1 text-white fw-bold mb-3" style="font-size: 40px;">Selamat
                            Datang
                            di
                            Virtual
                            Tour Desa
                            Adat
                            Pinge</h1>
                        <p class="text-center mx-5 text-white" style="font-weight: 700;">Virtual Tour 360 adalah
                            pengalaman
                            virtual yang
                            memungkinkan
                            pengguna
                            untuk
                            menjelajahi dan
                            melihat lingkungan
                            <br>seolah-olah berada di Desa Adat Pinge, meskipun sebenarnya mereka sedang
                            melihatnya melalui komputer, ponsel, atau <br>perangkat VR (Virtual Reality).
                        </p>
                        <div class="d-flex justify-content-center" data-aos="fade-up">
                            <button type="button" class="btn hub font-1 text-dark fw-bold" style="font-size: 22px; border-radius: 10px;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Mulai
                                Jelajahi !</button>
                        </div>
                    </div>
                </div>

            </div>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content p-3" style="background-color: #FFE500; margin-top: 260px; height: 260px;">
                        <div class="modal-header d-flex justify-content-center">
                            <h1 class="modal-title font-1 fw-bold mt-3" id="staticBackdropLabel" style="font-size: 32px;">
                                Mulai Jelajahi ?</h1>
                        </div>
                        <div class="modal-body d-flex justify-content-center text-center pe-5" style="margin-top: -20px;">
                            Gunakan Perangkat Laptop / Komputer Untuk Pengalaman Yang Lebih Baik
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-secondary font-1" data-bs-dismiss="modal" style="width: 120px; background-color: #2D2B2B;">Kembali</button>
                            <a href="VirtualTour/index.htm">
                                <button type="button" class="btn btn-secondary font-1" style="width: 120px; background-color: #2D2B2B;">Mulai</button>
                            </a>
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


    <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>