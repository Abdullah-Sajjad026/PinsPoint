import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-muted mt-2 absolute bottom-0 right-0 left-0">
      <div className="container py-6 ">
        <p className="text-md">
          Presented by{" "}
          <Link
            className={`underline hover:scale-105 transition-transform ease-in `}
            href="https://www.abdullahsajjad.me"
          >
            Abdullah Sajjad
          </Link>
        </p>
      </div>
    </footer>
  );
};
