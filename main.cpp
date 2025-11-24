#include <iostream>
#include <vector>
using namespace std;

string getTurkishNumber(unsigned int n)
{
   vector<string> ones = {"sıfır","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"};
   vector<string> tens = {"on","yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"};

   int one = 0;
   int two = 0;

   string message = "";

   if(n < 10)
   {
      message += ones[n];
   }
   else
   {
      one = n % 10;
      two = (n - one)/10;

      if(one == 0)
      {
         message += tens[two-1];
      }
      else
      {
         message += tens[two-1];
         message += " ";
         message += ones[one];
      }

      
   }

   return message;
}

int main()
{
   cout << getTurkishNumber(0) << endl;
   cout << getTurkishNumber(16) << endl;
   cout << getTurkishNumber(70) << endl;
   cout << getTurkishNumber(26) << endl;

   return 0;
}

/*
need to make it faster

possibly find a k + k+1 type pattern to get final result

*/