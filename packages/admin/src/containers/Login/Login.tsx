import React, { useContext } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from 'context/auth';
import {
  FormFields,
  FormLabel,
  FormTitle,
  Error,
} from 'components/FormFields/FormFields';
import { Wrapper, FormWrapper, LogoImage, LogoWrapper } from './Login.style';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Logoimage from 'assets/image/pickings_white.png';

const initialValues = {
  username: '',
  password: '',
};

const getLoginValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('El nombre de usuario es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
  });
};

const MyInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};

export default () => {
  let history = useHistory();
  let location = useLocation();
  const { authenticate, isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) return <Redirect to={{ pathname: '/' }} />;

  let { from } = (location.state as any) || { from: { pathname: '/' } };
  let login = ({ username, password }) => {
    authenticate({ username, password }, () => {
      history.replace(from);
    });
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={login}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form>
              <FormFields>
                <LogoWrapper>
                  <LogoImage src={Logoimage} alt="logo pickings" />
                </LogoWrapper>
                <FormTitle>Inicia sesión como Tipster</FormTitle>
              </FormFields>

              <FormFields>
                <FormLabel>Nombre de usuario</FormLabel>
                <Field
                  type="text"
                  name="username"
                  component={MyInput}
                  placeholder="Nombre de usuario"
                />
                {errors.username && touched.username && (
                  <Error>{errors.username}</Error>
                )}
              </FormFields>
              <FormFields>
                <FormLabel>Contraseña</FormLabel>
                <Field
                  type="password"
                  name="password"
                  component={MyInput}
                  placeholder="Contraseña"
                />
                {errors.password && touched.password && (
                  <Error>{errors.password}</Error>
                )}
              </FormFields>
              <Button
                type="submit"
                disabled={isSubmitting}
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      width: '100%',
                      marginLeft: 'auto',
                      borderTopLeftRadius: '3px',
                      borderTopRightRadius: '3px',
                      borderBottomLeftRadius: '3px',
                      borderBottomRightRadius: '3px',
                    }),
                  },
                }}
              >
                Entrar
              </Button>
            </Form>
          )}
          validationSchema={getLoginValidationSchema}
        />
      </FormWrapper>
    </Wrapper>
  );
};
