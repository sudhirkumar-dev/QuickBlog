const Footer = () => {
  return (
    <>
      {" "}
      <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 md:mt-8">
        <div className="flex flex-col text-white">
          <p>Featured blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Featured blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>About US</p>
          <p>Terms and condition</p>
          <p>Terms of service</p>
        </div>
      </div>
      <p className="py-2 pb-2 text-center text-white bg-black">
        All rights reserved @Quick Blog Market 2023
      </p>
    </>
  );
};

export default Footer;
