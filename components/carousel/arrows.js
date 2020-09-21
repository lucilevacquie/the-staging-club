import ArrowNext from "./nextarrow";
import ArrowPrev from "./prevarrow";

const ArrowContainer = ({ next, prev }) => {
  return (
    <>
      <ArrowPrev onClickFunc={prev} />
      <ArrowNext onClickFunc={next} />
    </>
  );
};

export default ArrowContainer;
