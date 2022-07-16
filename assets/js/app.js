window.onload = function () {
    let jsEditor = ace.edit("js");
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.setTheme("ace/theme/nord_dark");
    jsEditor.session.setUseWrapMode(true);
    jsEditor.setHighlightActiveLine(false);
    if (localStorage.getItem("codepen-clone-storage-js") == null) {
        jsEditor.session.setValue(`// Javascript Goes Here`);
    } else {
        jsEditor.session.setValue(localStorage.getItem("codepen-clone-storage-js"))
    }

    jsEditor.addEventListener("change", () => {
        run();
        console.log(jsEditor.session.getValue());
    });

    let cssEditor = ace.edit("css");
    cssEditor.session.setMode("ace/mode/css");
    cssEditor.setTheme("ace/theme/nord_dark");
    cssEditor.session.setUseWrapMode(true);
    cssEditor.setHighlightActiveLine(false);
    if (localStorage.getItem("codepen-clone-storage-css") == null) {
        cssEditor.session.setValue(`/* CSS Goes Here */`);
    } else {
        cssEditor.session.setValue(localStorage.getItem("codepen-clone-storage-css"))
    }
    cssEditor.addEventListener("change", () => {
        run();
        console.log(cssEditor.session.getValue());
    });

    let htmlEditor = ace.edit("html");
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.setTheme("ace/theme/nord_dark");
    htmlEditor.session.setUseWrapMode(true);
    htmlEditor.setHighlightActiveLine(false);
    htmlEditor.addEventListener("change", () => {
        run();
        console.log(htmlEditor.session.getValue());
    });
    if (localStorage.getItem("codepen-clone-storage-html") == null) {
        htmlEditor.session.setValue(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
</html>`);
    } else {
        htmlEditor.session.setValue(localStorage.getItem("codepen-clone-storage-html"));
    }



    function run() {
        const output = document.querySelector(".output iframe.virtual");
        output.contentWindow.document.open();
        output.contentWindow.document.write("<style>" + cssEditor.getValue() + "</style>" + htmlEditor.getValue() + "<script>" + jsEditor.getValue() + "</script>");
        output.contentWindow.document.close();

        localStorage.setItem("codepen-clone-storage-html", htmlEditor.getValue());
        localStorage.setItem("codepen-clone-storage-css", cssEditor.getValue());
        localStorage.setItem("codepen-clone-storage-js", jsEditor.getValue());
    }

    const layoutBtn = document.querySelector(".layouts");
    const layoutView = document.querySelector(".layout-view");
    layoutBtn.addEventListener("click", () => {
        layoutView.classList.toggle("click-layout");
    });

    const jenisLayout = document.querySelectorAll(".icon-view img");
    for (let i = 0; i < jenisLayout.length; i++) {
        jenisLayout[i].classList.remove("active");
        jenisLayout[i].addEventListener("click", () => {
            if (!jenisLayout[i].classList.contains("active")) {
                jenisLayout[i].classList.add("active");
            }
        })
    }

    const judulCode = document.querySelector(".user p:first-child span");
    const inputJudulCode = document.querySelector(".user p:first-child input");
    const editJudulCode = document.querySelector(".user p:first-child i");

    if (localStorage.getItem("codepen-clone-storage-judul") == null) {
        judulCode.textContent = "Untitled";
    } else {
        judulCode.textContent = localStorage.getItem("codepen-clone-storage-judul");
    }

    editJudulCode.addEventListener("click", () => {
        inputJudulCode.style.display = "block";
        judulCode.style.display = "none";
        editJudulCode.style.display = "none";
        inputJudulCode.focus();
        setJudul();
    });

    function setJudul() {
        const inputJudulCode = document.querySelector(".user p:first-child input");
        inputJudulCode.addEventListener("keyup", e => {
            let judul = inputJudulCode.value;
            if (e.key == "Enter") {
                localStorage.setItem("codepen-clone-storage-judul", judul);
                inputJudulCode.style.display = "none";
                judulCode.style.display = "block";
                judulCode.textContent = "Hold a second...";
                editJudulCode.style.display = "block";
                document.location.reload(true);
            }
        });
    }

}