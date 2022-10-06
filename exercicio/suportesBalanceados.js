//Escreva uma função que receba uma string de colchetes como entrada e determine se a
//ordem dos parênteses é válida. Um colchete é considerado qualquer um dos seguintes
//caracteres: (, ), {, }, [, ou ].

function validOrder(brackets) {
  let hash = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let arrBrackets = brackets.split("");

  let openBrackets = ["(", "{", "["];

  let auxArr = [];

  for (let i = 0; i < arrBrackets.length; i++) {
    if (openBrackets.includes(arrBrackets[i])) {
      auxArr.push(arrBrackets[i]);
    } else if (auxArr[auxArr.length - 1] === hash[arrBrackets[i]]) {
      auxArr.pop();
    } else continue;
  }

  if (auxArr.length !== 0) {
    return false;
  } else {
    return true;
  }
}

validOrder("(){}[]");
validOrder("[{()}](){}");
validOrder("[]{()");
validOrder("[{)]");
