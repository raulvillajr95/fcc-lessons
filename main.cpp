#include <iostream>
using namespace std;

int solution(const string& num1, const string& num2)
{
   int n1 = num1.size();
   int n2 = num2.size();

   int res = 0;
   int max = n1;
   if (n2 > n1)
   {
      max = n2;
      res = -1;
   }
   int min = n1;
   if (n2 < n1)
   {
      min = n2;
      res = 1;
   }

   // Equality
   if(n1 == n2)
   {
      for(int i = 0; i < max; i++)
      {
         // if(num1[i] != num2[i])
         // {
         //    res = 1;
         //    break;
         // }

         if(num1[i] > num2[i])
         {
            res = 1;
            break;
         } else if (num1[i] < num2[i])
         {
            res = -1;
            break;
         }
      }
   }

   return res;
}

int main()
{
   cout << solution("12345", "1234") << endl;
   cout << solution("1234", "12345") << endl;
   cout << solution("12345", "12345") << endl;

   return 0;
}

/*



check for negative bit
check for exponents
check for mantissa

*/