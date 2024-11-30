import { getSession } from "#/libs/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  return (
    <div>
      <h1>App Dashboard</h1>
      <h3>
        {session.isLoggedIn
          ? `Wellcome ${session.userInfo?.name}`
          : "User is not logged in"}
      </h3>
      {session.isLoggedIn ? (
        <Link href="/auth/logout">Logout</Link>
      ) : (
        <Link href="/auth/login">Login</Link>
      )}
    </div>
  );
}
