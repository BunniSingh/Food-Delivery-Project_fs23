export const getTotalCartAmount = (data) => {
  let total = 0;
  data.map((item) => {
    if (item.count > 0) {
      total += item.count * item.price;
    }
  });
  return total;
};

export const randomOrderId = () => {
  let minm = 10000;
  let maxm = 50000;
  let order_id = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  return order_id;
};
