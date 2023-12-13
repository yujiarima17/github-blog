import { NoPostsContainer, PostsSectionContainer } from "./styles";
import { Post } from "./components/Post";
import { PostContext } from "../../../../contexts/PostsContext";
import { useContextSelector } from "use-context-selector";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NoPost } from "./components/NoPost";
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
		<NoPost />
	);
}
