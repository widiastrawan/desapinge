<?php include "template/header.php"; ?>

<body data-bs-spy="scroll" data-bs-target="#navScroll" id="galeri">

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
            <div class="container-fluid position-relative" style="background: linear-gradient(180deg, rgba(36, 107, 93, 0) 79.57%, rgba(39, 90, 82, 0.86) 100%), url(img/laduma.webp); background-repeat: no-repeat; background-size: cover; height: 160px; opacity: 0.8;">

                <div class="align-items-center" style=" height:100%;">

                    <div class="position-relative mt-5 d-flex justify-content-between" data-aos="fade-up">
                        <h1 class="display-1 fw-bolder mt-2 font-1 text-white p-5" style="font-size: 40px;">Galeri -
                            Video
                        </h1>
                        <div class="p-4 me-5" data-aos="fade-right">
                            <a href="galeri.php" class="position-relative btn-vt-3 shadow fw-bold text-decoration-underline" style="font-size: 20px;">
                                <img src="img/arrow-left.png" alt="" class="ms-3" style="width: 55px; height: 55px; background-color:#FEF967; padding: 7px; border-radius: 50%;">
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div class="container text-center my-5">
            <div class="row justify-content-center">

                <div class="row justify-content-center">
                    <div class="col-lg-4 col-12 mb-5 mb-lg-0">
                        <h3 class="font-1 mb-3 text-center fw-bold h3-mobile">Wisata Laduma</h3>
                        <div class="container-fluid w-auto">
                            <iframe width="400px;" height="240px" src="https://www.youtube.com/embed/4U1ubx0CXKE?si=NkwuKcPEe8UeYsY5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 385px;; height: 250px; margin-left:-12px"></iframe>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 mb-5 mb-lg-0">
                        <h3 class="font-1 mb-3 text-center fw-bold h3-mobile">Galeri Jalur Trekking</h3>
                        <div class="container-fluid">
                            <iframe width="400px" height="240px" src="https://www.youtube.com/embed/m6HA8kjoekE?si=U185YHH3wRZVa504" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 385px; height: 250px; margin-left:-12px"></iframe>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 mb-3 mb-lg-0">
                        <h3 class="font-1 mb-3 text-center fw-bold h3-mobile">Tari Bumbung Gebyong</h3>
                        <div class="container-fluid">
                            <iframe width="400px" height="240px" src="https://www.youtube.com/embed/0iFRL5nAJn4?si=cf9YK3uwMV5FB8TD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 385px; height: 250px; margin-left:-12px"></iframe>
                        </div>
                    </div>
                </div>

                <div class="row my-5 d-flex justify-content-center">
                    <div class="col-lg-4 col-12 mb-5 mb-lg-0">
                        <h3 class="font-1 mb-3 text-center fw-bold h3-mobile">Potensi Tari Leko</h3>
                        <div class="container-fluid">
                            <iframe width="400px" height="240px" src="https://www.youtube.com/embed/0iFRL5nAJn4?si=cf9YK3uwMV5FB8TD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 385px; height: 250px; margin-left:-12px"></iframe>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 mb-5 mb-lg-0">
                        <h3 class="font-1 mb-3 text-center fw-bold h3-mobile">Homestay</h3>
                        <div class="container-fluid">
                            <iframe width="400px" height="240px" src="https://www.youtube.com/embed/kPeHVRJ6LrQ?si=jVxWxRnoPksV8r0u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 385px; height: 250px; margin-left:-12px"></iframe>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 mb-5 mb-lg-0">
                        <h3 class="font-1 mb-3 text-center fw-bold h3-mobile">Desa Adat Pinge</h3>
                        <div class="container-fluid">
                            <iframe width="400px" height="240px" src="https://www.youtube.com/embed/rn1iC8zR260?si=P8LwN_b84f2etGTR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 385px; height: 250px; margin-left:-12px"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <?php include "template/footer.php"; ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous">
    </script>

    <script>
        let items = document.querySelectorAll('.carousel .carousel-item')

        items.forEach((el) => {
            const minPerSlide = 4
            let next = el.nextElementSibling
            for (var i = 1; i < minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })

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