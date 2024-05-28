import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Page not found.</p>
      </main>
    </>
  );
}

export default ErrorPage;
