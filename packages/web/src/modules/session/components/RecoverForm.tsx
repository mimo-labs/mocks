import React, { FC } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box, Flex, Button } from "@chakra-ui/react";

// hooks
import { useRecoverPassword } from "modules/session/hooks/useRecoverPassword";

// ui components
import FormInput from "ui/components/FormInput";

// types
type LoginFormValues = {
  email: string;
};

// schema
const validationSchema = yup.object().shape({
  email: yup.string().email("Must be a valid email").required("This field is required"),
});

const initialValues = {
  email: "",
};

const RecoverForm: FC = () => {
  // custom hooks
  const { recoverPassword } = useRecoverPassword();

  // handlers
  const onSubmit = (values: LoginFormValues) => recoverPassword(values);

  // formik hooks
  const { errors, handleChange, touched, values, handleSubmit } = useFormik<LoginFormValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box bg="white" border="2px solid black" borderRadius={4} p={5} w={400}>
      <form onSubmit={handleSubmit}>
        <Flex align="center" flexDirection="column">
          <FormInput
            errors={errors}
            label="Email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
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

export default RecoverForm;
