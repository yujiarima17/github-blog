import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../utils/axios";
import { createContext } from "use-context-selector";
import { DateInDaysToNow } from "../utils/formatter";
interface Post {
	readonly title: string;
	readonly issueNumber: number;
	readonly textContent: string;
	readonly dateDay: number;
	readonly commentsAmount: number;
	readonly url: string;
}
interface PostContextType {
	posts: Post[];
	fetchPosts: () => Promise<void>;
	searchPosts: (searchText?: string) => Promise<void>;
	getPost: (postNumber: number) => Post | undefined;
}
export const PostContext = createContext({} as PostContextType);

interface PostProviderProps {
	children: ReactNode;
}

const githubUser = {
	username: "yujiarima17",
	repository: "github-blog-issues",
};

function postsList(posts: []): Post[] {
	return posts.map((post) => {
		const { body, html_url, title, number, created_at, comments } = post;
		const formatDate = DateInDaysToNow(created_at);
		return {
			url: html_url,
			title,
			issueNumber: number,
			textContent: body,
			dateDay: formatDate,
			commentsAmount: comments,
		};
	});
}
export function PostProvider({ children }: PostProviderProps) {
	const [posts, setPosts] = useState<Post[]>([]);

	const getPost = useCallback(
		(postNumber: number) => {
			const post = posts.find((post) => post.issueNumber == postNumber);
			return post;
		},
		[posts]
	);

	const fetchPosts = useCallback(async () => {
		const url = `repos/${githubUser.username}/${githubUser.repository}/issues`;
		const response = await api.get(url);
		const posts = postsList(response.data);
		setPosts(posts);
	}, []);

	const searchPosts = useCallback(async (searchText?: string) => {
		const url = `search/issues?q=${searchText}%20repo:${githubUser.username}/${githubUser.repository}`;
		const response = await api.get(url);
		const posts = postsList(response.data.items);
		setPosts(posts);
	}, []);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<PostContext.Provider value={{ posts, fetchPosts, getPost, searchPosts }}>
			{children}
		</PostContext.Provider>
	);
}
