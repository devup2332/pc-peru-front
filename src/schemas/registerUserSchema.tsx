import { z } from "zod";

const phoneRegex = new RegExp(
	/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const REGISTER_USER_SCHEMA = z
	.object({
		email: z.string().email({
			message: "Correo invalido.",
		}),
		phone: z
			.string()
			.regex(phoneRegex, { message: "Numero de telefono invalido" })
			.min(9, {
				message: "El teléfono debe tener al menos 10 caracteres.",
			}),
		full_name: z.string().min(3, {
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
