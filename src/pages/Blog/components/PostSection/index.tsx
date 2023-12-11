import { PostsSectionContainer } from "./styles";
import { Post } from "./Post";
import { PostContext } from "../../../../contexts/PostsContext";
import { useContext } from "react";
export function PostsSection() {
	const { posts } = useContext(PostContext);
	return (
		<PostsSectionContainer>
			{posts.map((post) => {
				return (
					<Post
						date={post.dateDay}
						description={post.textContent}
						title={post.title}
						key={post.issueNumber}
						postNumber={post.issueNumber}
					/>
				);
			})}
		</PostsSectionContainer>
	);
}
