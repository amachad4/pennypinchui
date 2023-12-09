import { FaLock } from "react-icons/fa";
import Link from "next/link";
import PennyPinchForm from "@/components/UI/PennyPinchForm";
import classes from "./page.module.css";
import PennyPinchInput from "@/components/UI/PennyPinchInput";
import PennyPinchButton from "@/components/UI/PennyPinchButton";
import { Metadata } from "next";

const LOGIN_HEADING = `Welcome back to Penny Pinch!`;

const LOGIN_MESSAGE = `Your financial journey starts
here. Sign in to track your expenses, set savings goals, and take
control of your money. Let's make every penny count!`;

export const metadata: Metadata = {
  title: "Log In",
};

export default function Login() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>{LOGIN_HEADING}</h1>
        <h2>{LOGIN_MESSAGE}</h2>
      </header>
      <div className={classes[`login-form`]}>
        <div className={classes[`lock-icon`]}>
          <FaLock color="white" fontSize="3rem" />
        </div>

        <PennyPinchForm method="POST">
          <div className={classes["login-form-group"]}>
            <PennyPinchInput name="email" type="email" placeholder="Email" />
          </div>
          <div className={classes["login-form-group"]}>
            <PennyPinchInput
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={classes["login-form-actions"]}>
            <p>
              Don't have an acount?&nbsp;<Link href="/register">Sign up!</Link>
            </p>
            <div>
              <PennyPinchButton type="cancel" text="Cancel" />
              <PennyPinchButton type="submit" text="Log In" />
            </div>
          </div>
        </PennyPinchForm>
      </div>
    </div>
  );
}
