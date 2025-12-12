#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

string remLead0(string num)
{
   int n = num.size();
   string res = "";
   bool hasNum = false;

   for(int i = 0; i < n; i++)
   {
      if(num[i] != '0')
      {
         hasNum = true;
      }

      if(hasNum)
      {
         res += num[i];
      }
   }

   if(!hasNum)
   {
      res = "0";
   }
   return res;
}

string fillW0(string num, int size)
{
   int n = num.size();
   int num0 = size - n;
   string zeros = "";
   for(int i = 0; i < num0; i++)
   {
      zeros += "0";
   }

   return zeros + num;
}


string solution(const string &num1, const string &num2)
{
   vector<char> nums;

   int n1 = num1.size();
   int n2 = num2.size();

   // cout << n1 << " " << n2 << endl;

   string filledW0 = num2;
   if (n2 < n1)
   {
      filledW0 = fillW0(num2, n1);
      
      n2 = n1;
   }

   int carry = 0;

   // Proceed through longest num for 0's
   for(int i = n1-1; i >= 0; i--)
   {
      int n1P = num1[i + (n1-n2)] - '0' - carry;
      int n2P = filledW0[i] - '0';
      char c = ' ';

      if(n1P >= n2P)
      {
         c = (n1P - n2P) + '0';
         nums.push_back(c);
         carry = 0;
      } else {
         c = (n1P + 10 - n2P) + '0';
         nums.push_back(c);
         carry = 1;
      }
   }

   reverse(nums.begin(), nums.end());
   string res = string(nums.begin(), nums.end());
   string no0 = remLead0(res);
   return no0;
}

//////////////////



int main()
{
   cout << solution("70", "22") << endl;
   cout << solution("100", "1") << endl; // 99
   cout << solution("1000", "999") << endl; // 1
   cout << solution("10000", "1000") << endl; // 9000
   cout << solution("123456789101112131415", "98765432101012131415") << endl; // 24691357000100000000

   ////////////



   return 0;
}

/*
If all zeros, keep only 1 '0'

/////////////


*/