#include <iostream>
#include <cmath>
using namespace std;

int square_pi(int digits)
{
   string pee = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
   int sum = 0;
   for (int i = 0; i < digits; i++)
   {
      int dig = pee[i] - '0';
      sum += (dig * dig);
   }

   return ceil(sqrt(sum));
}

int main()
{
   cout << square_pi(1) << endl;
   cout << square_pi(3) << endl;

   return 0;
}

/*
*/