function onButtonClick(element) {
    const el = element.parentNode.querySelectorAll("p")[0]
    const more = element.parentNode.querySelectorAll(".more")[0]
    const dots = element.parentNode.querySelectorAll(".dots")[0]
    const btn = element.parentNode.querySelectorAll(".btn")[0]
    console.log("Thanks for clicking;)", el)
    if (more.style.display === 'none') {
        more.style.display = 'block'
        dots.style.display = 'none'
        btn.innerHTML = 'Read less'
    }
    else {
        more.style.display = 'none'
        dots.style.display = 'inline'
        btn.innerHTML = 'Read more'
    }
}