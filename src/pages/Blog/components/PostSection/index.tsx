import { NoPostsContainer, PostsSectionContainer } from "./styles";
import { Post } from "./Post";
import { PostContext } from "../../../../contexts/PostsContext";
import { useContextSelector } from "use-context-selector";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function PostsSection() {
	const posts = useContextSelector(PostContext, (context) => {
		return context.posts;
	});
	const hasPosts = posts.length > 0;
	return hasPosts ? (
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
	) : (
		<NoPostsContainer>
			<FontAwesomeIcon icon={faBan} size="4x" />
			<span>No Posts Found!!</span>
		</NoPostsContainer>
	);
}
