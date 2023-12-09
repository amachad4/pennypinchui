import PennyPinchButton from '@/components/UI/PennyPinchButton';
import PennyPinchForm from '@/components/UI/PennyPinchForm';
import PennyPinchInput from '@/components/UI/PennyPinchInput';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaUserPlus } from 'react-icons/fa';
import classes from './page.module.css';

const REGISTRATION_HEADING = `Unlock Financial Freedom`;
const REGISTRATION_MESSAGE = `Register for Penny Pinch Now!`;

export const metadata: Metadata = {
  title: 'Register',
};

export default function Register() {
  return (
    <div className={classes[`registration-container`]}>
      <header className={classes.header}>
        <h1>{REGISTRATION_HEADING}</h1>
        <h2>{REGISTRATION_MESSAGE}</h2>
      </header>
      <div className={classes[`login-form`]}>
        <div className={classes[`lock-icon`]}>
          <FaUserPlus color="white" fontSize="2.5rem" />
        </div>

        <PennyPinchForm method="POST">
          <div className={classes['login-form-group']}>
            <PennyPinchInput name="email" type="email" placeholder="Email" />
          </div>
          <div className={classes['login-form-group']}>
            <PennyPinchInput
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={classes['login-form-group']}>
            <PennyPinchInput
              name="displayName"
              type="text"
              placeholder="Display Name"
            />
          </div>
          <div className={classes['login-form-group']}>
            <PennyPinchInput
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className={classes['login-form-actions']}>
            <p>
              Have an acount?&nbsp;<Link href="/login">Log In!</Link>
            </p>
            <div>
              <PennyPinchButton href={'/'} type="cancel" text="Cancel" />
              <PennyPinchButton type="submit" text="Sign Up" />
            </div>
          </div>
        </PennyPinchForm>
      </div>
    </div>
  );
}
