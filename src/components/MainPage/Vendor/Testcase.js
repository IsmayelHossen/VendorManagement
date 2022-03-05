import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Testcase = () => {
  const [name, setname] = React.useState("");
  const [hone, setPhone] = useState("");
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data) => console.log(data);
  return (
    <div className="page-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("test")} />
        <input type="number" {...register("number")} />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Testcase;
