import personalPhoto from "./assets/photo.jpg";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <p className="text-center">
              Hi, I&apos;m{" "}
              <span className="text-pink-600 border pr-1 pl-1 border-pink-600 rounded-4xl animate-bounce ...">
                Saba
              </span>
              . Welcome to my portfolio!
            </p>
            <img
              src={personalPhoto}
              alt="photo of me"
              className="rounded-4xl border border-pink-200 dark:border-pink-700"
            />
          </div>
        </header>
        <div>
          <nav>
            <p>I am an aspiring software developer, here are my projects.</p>
            <p className="text-center">
              This portfolio.
              <Link to="https://triviallock.com/">Trivial.lock</Link>
              <br /> stay tuned for more!
            </p>
            <p className="text-center">sabazelolem@gmail.com</p>
          </nav>
        </div>
      </div>
    </main>
  );
}
