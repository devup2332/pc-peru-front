import { instance } from "@/config/clientApi";

export interface RegieterUserBody {
	full_name: string;
	email: string;
	password: string;
	password2?: string;
	phone: string;
}

export interface LoginUserBody {
	email: string;
	password: string;
}
export const authApi = {
	registerUser: async (body: RegieterUserBody) => {
		return await instance.post("/auth/registerUser", body);
	},
	loginUser: async (body: LoginUserBody) => {
		return await instance.post("/auth/loginUser", body);
	},
};
