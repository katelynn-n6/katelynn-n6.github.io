import SocialLinks from "./SocialLinks";

export default function SiteFooter() {
  return (
    <div className="relative left-0 right-0 bottom-0 flex m-5 mx-20 h-16 items-center justify-between">
      <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="text-xl text-black items-center justify-center">
          <a className="underline" href="mailto:katelynn@gatech.edu">
            katelynn@gatech.edu
          </a>
          <p>(470) 723-3397</p>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center pr-2">
        <div className="flex space-x-4">
          <p className="text-3xl text-black">katelynn nguyen</p>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}
