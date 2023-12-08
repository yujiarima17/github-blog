import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.github.com",
	headers: { Authorization: "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" },
});
