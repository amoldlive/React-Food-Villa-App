const ShimmerUi = () => {
  return (
    <div className="">
      {Array(15)
        .fill(" ")
        .map((e, index) => (
          <div className="shimmer">
            <img />
          </div>
        ))}
      ;
    </div>
  );
};

export default ShimmerUi;
