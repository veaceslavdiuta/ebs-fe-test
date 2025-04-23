import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const footerLinks = [
    { title: 'Company', links: ['About', 'Features', 'Works', 'Career'] },
    {
      title: 'Help',
      links: [
        'Customer Support',
        'Delivery Details',
        'Terms & Conditions',
        'Privacy Policy',
      ],
    },
    {
      title: 'FAQ',
      links: ['Account', 'Manage Deliveries', 'Orders', 'Payment'],
    },
    {
      title: 'Resources',
      links: [
        'Free eBooks',
        'Development Tutorial',
        'How To - Blog',
        'Youtube Playlist',
      ],
    },
  ];

  return (
    <footer className="w-full bg-slate-100">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-6 px-4 py-20 xl:px-0">
        <div className="flex w-full flex-col justify-between gap-6 border-b-2 pb-6 lg:flex-row">
          <div className="flex flex-col gap-6 lg:w-1/3">
            <img className="w-40" src="/src/assets/Logo.png" alt="Logo" />
            <p className="text-sm opacity-55">
              We have clothes that suits your style and which you're proud to
              wear. From women to men
            </p>
            <div className="flex gap-6">
              <FaTwitter className="h-6 w-6" />
              <FaFacebook className="h-6 w-6" />
              <FaInstagram className="h-6 w-6" />
              <FaGithub className="h-6 w-6" />
            </div>
          </div>
          <div className="lg:2/3 flex w-full flex-col justify-between gap-6 sm:flex-row">
            {footerLinks.map((section) => (
              <ul key={section.title} className="flex flex-col gap-2 md:gap-3">
                <h4 className="text-lg font-medium uppercase">
                  {section.title}
                </h4>
                {section.links.map((link, index) => (
                  <li key={index} className="text-sm opacity-55">
                    {link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <p className="text-center text-sm opacity-55">
          Shop.co © 2020-2025, All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
