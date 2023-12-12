import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../utils/axios";
import { createContext } from "use-context-selector";
interface User {
	readonly loginName: string;
	readonly avatarUrl: string;
	readonly biography: string;
	readonly username: string;
	readonly followers: number;
	readonly company: string;
	readonly url: string;
}
interface UserContextType {
	user: User;
}
export const UserContext = createContext({} as UserContextType);
interface UserProviderProps {
	children: ReactNode;
}
export function UserProvider({ children }: UserProviderProps) {
	const [user, setUser] = useState<User>();
	const fetchUser = useCallback(async () => {
		const response = await api.get("users/yujiarima17");
		const { bio, avatar_url, followers, login, name, company, html_url } =
			response.data;
		const userData = {
			loginName: login,
			avatarUrl: avatar_url,
			biography: bio,
			username: name,
			company,
			followers,
			url: html_url,
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
