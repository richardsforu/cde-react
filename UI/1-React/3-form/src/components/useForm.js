import { useState, useEffect } from "react";

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //???

    console.log(values);
    setErrors(validate(values));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
        submitForm();
    }
  }, [errors]);

  return { handleSubmit, handleChange, values, errors };
};

export default useForm;
