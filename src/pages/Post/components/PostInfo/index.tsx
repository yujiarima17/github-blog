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
import { UserContext } from "../../../../contexts/UserContext";
import { useContextSelector } from "use-context-selector";
interface PostInfoProps {
	title: string;
	commentsAmount: number;
	dateDay: number;
	url: string;
}
export function PostInfo({
	title,
	commentsAmount,
	dateDay,
	url,
}: PostInfoProps) {
	const user = useContextSelector(UserContext, (context) => {
		return context.user;
	});
	return (
		<PostInfoContainer>
			<PostInfoHeader>
				<HeaderInfo href="..">
					<FontAwesomeIcon icon={faChevronLeft} color="#3294F8" />
					<span>VOLTAR</span>
				</HeaderInfo>
				<HeaderInfo href={url} target="_blank">
					<span>VER NO GITHUB</span>
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294F8" />
				</HeaderInfo>
			</PostInfoHeader>
			<PostData>
				{title}
				<PostDetailsContainer>
					<span className="post-detail">
						<FontAwesomeIcon icon={faGithub} color="#3A536B" />
						{user.username}
					</span>
					<span className="post-detail">
						<FontAwesomeIcon icon={faComment} color="#3A536B" />
						Há {dateDay} dia
					</span>
					<span className="post-detail">
						<FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />
						{commentsAmount}
						comentários
					</span>
				</PostDetailsContainer>
			</PostData>
		</PostInfoContainer>
	);
}
