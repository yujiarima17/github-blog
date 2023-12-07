import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";
import { PostContainer } from "./styles";

export function Post() {
	return (
		<PostContainer>
			<PostInfo></PostInfo>
			<PostContent />
		</PostContainer>
	);
}
