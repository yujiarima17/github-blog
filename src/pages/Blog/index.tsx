import { InputSection } from "./components/InputSection";
import { PostsSection } from "./components/PostSection";
import { Profile } from "./components/Profile";
import { BlogContainer } from "./styles";

export function Blog() {
	return (
		<BlogContainer>
			<Profile />
			<InputSection />
			<PostsSection />
		</BlogContainer>
	);
}
