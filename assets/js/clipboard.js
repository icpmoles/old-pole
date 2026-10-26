document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".codeblock").forEach((codeBlock) => {
        // code.innerHTML = 'test';
        // code.querySelector("div.copy_interaction").innerHTML = 'text';
        const raw_code = codeBlock.children[1];
        // console.log(raw_code)
        const copy_button = codeBlock.querySelector(".copy_button")
        // console.log(copy_button)
        copy_button.hidden = false
        // console.log(copy_button)
        // console.log(codeBlock)
        copy_button.addEventListener("click", async () => {
            const payload = raw_code.innerText
            // console.log(payload)
            try {
                // Write the text to the clipboard
                await navigator.clipboard.writeText(payload);
            } catch (error) {
               console.log(`Copy failed: ${error.message}`);
            }
        });
    });
});