const ShimmerUi = () => {
  return (
    <div className="shimmer-list">
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
