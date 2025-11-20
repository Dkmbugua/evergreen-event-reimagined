import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted" role="main" aria-label="404 page">
      <div className="text-center" role="alert" aria-live="assertive">
        <h1 className="mb-4 text-4xl font-bold" tabIndex={0}>404</h1>
        <p className="mb-4 text-xl text-muted-foreground" tabIndex={0}>Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90" aria-label="Return to Home">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
