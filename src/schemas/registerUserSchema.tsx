import { z } from "zod";

export const REGISTER_USER_SCHEMA = z
	.object({
		email: z.string().email({
			message: "Correo invalido.",
		}),
		phone: z.string().min(9, {
			message: "El teléfono debe tener al menos 10 caracteres.",
		}),
		fullName: z.string().min(3, {
			message: "El nombre completo debe tener al menos 3 caracteres.",
		}),
		password: z.string().min(6, {
			message: "La contraseña debe tener al menos 6 caracteres.",
		}),
		password2: z.string().min(6, {
			message: "La contraseña debe tener al menos 6 caracteres.",
		}),
	})
	.refine(
		(data) => {
			return data.password === data.password2;
		},
		{
			message: "Las contraseñas no coinciden.",
			path: ["password2"],
		},
	);
