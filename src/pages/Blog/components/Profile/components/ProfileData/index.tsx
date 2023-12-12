import {
	ProfileBio,
	ProfileDataContainer,
	ProfileInfo,
	ProfileInfoContainer,
	ProfileName,
} from "./styles";
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../../../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContextSelector } from "use-context-selector";
export function ProfileData() {
	const user = useContextSelector(UserContext, (context) => {
		return context.user;
	});
	return (
		<ProfileDataContainer>
			<a className="link" href={user?.url}>
				GITHUB
				<FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#3294F8" />
			</a>
			<ProfileName>{user?.username}</ProfileName>
			<ProfileBio>{user?.biography}</ProfileBio>
			<ProfileInfoContainer>
				<ProfileInfo>
					<FontAwesomeIcon icon={faGithub} color="#3A536B" />
					{user?.loginName}
				</ProfileInfo>
				<ProfileInfo>
					<FontAwesomeIcon icon={faBuilding} color="#3A536B" />
					{user?.company}
				</ProfileInfo>
				<ProfileInfo>
					<FontAwesomeIcon icon={faUserGroup} color="#3A536B" />
					{`${user?.followers} seguidores`}
				</ProfileInfo>
			</ProfileInfoContainer>
		</ProfileDataContainer>
	);
}
