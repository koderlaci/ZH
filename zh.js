function RomanNumber(number){
    if(number == 0 || number > 3000)
    {
        return "Nem helyes érték!";
    }
    var tomb = [];

    while (number > 0)
    {
        while (number >= 1000)
        {
            number = number - 1000;
            tomb = tomb + "M";
        }
        while (number >= 500)
        {
            if(number / 900 >= 1)
            {
                number = number - 900;
                tomb = tomb + "CM"
            }
            else
            {
                number = number - 500;
                tomb = tomb + "D";
            }          
        }
        while (number >= 100)
        {
            if(number / 400 >= 1)
                {
                    number = number - 400;
                    tomb = tomb + "CD";
                }
            else
            {
                number = number - 100;
                tomb = tomb + "C";
            }

        }
        while (number >= 50)
        {
            if(number / 90 >= 1)
            {
                number = number - 90;
                tomb = tomb + "XC";
            }
            else
            {
                number = number - 50;
                tomb = tomb + "L";
            }

        }
        while (number >= 10)
        {
            if(number / 40 >= 1)
            {
                number = number - 40;
                tomb = tomb + "XL";
            }
            else
            {
                number = number - 10;
                tomb = tomb + "X";
            }
            
        }
        while (number >= 5)
        {
            if(number / 9 >= 1)
            {
                number = number - 9;
                tomb = tomb + "IX";
            }
            else
            {
                number = number - 5;
                tomb = tomb + "V";
            }
            
        }
        while (number >= 1)
        {
            if(number / 4 >= 1)
            {
                number = number - 4;
                tomb = tomb + "IV";
            }
            else
            {
                number = number - 1;
                tomb = tomb + "I";
            }
            
        }
    }
    return tomb;
}

console.log(RomanNumber(500));