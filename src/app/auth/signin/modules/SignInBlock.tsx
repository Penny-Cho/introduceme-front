import TextInput from "@/components/forms/TextInput";
import React from "react";

const SignInBlock = () => {
  return (
    <div>
      <TextInput
        label="전화번호"
        name="phone"
        value={"123"}
        onChange={() => console.log("1")}
      />
    </div>
  );
};

export default SignInBlock;
