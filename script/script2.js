var triple_digit_number = prompt("Введите трехзначное число: ");                    // ввод трехзначного числа
var hundreds_digit = triple_digit_number[0];                                        // запись цифры сотен
var tens_digit = triple_digit_number[1];                                            // запись цифры десятков
var units_digit = triple_digit_number[2];                                           // запись цифры единиц
alert("Исходное число: " + triple_digit_number +                                    // вывод результата
    "\nЧисло, полученное при перестановке цифр десятков и сотен исходного числа: " 
    + tens_digit + hundreds_digit + units_digit);
    