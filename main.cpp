#include <iostream>
#include <utility>
using namespace std;

void dispPair(pair<int, int> p)
{
   cout << p.first << " " << p.second << endl;
}

pair<int, int> solve(int a, int b)
{
   if (a == 0 || b == 0)
   {
      // cout << "ZERO" << endl;
      return {a,b};
   }
   
   if (a >= (2*b))
   {
      a = a - 2*b;
      return solve(a,b);
   }
   
   if (b >= (2*a))
   {
      b = b - 2*a;
      return solve(a,b);
   }

   return {a,b};
}

int main()
{
   // pair<int, int> test1 = solve(6,19);
   // dispPair(test1);

   // test1 = solve(2,1);
   // dispPair(test1);
   
   pair<int, int> test1 = solve(22,5);
   dispPair(test1);
   return 0;
}

/*



check for negative bit
check for exponents
check for mantissa

*/