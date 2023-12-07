import {
	ProfileBio,
	ProfileDataContainer,
	ProfileInfo,
	ProfileInfoContainer,
	ProfileName,
} from "./styles";
import { ArrowSquareUpRight } from "phosphor-react";
export function ProfileData() {
	return (
		<ProfileDataContainer>
			<ProfileName>Cameron Williamson</ProfileName>
			<ProfileBio>
				Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
				massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
				vel mass.
			</ProfileBio>
			<ProfileInfoContainer>
				<ProfileInfo>cameronwll</ProfileInfo>
				<ProfileInfo>Rocketseat</ProfileInfo>
				<ProfileInfo>32 seguidores</ProfileInfo>
			</ProfileInfoContainer>
		</ProfileDataContainer>
	);
}
