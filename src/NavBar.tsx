import SocialLinks from "./SocialLinks";

const navigation = [
  { name: "about", href: "/", current: false },
  { name: "resume", href: "/resume", current: false },
  { name: "projects", href: "/projects", current: false },
];

export default function NavBar() {
  return (
    <nav className="font-crimson bg-white">
      <div className="mx-auto my-5 max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <a key={"about"} href="/" className="text-3xl text-black">
            katelynn nguyen
          </a>
          <div className="absolute inset-0 flex justify-center items-center pr-2">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={"text-black text-2xl font-medium"}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}
