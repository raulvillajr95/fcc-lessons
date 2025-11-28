#include <iostream>
using namespace std;

string draw_spider(int legSize, int bodySize, char mouth, char eye)
{
   // Legs
   string legL = "";
   string legR = "";
   if(legSize == 1)
   {
      legL = "^";
      legR = "^";
   } else if (legSize == 2)
   {
      legL = "/\\";
      legR = "/\\";
   } else if (legSize == 3)
   {
      legL = "/╲";
      legR = "╱\\";
   }
   else if (legSize == 4)
   {
      legL = "╱╲";
      legR = "╱╲";
   }

   // Body
   string bodyL = "";
   string bodyR = "";
   if(bodySize == 1)
   {
      bodyL = "(";
      bodyR = ")";
   } else if(bodySize == 2)
   {
      bodyL = "((";
      bodyR = "))";
   } else if(bodySize == 3)
   {
      bodyL = "(((";
      bodyR = ")))";
   }

   // Eyes
   string eyes = "";
   string eyeStr(1, eye);
   if(bodySize == 1)
   {
      eyes += eyeStr;
   } else if (bodySize == 2)
   {
      eyes += eyeStr + eyeStr;
   } else if (bodySize == 3)
   {
      eyes += eyeStr + eyeStr + eyeStr + eyeStr;
   }

   return legL + bodyL + eyes + mouth + eyes + bodyR + legR;
}

int main()
{

   return 0;
}

/*
need to make it faster

possibly find a k + k+1 type pattern to get final result

*/