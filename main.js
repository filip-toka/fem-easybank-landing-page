const menuButton = document.querySelector('.btn--primary-nav-toggle');
const nav = document.querySelector('.primary-nav');

if(menuButton && nav) {
    const backdropElement = Object.assign(
        document.createElement('div'),
        {
            className: 'primary-nav__backdrop'
        }
    );

    menuButton.addEventListener("click", () => {
        document.body.style.overflowY = !document.body.style.overflowY ? 'hidden' : null;
        const isOpen = menuButton.classList.toggle('opened');
        menuButton.setAttribute("aria-expanded", isOpen.toString())
        const navBackdrop = document.querySelector('.primary-nav__backdrop');
        if(navBackdrop) {
            navBackdrop.remove();
        } else {
            document.body.appendChild(backdropElement);
        }
        nav.classList.toggle('opened');
    })

}