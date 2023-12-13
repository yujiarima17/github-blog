import { PostContainer, PostContent, PostHeader } from "./styles";

interface PostProps {
	title: string;
	description: string;
	date: number;
	postNumber: number;
}
export function Post({ title, description, date, postNumber }: PostProps) {
	const postDateFormat = date == 1 ? `Há ${date} dia` : `Há ${date} dias`;
	return (
		<PostContainer to={`/posts/${postNumber}`}>
			<PostHeader>
				<span className="title">{title}</span>
				<span className="postDate">{postDateFormat}</span>
			</PostHeader>
			<PostContent>{description}</PostContent>
		</PostContainer>
	);
}
