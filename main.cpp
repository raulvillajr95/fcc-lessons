#include <iostream>
using namespace std;

int main()
{
   int n = 3;
   int count = n+n;
   for (int i = 0; i < n; i++)
   {
      for (int j = 1; j <= n; j++)
      {
         cout << i << "|" << j << endl;
         count += i;
         count += j;
      }
   }

   cout << count << endl;

   return 0;
}
