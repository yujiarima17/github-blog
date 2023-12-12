import { PostContext } from "../../../../contexts/PostsContext";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	HeaderPostsNumber,
	InputContainer,
	InputField,
	InputHeader,
} from "./styles";
import { useContextSelector } from "use-context-selector";
import { useCallback } from "react";
const searchSchema = z.object({
	search: z.string(),
});
export function InputSection() {
	const { searchPosts, posts, fetchPosts } = useContextSelector(
		PostContext,
		(context) => {
			return context;
		}
	);

	const { register } = useForm({
		resolver: zodResolver(searchSchema),
	});

	const handleFetchPosts = useCallback(
		async (event: React.FocusEvent<HTMLInputElement>) => {
			const searchValue = event.target.value;
			if (searchValue) {
				await searchPosts(searchValue);
			} else {
				await fetchPosts();
			}
		},
		[fetchPosts, searchPosts]
	);

	return (
		<InputContainer>
			<InputHeader>
				Publicações
				<HeaderPostsNumber>{posts.length} publicações</HeaderPostsNumber>
			</InputHeader>
			<InputField
				placeholder="Buscar Conteúdo"
				{...register("search")}
				onBlur={(e) => handleFetchPosts(e)}
			/>
		</InputContainer>
	);
}
