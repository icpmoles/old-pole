document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".codeblock").forEach((codeBlock) => {
        // code.innerHTML = 'test';
        // code.querySelector("div.copy_interaction").innerHTML = 'text';
        this.raw_code = codeBlock.children[1];
        // console.log(this.raw_code)
        let copy_button = codeBlock.children[2]
        // console.log(copy_button)
        copy_button.innerText = "📋"
        // console.log(copy_button)
        // console.log(codeBlock)
        copy_button.addEventListener("click", async () => {
            payload = this.raw_code.innerText
            console.log(payload)
            try {
                // Write the text to the clipboard
                await navigator.clipboard.writeText(payload);
            } catch (error) {
               console.log(`Copy failed: ${error.message}`);
            }
        });
    });
});