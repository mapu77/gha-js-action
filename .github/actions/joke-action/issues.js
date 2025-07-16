const github = require("@actions/github");
const core = require("@actions/core");

const token = core.getInput("GITHUB_TOKEN", { required: true });
const octokit = new github.getOctokit(token);

function commentIssue(joke) {
    const repo = core.getInput("repository", { required: true });
    const owner = core.getInput("owner", { required: true });
    const issue_number = core.getInput("issue_number", { required: true });

    return octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
        owner: owner,
        repo: repo,
        issue_number: issue_number,
        body: joke,
    })
}

module.exports = commentIssue;