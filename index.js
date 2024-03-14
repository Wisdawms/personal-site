const cursor_element = document.querySelectorAll('cursor');
const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
// const links = document.querySelectorAll('body a');

// links.forEach( (link) => {
//     link.onclick = () => {
//         const url = link.getAttribute('link');
//         console.log(url, link.innerHTML);
//         const linkBox = new WinBox({
//             title: link.innerHTML,
//             background: '#00aa00',
//             modal: true,
//             url: url,
//             onfocus: function () {
//                 this.setBackground('#00aa00');
//             },
//             onblur: function () {
//                 this.setBackground(idleColor);
//             }
//         });
//         linkBox.maximize();
//     }
// });

const idleColor = '777';

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me :)',
        background: '#00aa00',
        modal: true,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#00aa00');
        },
        onblur: function () {
            this.setBackground(idleColor);
        }
    });
}
)

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me :)',
        background: '#00aa00',
        modal: true,
        mount: contactContent,
        onfocus: function () {
            this.setBackground('#00aa00');
        },
        onblur: function () {
            this.setBackground(idleColor);
        }
    });
}
)

cursor_element.forEach((element) => {
    element.outerHTML = "<span class=\"cursor\">|</span>";
})

// on window resize, center and resize the open windowBox
window.addEventListener('resize', () => {
    const box = document.querySelector('.winbox');
    if (box) {
        box.style.maxWidth = '50%';
        box.style.maxHeight = '50%';
        box.style.position = "absolute";
        box.style.top = "50%";
        box.style.left = "50%";
        box.style.transform = "translate(-50%, -50%)";
    }

})