import FormInput from "../components/FormInput";
import { FormEvent, useCallback, useState } from "react";

function getErrorMessage(input: string) {
  if (input.length > 0 && input.length < 5)
    return "Minimum input length of 5 characters";
  return null;
}

enum FieldNames {
  name = "name",
  email = "email",
  address = "address",
  country = "country",
  bio = "bio",
}

type FormDataType = { [key in FieldNames]: string };

export default function Profile() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    address: "",
    country: "",
    bio: "",
  });

  const formHandler = (target) => {
    const fieldName = target.name;
    const fieldValue = target.value;
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const errorRender = useCallback(
    (fieldName: FieldNames) => {
      const errorMessage = getErrorMessage(formData[fieldName]);
      return errorMessage ? (
        <p className="text-sm text-red-600">{errorMessage}</p>
      ) : (
        <></>
      );
    },
    [formData]
  );

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "Pretending to send form data...",
      Object.fromEntries(new FormData(e.currentTarget).entries())
    );
  };

  return (
    <form
      className="max-w-screen-sm mx-auto m-6 p-3 space-y-3 border"
      onSubmit={submitForm}
    >
      <FormInput
        id={FieldNames.name}
        label="Name"
        onInput={formHandler}
        errorMessage={() => errorRender(FieldNames.name)}
      />
      <FormInput
        id={FieldNames.email}
        label="Email"
        onInput={formHandler}
        errorMessage={() => errorRender(FieldNames.email)}
      />
      <FormInput
        id={FieldNames.address}
        label="Address"
        onInput={formHandler}
        errorMessage={() => errorRender(FieldNames.address)}
      />
      <FormInput
        id={FieldNames.country}
        label="Country"
        onInput={formHandler}
        errorMessage={() => errorRender(FieldNames.country)}
      />
      <FormInput
        id={FieldNames.bio}
        label="About me"
        onInput={formHandler}
        errorMessage={() => errorRender(FieldNames.bio)}
      />
      <div className="text-center pt-4">
        <button type="submit" className="ml-auto border p-3">
          Save
        </button>
      </div>
    </form>
  );
}
