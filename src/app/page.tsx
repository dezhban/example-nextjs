import { authClient } from "#/libs/auth";
import Link from "next/link";

export default async function Home() {
  const session = await authClient.getSession();

  const isLoggedIn = session?.user !== undefined;

  return (
    <div>
      <h1>App Dashboard</h1>
      <h3>
        {isLoggedIn
          ? `Wellcome ${session.user?.name}`
          : "User is not logged in"}
      </h3>
      {isLoggedIn ? (
        <Link href="/auth/logout">Logout</Link>
      ) : (
        <Link href="/auth/login">Login</Link>
      )}
    </div>
  );
}
