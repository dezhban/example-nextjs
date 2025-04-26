import { authClient } from "#/libs/auth";

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
        <a href="/auth/logout">Logout</a>
      ) : (
        <>
          <a href="/auth/login">Login / Register</a>
        </>
      )}
    </div>
  );
}
