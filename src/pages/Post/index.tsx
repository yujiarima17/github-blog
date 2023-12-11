import { useContext } from "react";
import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";
import { PostContainer } from "./styles";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contexts/PostsContext";

export function Post() {
	const { postId } = useParams();
	const { getPost } = useContext(PostContext);
	const post = getPost(Number.parseInt(postId!));

	return (
		<PostContainer>
			<PostInfo
				title={post!.title}
				commentsAmount={post!.commentsAmount}
				dateDay={post!.dateDay}
				url={post!.url}
			></PostInfo>
			<PostContent content={post!.textContent} />
		</PostContainer>
	);
}
