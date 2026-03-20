for (let i = 0; i < 12; i++) {
    let k = document.createElement("img");

    k.src = "ketupat 2.png";
    k.className = "ketupat";

    k.style.left = Math.random() * 100 + "vw";
    k.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(k);
}