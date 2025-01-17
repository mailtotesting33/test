import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  username: Yup.string(),
  password: Yup.string().required(),
});
