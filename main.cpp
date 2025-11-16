#include <iostream>
using namespace std;

string letters(int a, int b)
{
   string res = "";

   for (int i = a; i < a+b; i++)
   {
      char lett = (i % 26) + 97;
      res += lett;

      if(i < (a+b)-1)
      {
         res += " ";
      }

      // cout << lett << endl;
   }

   return res;
}

string grid(int n)
{
   string res = "";

   for(int i = 0; i < n; i++)
   {
      res += letters(i, n);

      if(i < n-1)
      {
         res += "\n";
      }
   }

   return res;
}

int main()
{
   // letters(1, 4);
   // cout << grid(4) << endl;
   cout << grid(10) << endl;


   return 0;
}

/*

1,1,1 : 12
2,1,1 : 20

2,2,2 : 


start at 1(a) to n(some letter)
   return one string

*/