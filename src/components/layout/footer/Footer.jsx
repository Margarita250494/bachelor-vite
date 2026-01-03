import SubscribeNewsletter from "../../SubscribeNewsletter";
import FooterList from './FooterList'
import {
  footerContactLinks,
  footerLegalLinks,
  footerServicesLinks,
  footerSocialLinks
} from '../../../utils/data/footer.data.jsx'
import AllRights from '../../AllRights'
import BrandTitle from '../../BrandTitle'
import Description from '../Description'

function Footer() {
  return (
    <footer className="bg-gray-900 font-serif">
      <div
        className="p-6 s:10 flex flex-wrap justify-between gap-3
      text-white border-b-2 border-gray-800 rounded-xs"
      >
        <div>
          <div>
            <BrandTitle />
            <Description
              variant="footer"
              description="Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips."
            />

          </div>
          <SubscribeNewsletter />
        </div>

        <FooterList
          title="Services"
          infoArray={footerServicesLinks}
        />

        <FooterList
          title="Legal"
          infoArray={footerLegalLinks}
        />

        <FooterList
          title="Talk To Us"
          id="contact"
          infoArray={footerContactLinks}
        />

      </div>

      <nav
        className="p-4.5 block text-center s:text-start s:py-6 s:px-10 s:flex justify-between items-center
      text-gray-200 text-[18px] font-bold tracking-[0.8px]"
      >
        <AllRights />
        <ul className="flex justify-center items-center gap-3 mt-4 s:mt-0">
          {footerSocialLinks.map((socialLink) => (
            <li
              key={socialLink.title}
              className="group"
            >
              <a
                href={socialLink.link}
                title={socialLink.title}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center border-2
                border-gray-200 rounded-[50%] cursor-pointer
                group-hover:border-primary-500"
              >
                {socialLink.icon}
              </a>
            </li>))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
