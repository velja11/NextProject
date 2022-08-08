import Link from "next/link";
import React, { useRef } from "react";
import { auth, passwordReset } from "../../featuresFirebase/firebase";
import { useRouter } from "next/router";
import {
  resetPassNot,
  deletePassErr,
  setResetPassErr,
  setPassReset,
} from "../../features/loginSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import Button from "../../components/Button/buttonItem";
import { Input } from "../../components/Input/inputItem";
import NotificationItem from "../../components/Notifications/notificationItem";
import SVG from "../../components/SVG/svgItem";

const IndexPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const resetPassErrNot = useAppSelector(resetPassNot);

  const resetPasswordHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current!.value;

    passwordReset(auth, email)
      .then(() => {
        dispatch(
          setPassReset(
            "You succesfully sent a request. Check your email for reset pass!"
          )
        );
        router.push("/login");
      })
      .catch((err) => {
        dispatch(setResetPassErr(err.message));
      });
  };

  const deleteResetErrNot = () => {
    dispatch(deletePassErr());
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {resetPassErrNot && (
        <NotificationItem classStyle="w-[28%] bg-red-400 p-2 rounded-xl flex justify-between items-center">
          <div className="font-bold ml-2">{resetPassErrNot}</div>
          <SVG closeClick={deleteResetErrNot} />
        </NotificationItem>
      )}

      <form
        className="form bg-wheat-400 border-gray shadow-gray-300 bg-white rounded-3xl"
        onSubmit={resetPasswordHandler}
      >
        <h1 className="mt-4 font-bold text-2xl">Reset password</h1>

        <Input
          plcHolder="Email"
          typeInp="email"
          classStyle="input mt-10"
          ref={emailRef}
        />

        <Button
          buttonClass="border border-gray bg-orange-300 px-4 py-2 font-bold box-border rounded-md mt-10 mb-4 w-4/5"
          buttonType="submit"
        >
          Reset password
        </Button>
        <Link href="/login">
          <span className="underline cursor-pointer mb-10">
            Back to login page
          </span>
        </Link>
      </form>
    </div>
  );
};

export default IndexPage;
