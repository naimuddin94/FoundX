"use client";

import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

export default function CreatePost() {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map(
        (que: { name: string; value: string }) => que.value
      ),
      
    };
    console.log(postData);
  };

  const handleQuestionAppend = () => {
    append({ name: "questions" });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <FXInput name="title" size="sm" label="Title" />
          <FXDatePicker name="dateFound" label="Found Date" size="sm" />
          <Divider className="my-5" />
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-xl">Owner Verification Question</h1>
            <Button onClick={() => handleQuestionAppend()}>➕</Button>
          </div>
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex justify-between items-center gap-4"
              >
                <FXInput
                  size="sm"
                  name={`questions.${index}.value`}
                  label={`Questions ${index + 1}`}
                />
                <Button onClick={() => remove(index)}>❌</Button>
              </div>
            ))}
          </div>
          <Divider className="my-5" />
          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
}
