"use client";

import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface formConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends formConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

export default function FXForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IProps) {
  const formConfig: formConfig = {};

  // set default values if necessary
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  // set resolver function if necessary
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
