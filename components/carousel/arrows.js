import ArrowNext from "./nextarrow";
import ArrowPrev from "./prevarrow";

const ArrowContainer = ({ next, prev }) => {
  return (
    <>
      <ArrowPrev onClickMove={prev} />
      <ArrowNext onClickMove={next} />
    </>
  );
};

export default ArrowContainer;
