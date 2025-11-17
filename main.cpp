#include <iostream>
using namespace std;

string plant(string seed, int stem, int flower, int temp)
{
   string res = "";

   // Broken plant
   if (temp < 20 || temp > 30)
   {
      for(int i = 0; i < stem; i++)
      {
         string temp = "";

         for (int j = 0; j < stem; j++)
         {
            temp += "-";
         }

         res += temp;
      }
      res += seed;

      return res;
   }

   for(int i = 0; i < stem; i++)
   {
      string temp = "";

      for (int j = 0; j < stem; j++)
      {
         temp += "-";
      }

      for (int k = 0; k < flower; k++)
      {
         temp += seed;
      }

      res += temp;
   }

   return res;
}

int main()
{

   return 0;
}

/*

1,1,1 : 12
2,1,1 : 20

2,2,2 : 


start at 1(a) to n(some letter)
   return one string

*/