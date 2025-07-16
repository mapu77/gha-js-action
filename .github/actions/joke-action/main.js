const core = require("@actions/core");
const getJoke = require("./joke");
const commentIssue = require("./issues");

async function run() {
    const joke = await getJoke();
    console.log(joke);
    core.setOutput("joke-output", joke);

    return commentIssue(joke).then((response) => {
        core.info(`Issue comment: ${response.data.html_url}`);
    }).catch((error) => {
        core.setFailed(`Error commenting on PR: ${error.message}`);
    })
}

run();