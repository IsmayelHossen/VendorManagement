// import React, { useCallback, useEffect } from "react";
// import { useForm, setValue, useFieldArray } from "react-hook-form";

// const Testcase = () => {
//   const { replace } = useFieldArray({ name: "test" });
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     replace([{ data: "test" }]);
//     setValue("email", "ismayelhossen@", { shouldValidate: true });
//     console.log(data);
//   };

//   console.log(watch("example"));

//   return (
//     <div className="page-wrapper">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* register your input into the hook by invoking the "register" function */}
//         <input defaultValue="test" {...register("example")} />

//         {/* include validation with required or other standard HTML validation rules */}
//         <input {...register("exampleRequired", { required: true })} />
//         {/* errors will return when field validation fails  */}
//         {errors.exampleRequired && <span>This field is required</span>}

//         <input type="submit" />
//       </form>
//     </div>
//   );
// };
// export default Testcase;
