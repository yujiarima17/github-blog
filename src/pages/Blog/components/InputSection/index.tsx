import { HeaderPostsNumber, InputContainer, InputField, InputHeader } from "./styles";

export function InputSection() {
	return (
		<InputContainer>
			<InputHeader>
				Publicações <HeaderPostsNumber>6 publicações</HeaderPostsNumber>
			</InputHeader>
			<InputField placeholder="Buscar Conteúdo"/>
		</InputContainer>
	);
}
