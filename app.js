import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const textArea = document.getElementById('md');
const container = document.querySelector('.container');


const octokit = new Octokit()
textArea.addEventListener("change", async () => {
    await octokit.request('POST /markdown', {
        text: textArea.value,
        mode: 'gfm'
    })
        .then(res => {
            console.log(res.data)
            container.innerHTML = res.data
        })
        .catch(err => console.log(err));
})