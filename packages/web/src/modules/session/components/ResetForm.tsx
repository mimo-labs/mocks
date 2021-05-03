import React, { FC } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box, Flex, Button } from "@chakra-ui/react";

// hooks
import { useResetPassword } from "modules/session/hooks/useResetPassword";

// ui components
import FormPasswordInput from "ui/components/FormPasswordInput";

// types
type LoginFormValues = {
  newPassword: string;
  newPasswordConfirmation: string;
};

// schema
const validationSchema = yup.object().shape({
  newPassword: yup.string().required("This field is required"),
  newPasswordConfirmation: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Password must match")
    .required("This field is required"),
});

const initialValues = {
  newPassword: "",
  newPasswordConfirmation: "",
};

const LoginForm: FC = () => {
  // custom hooks
  const { resetPassword } = useResetPassword();

  // handlers
  const onSubmit = (values: LoginFormValues) => resetPassword(values);

  // formik hooks
  const { errors, handleChange, values, handleSubmit, touched } = useFormik<LoginFormValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box bg="white" border="2px solid black" borderRadius={4} p={5} w={400}>
      <form onSubmit={handleSubmit}>
        <Flex align="center" flexDirection="column">
          <FormPasswordInput
            errors={errors}
            label="New password"
            name="newPassword"
            onChange={handleChange}
            placeholder="Enter your new password"
            touched={touched}
            values={values}
          />
          <FormPasswordInput
            errors={errors}
            label="Repeat password"
            name="newPasswordConfirmation"
            onChange={handleChange}
            placeholder="Repeat your new password"
            touched={touched}
            values={values}
          />
        </Flex>
        <Flex align="center" flexDirection="column" mt={10}>
          <Button bg="black" color="white" type="submit" w="100%">
            CONFIRM
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default LoginForm;
