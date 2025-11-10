#include <iostream>
using namespace std;

unsigned int realNumbers(unsigned int n)
{
   int count = 0;
   for(unsigned int i = 1; i <= n; i += 2)
      if (i % 3 != 0 && i % 5 != 0)
      {
         // cout << "i: " << i << endl;
         // cout << ": " << i << endl;

         count++;
      }

   return count;
}

int main()
{
   // 1, 
   // cout << realNumbers(5) << endl;
   // cout << realNumbers(10) << endl;
   // cout << realNumbers(20) << endl;
   cout << realNumbers(100) << endl;
   cout << realNumbers(200) << endl;
   cout << realNumbers(300) << endl;

   return 0;
}
