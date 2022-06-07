const Validator = (name, value) => {
  let res = "";
  switch (name) {
    case "email":
      res =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return res.test(value);

    case "name":
      res = /[A-Za-z]/gi;
      return res.test(value);

    case "surname":
      res = /[A-Za-z]/gi;
      return res.test(value);

    case "age":
      res = /^[0-9]+$/;
      return res.test(value);

    case "cardNumber":
      res = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
      return res.test(value);

    case "fullName":
      res = /[A-Za-z]/gi;
      return res.test(value);

    case "dateofExpire":
      res = /^[0-9]+$/;
      let validatedArray = [];
      if (value.length > 0) {
        value.map((valueElement) => {
          validatedArray.push(res.test(valueElement));
        });
      }
      if (validatedArray.every((element) => element === true)) {
        let currentDate = new Date();
        let expireDate = new Date();
        expireDate.setFullYear(20 + value[1], value[0] - 1);
        if (expireDate > currentDate) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }

    case "yearOfExpire":
      res = /^[0-9]+$/;
      return res.test(value);

    case "CVC":
      res = /^[0-9]+$/;
      return res.test(value);

    default:
      break;
  }
};

export default Validator;
