"use client";

import { Slot } from "@radix-ui/react-slot";
import { mergeClass } from "@shared/libs/utils";
import * as React from "react";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

const Form = FormProvider;

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => (
  <FormFieldContext value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext>
);

const useFormField = () => {
  const fieldContext = React.use(FormFieldContext);
  const itemContext = React.use(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItem = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  const id = React.useId();

  return (
    <FormItemContext value={{ id }}>
      <div
        className={mergeClass("space-y-2", className)}
        ref={ref}
        {...props}
      />
    </FormItemContext>
  );
};
FormItem.displayName = "FormItem";

const FormControl = ({
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof Slot> & {
  ref?: React.RefObject<React.ComponentRef<typeof Slot> | null>;
}) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`
      }
      aria-invalid={!!error}
      id={formItemId}
      ref={ref}
      {...props}
    />
  );
};
FormControl.displayName = "FormControl";

const FormDescription = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  ref?: React.RefObject<HTMLParagraphElement | null>;
}) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      className={mergeClass("text-muted-foreground text-sm", className)}
      id={formDescriptionId}
      ref={ref}
      {...props}
    />
  );
};
FormDescription.displayName = "FormDescription";

const FormMessage = ({
  ref,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  ref?: React.RefObject<HTMLParagraphElement | null>;
}) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      className={mergeClass("ml-2 text-pink-500 text-sm", className)}
      id={formMessageId}
      ref={ref}
      {...props}
    >
      {body}
    </p>
  );
};
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  useFormField,
};
