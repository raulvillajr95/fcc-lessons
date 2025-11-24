#include <iostream>
using namespace std;

string womens_age(unsigned n)
{
   string nStr = to_string(n);
   string baseStr = "";

   unsigned base = 0;
   int age = 0;
   if(n % 2 == 0)
   {
      base = n/2;
      age = 20;
   }
   else
   {
      base = (n-1)/2;
      age = 21;
   }
   baseStr = to_string(base);

   return nStr + "? That's just " + to_string(age) + ", in base " + baseStr + "!";
}

int main()
{
   cout << womens_age(32) << endl;
   cout << womens_age(39) << endl;

   return 0;
}

/*

if odd:
   divide by 2
if even:
   take away 1
   divide by 2

*/