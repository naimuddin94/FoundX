import { ReactNode } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IFXFormProviderProps extends IFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

const FXFormProvider = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IFXFormProviderProps) => {
  const formConfig: IFormConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXFormProvider;
