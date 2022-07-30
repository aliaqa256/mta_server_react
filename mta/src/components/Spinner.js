import SpinnerGIF from "../assets/Spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={SpinnerGIF}
        className="d-block m-auto w-50"
        alt="Loading..."
      />
    </>
  );
};

export default Spinner;
