#include <iostream>
#include <algorithm>
#include <vector>
#include <iomanip>
#include <sstream>
using namespace std;

// string solution(const string &num1, const string &num2)
// {
//    vector<char> nums;

//    int n1 = num1.size();
//    int n2 = num2.size();

//    if (n2 < n1)
//    {
//       // fill with zeros
      
//       n2 = n1;
//    }

//    int carry = 0;

//    // Proceed through longest num for 0's
//    for(int i = n1-1; i >= 0; i--)
//    {
//       int n1P = num1[i + (n1-n2)] - '0' - carry;
//       int n2P = num2[i] - '0';
//       char c = ' ';

//       if(n1P >= n2P)
//       {
//          c = (n1P - n2P) + '0';
//          nums.push_back(c);
//          carry = 0;
//       } else {
//          c = (n1P + 10 - n2P) + '0';
//          nums.push_back(c);
//          carry = 1;
//       }
//    }

//    reverse(nums.begin(), nums.end());
//    return string(nums.begin(), nums.end());
// }

//////////////////

string createIngredients(double sa = 0, double se = 0, double ch = 0)
{
   if(sa < 0 || se < 0 || ch < 0)
   {
      return "";
   }

   if (sa == 0 && se == 0 && ch == 0)
   {
      return "[60.00;180.00;5.00]";
   }

   if (sa > 0)
   {
      se = sa*3.0;
      ch = sa/12.0;
   } else if (se > 0)
   {
      sa = se/3.0;
      ch = se/36.0;
   } else if (ch > 0)
   {
      sa = ch*12.0;
      se = ch*36.0;
   }

   stringstream ss;
   ss << "[" << fixed << setprecision(2) << sa << ";";
   ss << fixed << setprecision(2) << se << ";";
   ss << fixed << setprecision(2) << ch << "]";

   string message = ss.str();
   // message += "[" + to_string(sa) + ";";
   // message += to_string(se) + ";";
   // message += to_string(ch) + "]";

   return message;
}

int main()
{
   // cout << solution("9", "2") << endl;
   // cout << solution("70", "22") << endl;
   // cout << solution("300", "299") << endl;
   // cout << solution("1000", "1") << endl;
   // cout << solution("10", "1") << endl;
   // cout << solution("100", "1") << endl;

   ////////////
   cout << createIngredients() << endl;
   cout << createIngredients(60) << endl;
   cout << createIngredients(0,180) << endl;
   cout << createIngredients(100) << endl;


   return 0;
}

/*
ratio: 12/36/1
get only 2 decimal places


check for negative bit
check for exponents
check for mantissa

*/