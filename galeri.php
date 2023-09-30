<?php include "template/header.php"; ?>

<body data-bs-spy="scroll" data-bs-target="#navScroll" id="galeri">

    <nav id="navScroll" class="navbar navbar-expand-lg bg-body-tertiary navbar-light fixed-top" tabindex="0">
        <div class="container-fluid container-navbar text-white px-lg-5 px-4 p-3">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
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
                        <a class="nav-link color-mb" id="galeri-navbar" href="galeri.php">
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

    <main>

        <div class="w-100 overflow-hidden h-100 mt-lg-5 mt-3" id="potensi-wisata" data-aos="fade-right" id="one">
            <div class="container-fluid position-relative"
                style="background: linear-gradient(180deg, rgba(36, 107, 93, 0) 79.57%, rgba(39, 90, 82, 0.86) 100%), url(img/laduma.webp); background-repeat: no-repeat; background-size: cover; height: 160px; opacity: 0.8;">

                <div class="align-items-center" style=" height:100%;">

                    <div class="position-relative mt-5 d-flex justify-content-between" data-aos="fade-up">
                        <h1 class="display-1 fw-bold mt-2 font-1 text-white p-5" style="font-size: 40px;">Galeri -
                            Foto
                        </h1>
                        <div class="p-4 me-5" data-aos="fade-right">
                            <a href="galeri-video.php"
                                class="position-relative btn-vt-3 shadow fw-bold text-decoration-underline"
                                style="font-size: 20px;">
                                <img src="img/arrow-right.png" alt="" class="ms-3"
                                    style="width: 55px; height: 55px; background-color:#FEF967; padding: 7px; border-radius: 50%;">
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div class="container text-center my-5">
            <div class="row justify-content-center">
                <div class="row justify-content-center col-12">
                    <div class="col-lg-4 col-12 mb-lg-3 mb-5">
                        <h3 class="font-1 mb-3 fw-bold h3-mobile">Galeri Laduma</h3>
                        <div class="container">
                            <div class="content">
                                <a href="#exampleModal">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src="img/laduma.webp" alt="">
                                    <div class="content-details fadeIn-bottom" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        <h3 class="content-title font-1 mt-2" style="border:#275A52;">Tampilkan Lebih
                                            Banyak
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 mb-lg-3 mb-5">
                        <h3 class="font-1 mb-3 fw-bold h3-mobile">Galeri Jalur Trekking</h3>
                        <div class="container">
                            <div class="content">
                                <a href="#exampleTrakking">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src="img/trakingatas2.webp" alt="">
                                    <div class="content-details fadeIn-bottom" data-bs-toggle="modal"
                                        data-bs-target="#exampleTrakking">
                                        <h3 class="content-title font-1 mt-2" style="border:#275A52;">Tampilkan Lebih
                                            Banyak
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 mb-lg-3 mb-5">
                        <h3 class="font-1 mb-3 fw-bold h3-mobile">Galeri Tari Bumbung Gebyog</h3>
                        <div class="container">
                            <div class="content">
                                <a href="#TariBumbung">
                                    <div class=" content-overlay">
                                    </div>
                                    <img class="content-image" src="img/taribumbumbung.webp" alt="">
                                    <div class="content-details fadeIn-bottom" data-bs-toggle="modal"
                                        data-bs-target="#TariBumbung">
                                        <h3 class="content-title font-1 mt-2" style="border:#275A52;">Tampilkan Lebih
                                            Banyak
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row my-lg-5 my-2 justify-content-center col-lg-12">
                    <div class="col-lg-4 col-12 mb-lg-3 mb-5">
                        <h3 class="font-1 mb-3 fw-bold h3-mobile">Galeri Tari Leko</h3>
                        <div class="container">
                            <div class="content">
                                <a href="#examplelekno">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src="img/tarilekno.webp" alt="">
                                    <div class="content-details fadeIn-bottom" data-bs-toggle="modal"
                                        data-bs-target="#examplelekno">
                                        <h3 class="content-title font-1 mt-2" style="border:#275A52;">Tampilkan Lebih
                                            Banyak
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 mb-3 mb-lg-3 mb-5">
                        <h3 class="font-1 mb-3 fw-bold h3-mobile">Galeri Homestay</h3>
                        <div class="container">
                            <div class="content">
                                <a href="#exampleHomestay">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src="img/homestay1.webp" alt="">
                                    <div class="content-details fadeIn-bottom" data-bs-toggle="modal"
                                        data-bs-target="#exampleHomestay">
                                        <h3 class="content-title font-1 mt-2" style="border:#275A52;">Tampilkan Lebih
                                            Banyak
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 mb-3 mb-lg-3 mb-5">
                        <h3 class="font-1 mb-3 fw-bold h3-mobile">Galeri Desa Adat Pinge</h3>
                        <div class="container">
                            <div class="content">
                                <a href="#exampleModalDesa">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src="img/desapinge.webp" alt="">
                                    <div class="content-details fadeIn-bottom" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalDesa">
                                        <h3 class="content-title font-1 mt-2" style="border:#275A52;">Tampilkan Lebih
                                            Banyak
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="display: flex; align-items: center; margin-top: 150px;">
                    <div id="carouselExampleIndicators" class="carousel slide image-modal">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner image-modal">
                            <div class="carousel-item active">
                                <img src="img/laduma dapur.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/laduma balai bengong.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/laduma jineng.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/ladumaa.webp" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="exampleTrakking" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="display: flex; align-items: center; margin-top: 150px;">
                    <div id="carouselExampleDark" class="carousel carousel-dark slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                                aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner image-modal">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src="img/traking.webp" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="img/traking2.webp" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="img/trakingatas.webp" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="img/traking3.webp" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="img/trakingatas2.webp" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="img/traking5.webp" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="TariBumbung" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="display: flex; align-items: center; margin-top: 150px;">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                                aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner image-modal">
                            <div class="carousel-item active">
                                <img src="img/taribumbumbung.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/taribumbumbung2.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/taribumbumbung3.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/taribumbumbung4.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/taribumbumbung5.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/taribumbumbung6.webp" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="examplelekno" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="display: flex; align-items: center; margin-top: 150px;">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                                aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner image-modal">
                            <div class="carousel-item active">
                                <img src="img/tarilekno.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/tarilekno2.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/tarilekno3.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/tarilekno4.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/tarilekno5.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/tarilekno6.webp" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="exampleHomestay" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="display: flex; align-items: center; margin-top: 150px;">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                                aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner image-modal">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src="img/homestay1.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="img/homestay7.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/homestay9.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="img/homestay4.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/homestay5.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="img/homestay6.webp" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="exampleModalDesa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="display: flex; align-items: center; margin-top: 150px;">
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                                aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner image-modal">
                            <div class="carousel-item active">
                                <img src="img/desapinge.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/desapinge2.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/desapinge3.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/desapinge4.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/desapinge5.webp" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="img/desapinge6.webp" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <?php include "template/footer.php"; ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous">
    </script>

    <script>
    // let items = document.querySelectorAll('.carousel .carousel-item')

    // items.forEach((el) => {
    //     const minPerSlide = 4
    //     let next = el.nextElementSibling
    //     for (var i = 1; i < minPerSlide; i++) {
    //         if (!next) {
    //             // wrap carousel by using first child
    //             next = items[0]
    //         }
    //         let cloneChild = next.cloneNode(true)
    //         el.appendChild(cloneChild.children[0])
    //         next = next.nextElementSibling
    //     }
    // })

    document.addEventListener("DOMContentLoaded", function() {
        const carouselItems = document.querySelectorAll(".carousel-item");
        const fullImgOverlay = document.createElement("div");
        fullImgOverlay.className = "carousel-full-img-overlay";
        document.body.appendChild(fullImgOverlay);

        carouselItems.forEach((item, index) => {
            item.addEventListener("click", function() {
                const imgSrc = item.querySelector("img").src;
                const fullImg = document.createElement("img");
                fullImg.src = imgSrc;
                fullImgOverlay.innerHTML = "";
                fullImgOverlay.appendChild(fullImg);
                fullImgOverlay.style.display = "flex";
            });
        });

        fullImgOverlay.addEventListener("click", function(event) {
            if (event.target === fullImgOverlay) {
                fullImgOverlay.style.display = "none";
            }
        });
    });
    </script>

    <script src="js/aos.js"></script>
    <script>
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
    });
    </script>

    <script>
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


</body>

</html>