import z from "zod";

const envSchema = z.object({
  HOTPEPPER_API_KEY: z.string().nonempty(),
});

// 環境変数は必須なので、起動時に検証してエラーを出す
export const env = envSchema.parse(process.env);
