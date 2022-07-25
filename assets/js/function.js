const coder = document.querySelector(".coder");
const container = document.querySelector(".container");
const codeEditorCSS = document.querySelector(
  ".coder .code-editor:nth-child(2)"
);

function setViews(views, hapusview) {
  if (views == "normal") {
    coder.classList.remove("view1", "view3");
    container.classList.remove("view1", "view3");
    codeEditorCSS.classList.remove("view1", "view3");
    setViewCode("normal");
  } else {
    coder.classList.add(views);
    container.classList.add(views);
    codeEditorCSS.classList.add(views);
    coder.classList.remove(hapusview);
    container.classList.remove(hapusview);
    codeEditorCSS.classList.remove(hapusview);
    setViewCode(views);
  }
}

function setViewCode(category) {
  if (category == "normal") {
    for (var i = 0; i < document.getElementsByClassName("code").length; i++) {
      document.getElementsByClassName("code")[i].style.maxHeight = "unset";
      document.getElementsByClassName("code")[i].style.height =
        document.querySelector(".code-editor").clientHeight - 80 + "px";
    }
    resizeEditor();
  } else {
    for (var i = 0; i < document.getElementsByClassName("code").length; i++) {
      document.getElementsByClassName("code")[i].style.height =
        document.querySelector(".code-editor").clientHeight - 40 + "px";
      document.getElementsByClassName("code")[i].style.maxHeight = "170px";
    }
    resizeEditor();
  }
}

function resizeEditor(htmlEditor, cssEditor, jsEditor) {
  htmlEditor.resize();
  cssEditor.resize();
  jsEditor.resize();
}
