const yes = document.getElementById("yes");
const no = document.getElementById("no");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const finish = document.getElementById("finish");

yes.onclick = function () {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
};

no.onmouseover = function () {
    no.style.position = "absolute";
    no.style.left = Math.random() * (window.innerWidth - 120) + "px";
    no.style.top = Math.random() * (window.innerHeight - 60) + "px";
};

no.onclick = no.onmouseover;

finish.onclick = function () {
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
};
