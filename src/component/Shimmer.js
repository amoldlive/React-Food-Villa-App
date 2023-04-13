const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap">
      {Array(15)
        .fill(" ")
        .map((e, index) => (
          <div className="w-60 h-64 p-5 drop-shadow-lg border-solid border-1 border-red-50 m-5">
            <img className="h-20 w-60 bg-gray-100" />
            <h5 className="font-semibold text-base bg-gray-100 h-3 w-30 mt-3"></h5>
            <p className="bg-gray-100 h-2 w-10 rounded-md mt-3"></p>
            <p className="bg-gray-100 h-2 w-10 text-sm font-extralight mt-3"></p>
          </div>
        ))}
      ;
    </div>
  );
};

export default ShimmerUi;
