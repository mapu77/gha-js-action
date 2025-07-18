import request from "request-promise";

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action GitHub Skills course.",
    },
    json: true,
};

export const getJoke = async () => {
    const res = await request(options);
    return res.joke;
}