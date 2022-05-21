const Validator = (name, value) => {
  let res = "";
  switch (name) {
    case "email":
      res =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return res.test(value);
      break;
    case "name":
      res = /[A-Za-z]/gi;
      return res.test(value);
      break;
    case "surname":
      res = /[A-Za-z]/gi;
      return res.test(value);
      break;
    case "age":
      res = /^[0-9]+$/;
      return res.test(value);
      break;
    case "cardNumber":
      res = /^[0-9]+$/;
      return res.test(value);
      break;
    case "fullName":
      res = /[A-Za-z]/gi;
      return res.test(value);
      break;
    case "dateofExpire":
      res = /^[0-9]+$/;
      return res.test(value);
      break;
    case "CVC":
      res = /^[0-9]+$/;
      return res.test(value);
      break;
    default:
      console.log("?");
      break;
  }
};

export default Validator;
