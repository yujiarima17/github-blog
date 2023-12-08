import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../utils/axios";
import { createContext } from "react";
interface GitHubUser {
	readonly loginName: string;
	readonly avatarUrl: string;
	readonly biography: string |'Empty Biography';
	readonly username: string;
	readonly followers: number | 0;
	readonly company: string | "No Company";
}
interface UserContextType {
	user?: GitHubUser;
}
export const UserContext = createContext({} as UserContextType);
interface UserProviderProps {
	children: ReactNode;
}
export function UserProvider({ children }: UserProviderProps) {
	const [user, setUser] = useState<GitHubUser>();
	const fetchUser = useCallback(async () => {
		const response = await api.get("users/yujiarima17");
		const { bio, avatar_url, followers, login, name, company } = response.data;
		const userData = {
			loginName: login,
			avatarUrl: avatar_url,
			biography: bio,
			username: name,
			company,
			followers,
		};
		setUser(userData);
	}, []);
	useEffect(() => {
		fetchUser();
	}, [fetchUser]);
	return (
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	);
}
