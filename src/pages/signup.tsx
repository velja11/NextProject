import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { auth, createUser } from "../featuresFirebase/firebase";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  createNewUsr,
  setSignUpError,
  errorSignUpNots,
  deleteSignUpNotification,
} from "../features/loginSlice";
import Button from "../components/Button/buttonItem";
import { Input } from "../components/Input/inputItem";
import NotificationItem from "../components/Notifications/notificationItem";
import SVG from "../components/SVG/svgItem";

const Signup = () => {
  const [cbxAgree, setCxbAgree] = useState<boolean>(false);
  const router = useRouter();

  const refEmail = useRef<HTMLInputElement>(null);
  const refPass = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const errorSignUpNotif = useAppSelector(errorSignUpNots);

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const email = refEmail.current!.value;
    const password = refPass.current!.value;

    if (cbxAgree !== true) {
      return;
    } else {
      createUser(auth, email, password)
        .then((cred) => {
          console.log("User:", cred.user);
          dispatch(createNewUsr());
          router.push("/login");
        })
        .catch((err) => {
          dispatch(setSignUpError(err.message));
        });
    }
  };

  const deleteSignUpError = () => {
    dispatch(deleteSignUpNotification());
  };

  return (
    <div className="text-center mt-10 flex flex-col justify-center items-center mb-10">
      {errorSignUpNotif && (
        <NotificationItem classStyle="w-[28%] bg-red-400 p-2 rounded-xl flex justify-between items-center">
          <div className="font-bold ml-2">{errorSignUpNotif}</div>
          <SVG closeClick={deleteSignUpError} />
        </NotificationItem>
      )}

      <form
        className="form bg-wheat-400 border-gray shadow-gray-300 bg-white rounded-3xl"
        onSubmit={onSubmitHandler}
      >
        <h1 className="mt-8 font-bold text-3xl">Sign up</h1>
        <p className="mt-3 text-md non-italic">
          Hey, let's fill the fields and create account
        </p>

        <div className="grid grid-cols-2 gap-4 w-[80%] mt-10">
          <Input typeInp="text" classStyle="signupInp" plcHolder="First name" />
          <Input typeInp="text" classStyle="signupInp" plcHolder="Last name" />
          <Input typeInp="text" classStyle="signupInp" plcHolder="Country" />
          <Input typeInp="text" classStyle="signupInp" plcHolder="Mobile" />
        </div>

        <Input
          plcHolder="Email"
          typeInp="email"
          classStyle="input mt-4"
          ref={refEmail}
        />
        <Input
          plcHolder="Password"
          typeInp="password"
          classStyle="input mt-4"
          ref={refPass}
        />

        <div className="flex justify-start items-center w-[80%] mt-8">
          <input
            type="checkbox"
            id="check"
            className="mb-5 desktop:mb-0"
            onChange={(e) => setCxbAgree(e.target.checked)}
          ></input>
          <p className="ml-1 text-sm desktop:ml-2">
            I agree with Terms of Conditions and Privacy Policies
          </p>
        </div>

        <Button
          buttonClass={`border border-gray ${
            !cbxAgree ? "bg-gray-300 cursor-not-allowed" : "bg-orange-300"
          } px-4 py-2 font-bold box-border rounded-md mt-10 w-4/5`}
          buttonType="submit"
        >
          Create account
        </Button>

        <p className="mb-16 mt-10">
          Already have account?
          <Link href="/login">
            <span className="ml-1 font-bold cursor-pointer hover:underline">
              Log in
            </span>
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
