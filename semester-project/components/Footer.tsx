import { LogoIcon } from "@/components/Logo";
import Icons from "@/components/icons/Icons";

type TitleProps = {
  children: string;
};

const FooterListTitle = ({ children }: TitleProps) => (
  <div className="font-roboto font-bold text-2xl whitespace-nowrap text-brand-special-200 mb-1 lg:mb-5">
    {children}
  </div>
);

const Footer = () => (
  <div className="bg-brand-blue-100 px-10 py-10">
    <div className="gap-10">
      <div className="grid md:grid-cols-3 gap-10 justify-around justify-items-center align-middle">
        <div>
          <div className="flex flex-col text-brand-special-200 mb-4 font-roboto">
            <b className="text-2xl">What do we offer?</b> <br />
            - Game compatibility checks <br />
            - Game requirements made easier <br />
            - Detailed compatibility analysis <br />
            - Optimization & recommendations <br />
            - Community insights <br />
            <br />
            Ready, set, game!
          </div>
        </div>
        <div className="font-roboto text-brand-special-200 sm:text-lg italic">
          <div className="grid grid-cols-1 justify-items-center gap-y-2">
            <div className="bg-brand-special-200 rounded-full inline-flex w-40 h-40 items-center justify-center">
              <LogoIcon />
            </div>
            Unlock Your Gaming Potential with Confidence.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-1">
            <div className="font-roboto">
              <FooterListTitle>Contact Us</FooterListTitle>
            </div>
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
    </div>
  </div>
);

export default Footer;