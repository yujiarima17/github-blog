import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NoPostsContainer } from "./styles";
import { faBan } from "@fortawesome/free-solid-svg-icons";

export function NoPost() {
	return (
		<NoPostsContainer>
			<FontAwesomeIcon icon={faBan} size="4x" />
			<span>No Posts Found!!</span>
		</NoPostsContainer>
	);
}
