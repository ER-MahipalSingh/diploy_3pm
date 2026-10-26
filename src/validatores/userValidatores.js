const z = require("zod");

exports.registerValidate = z.object({
  name: z.string().trim().min(6, "Name must be content 6 char"),
  email: z.string().trim().email(),
  password: z.string().min(8, "Password must be atlest 8 char long"),
});

exports.loginValidate = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8, "Password must be atlest 8 char long"),
});