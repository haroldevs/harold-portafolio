import SocialIcons from "../components/SocialIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-black pt-10">
      <div className="w-5/6 mx-auto">
        <SocialIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-semibold text-2xl text-gray-500">
            Harold Galdo (haroldevs)
          </p>
          <p className="text-md text-2xl text-gray-200">
            ©2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
