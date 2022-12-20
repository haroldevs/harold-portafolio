const SocialIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/haroldgaldo/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-url" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/harold.galdo.357/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-url" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/GaldoThomas"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-url" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/haroldevs"
        target="_blank"
        rel="noreferrer"
      >
        <img width={30} alt="github-url" src="../assets/github.png" />
      </a>
    </div>
  );
};
export default SocialIcons;
