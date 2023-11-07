const tabs = document.querySelectorAll(".label");

const codeBox = document.querySelectorAll(".code-box");

tabs.forEach((tab, indx) => {
  tab.addEventListener("click", () => {
    tabs[indx].classList.toggle("toggle-label");

    codeBox[indx].classList.toggle("toggle-tab");
  });
});

// 

const htmlCode = document.querySelector(".html-code");

const cssCode = document.querySelector(".css-code");

const jsCode = document.querySelector(".js-code");

const codeOutput = document.querySelector(".output");


const runCode = () => {

  codeOutput.contentDocument.body.innerHTML = `${htmlCode.value}`+   `<style>${cssCode.value}</style>`;

  codeOutput.contentWindow.eval(jsCode.value);

}


htmlCode.addEventListener('keyup', runCode);

cssCode.addEventListener('keyup', runCode);

jsCode.addEventListener('keyup', runCode)

