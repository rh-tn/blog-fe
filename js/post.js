$(document).ready(function() {

    class App {
        constructor(data) {
          this.init(data);
          this.addEventListeners();
        }
      
        init(data) {
            
            let textArea = document.createElement("textarea");
            textArea.value = data;
    
            let origin = $("#origin");
            origin.append(textArea);
            origin.css('display', 'none');
            
    
          const input = this.input = CodeMirror.fromTextArea(
            textArea,
          {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/x-markdown",
            theme: "material" });
      
      
          const output = this.output = CodeMirror.fromTextArea(
          document.querySelector(".js-output"),
          {
            lineNumbers: true,
            matchBrackets: true,
            mode: "text/html",
            theme: "material",
            readOnly: true });
      
      
      
          this.preview = document.querySelector(".js-preview");
      
          output.getWrapperElement().classList.add("CodeMirror-readonly");
      
          this.compile(input.getValue());
        }
      
        compile(source) {
          const previewDocument = this.preview.contentDocument;
          const output = marked(source);
      
          previewDocument.open();
          previewDocument.write(output);
          $('.js-preview').css('height', previewDocument.body.scrollHeight);
          previewDocument.close();
      
          this.output.setValue(output);
        }
      
        addEventListeners() {
          const { input } = this;
          let delay;
      
          input.on("change", () => {
            clearTimeout(delay);
            delay = setTimeout(() => this.compile(input.getValue()), 300);
          });
        }
    }

    const data = '# Angular Markdown Editor\n\n> GitHub Flavored Markdown Editor\n\n# Built with\n- **[marked](https://github.com/chjj/marked)** for Parsing Markdown\n- **[angular-marked](https://github.com/Hypercubed/angular-marked)** for easier usage of *marked*\n- **[highlight-js](https://github.com/isagalaev/highlight.js)** for code highlighting\n- **[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)** for beautifying markdown output\n- **[highlight-js css](https://github.com/isagalaev/highlight.js/tree/master/src/styles)** for beautifying code output\n\n# Examples\n* Javascript\n\n```javascript\nfunction() {	\n  console.log("This is awesome!");\n}\n```\n\n* Bash\n\n```bash\n# step 1\nnpm install\n```\netc..\n\n# The End\n- Enjoy ~\n # Angular Markdown Editor\n\n> GitHub Flavored Markdown Editor\n\n# Built with\n- **[marked](https://github.com/chjj/marked)** for Parsing Markdown\n- **[angular-marked](https://github.com/Hypercubed/angular-marked)** for easier usage of *marked*\n- **[highlight-js](https://github.com/isagalaev/highlight.js)** for code highlighting\n- **[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)** for beautifying markdown output\n- **[highlight-js css](https://github.com/isagalaev/highlight.js/tree/master/src/styles)** for beautifying code output\n\n# Examples\n* Javascript\n\n```javascript\nfunction() {	\n  console.log("This is awesome!");\n}\n```\n\n* Bash\n\n```bash\n# step 1\nnpm install\n```\netc..\n\n# The End\n- Enjoy ~\n'
    new App(data);
    // 
});


