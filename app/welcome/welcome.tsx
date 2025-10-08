import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import personalPhoto from "./photo.jpg"

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <p
              className='text-center'>Hi, I&apos;m [Saba]. Welcome to my portfolio!</p>
            <img
              src={personalPhoto}
              alt="photo of me"
              className=" rounded-4xl border border-gray-200 dark:border-gray-700"
            />
          </div>
        </header>
        <div>
          <nav>3
            <p>
              I am an aspiring software developer, here are my projects.
            </p>
            <p className="text-center"> This portfolio.
              <br /> stay tuned for more! </p>
          </nav>
        </div>
      </div>
    </main >
  );
};