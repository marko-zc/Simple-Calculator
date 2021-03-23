import Big from 'big.js';
import operate from './operate';
import isNumber from './isNumber';

function calculate(obj, buttonName) {
    if (buttonName === "C") {
        return {
          total: null,
          next: null,
          operation: null,
        };
      }

    if (isNumber(buttonName)) {
        if (buttonName === "0" && obj.next === "0") {
          return {};
        }
        // If there is an operation, update next
        if (obj.operation) {
          if (obj.next) {
            return { next: obj.next + buttonName };
          }
          return { next: buttonName };
        }
        // If there is no operation, update next and clear the value
        if (obj.next) {
          const next = obj.next === "0" ? buttonName : obj.next + buttonName;
          return {
            next,
            total: null,
          };
        }
        return {
          next: buttonName,
          total: null,
        };
      }

      if (buttonName === ".") {
        if (obj.next) {
          // ignore a . if the next number already has one
          if (obj.next.includes(".")) {
            return {};
          }
          return { next: obj.next + "." };
        }
        return { next: "0." };
      }

      if (buttonName === "=") {
        if (obj.next && obj.operation) {
          return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: null,
          };
        } else {
          // '=' with no operation, nothing to do
          return {};
        }
      }

      if (obj.operation) {
        return {
          total: operate(obj.total, obj.next, obj.operation),
          next: null,
          operation: buttonName,
        };
      }

      if (!obj.next) {
        return { operation: buttonName };
      }
      
      return {
        total: obj.next,
        next: null,
        operation: buttonName,
      };
}

export default calculate;