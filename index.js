const sections = document.querySelectorAll(".sec-other")

window.addEventListener("scroll", () => {
    animationByScroll()
})

function animationByScroll() {
    // 今映っている画面に辿り着くまでにスクロールした量
    const scrollY = window.scrollY
    // 今映っている画面の高さ
    const windowHeidht = window.innerHeight
    //ずらす用の高さ
    const INVIEW_HEIGHT = 200

    sections.forEach((section) => {
        const offsetTop = section.offsetTop

        if (scrollY + windowHeidht > offsetTop + INVIEW_HEIGHT) {
            section.classList.add("SectionIsActive")
        }
    })
}