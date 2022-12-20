import SocialIcons from "../components/SocialIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-semibold text-2xl text-yellow">
            Harold Galdo (haroldevs)
          </p>
          <p className="text-md text-2xl text-yellow">
            ©2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
