const useFormatMoney = () => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const format = (amount) => formatter.format(amount);

  return {
    format,
  };
};
export default useFormatMoney;
