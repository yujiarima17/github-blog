import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	HeaderInfo,
	PostData,
	PostDetailsContainer,
	PostInfoContainer,
	PostInfoHeader,
} from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faChevronLeft,
	faArrowUpRightFromSquare,
	faComment,
	faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
export function PostInfo() {
	return (
		<PostInfoContainer>
			<PostInfoHeader>
				<HeaderInfo to="..">
					<FontAwesomeIcon icon={faChevronLeft} color="#3294F8" />
					<span>VOLTAR</span>
				</HeaderInfo>
				<HeaderInfo to="">
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294F8" />
					<span>VER NO GITHUB</span>
				</HeaderInfo>
			</PostInfoHeader>
			<PostData>
				Javascript data types and data structures
				<PostDetailsContainer>
					<span className="post-detail">
						<FontAwesomeIcon icon={faGithub} color="#3A536B" />
						cameronwll
					</span>
					<span className="post-detail">
						<FontAwesomeIcon icon={faComment} color="#3A536B" />
						Há 1 dia
					</span>
					<span className="post-detail">
						<FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />5
						comentários
					</span>
				</PostDetailsContainer>
			</PostData>
		</PostInfoContainer>
	);
}
