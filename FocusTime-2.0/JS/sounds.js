const forestAudio = new Audio ("https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/preview")

const rainAudio = new Audio ("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/preview")

const coffeeShopAudio = new Audio ("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/preview")

const bonfireAudio = new Audio ("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/preview")

function pressForest() {
    forestAudio.play()
}

function pressRain() {
    rainAudio.play()
}

function pressCoffeeshop() {
    coffeeShopAudio.play()
}

function pressBonfire() {
    bonfireAudio.play()
}

export {
    pressForest,
    pressRain,
    pressCoffeeshop,
    pressBonfire,
}