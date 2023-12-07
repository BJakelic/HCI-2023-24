import Logo from "@/components/Logo";
import Icons from "@/components/icons/Icons";

type TitleProps = {
  children: string;
};

const FooterListTitle = ({ children }: TitleProps) => (
  <div className="font-roboto-condensed font-bold text-2xl whitespace-nowrap text-brand-special-200 mb-1 lg:mb-5">
    {children}
  </div>
);

const Footer = () => (
  <div className="bg-brand-blue-100 px-10 py-10">
    <div className="container flex flex-col items-center gap-10 self-stretch">
      <div className="grid grid-cols-2 gap-10 justify-around justify-items-center self-stretch">
        <div>
          <div className="hidden md:block text-brand-special-200 mb-4 font-roboto">
            <b>WHAT DO WE OFFER?</b> <br />
            <br />
            - Game compatibility checks <br />
            - Game requirements made easy <br />
            - Detailed compatibility analysis <br />
            - Optimization & recommendations <br />
            - Community insights <br />
            <br />
            Ready, set, game!
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-11">
          <div>
            <FooterListTitle>Contact Us</FooterListTitle>
            <ul className="font-roboto text-brand-special-200 mb-4">
              <li>Ulica kralja Tomislava 1</li>
              <li>21000, Split, Croatia</li>
            </ul>
            <ul className="font-roboto text-brand-special-200 mb-4">
              <li className="flex gap-2">
                <Icons.phone className="w-4" /> +385 123 4567
              </li>
              <li className="flex gap-2">
                <Icons.envelope className="w-4" />
                specschecks@gmail.com
              </li>
            </ul>
            <div className="flex gap-2">
              <Icons.facebook className="w-6" />
              <Icons.twitter className="w-6" />
              <Icons.linked className="w-6" />
              <Icons.instagram className="w-6" />
            </div>
          </div>
        </div>
      </div>
      <p className="font-roboto text-brand-special-200 text-base sm:text-lg italic">
        Unlock Your Gaming Potential with Confidence.
      </p>
    </div>
  </div>
);

export default Footer;