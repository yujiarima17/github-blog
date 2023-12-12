import axios from "axios";

const gitApiKey = "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";
export const api = axios.create({
	baseURL: "https://api.github.com",
	headers: { Authorization: gitApiKey },
});
