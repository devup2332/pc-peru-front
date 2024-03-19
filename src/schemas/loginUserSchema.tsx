import { z } from "zod";
export const LOGIN_USER_SCHEMA = z.object({
	email: z.string().email({
		message: "Correo invalido.",
	}),

	password: z.string().min(6, {
		message: "La contraseña debe tener al menos 6 caracteres.",
	}),
});
