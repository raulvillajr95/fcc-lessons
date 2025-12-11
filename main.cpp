#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>
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

int powStr(string pow)
{
   int res = 0;

   int n = pow.size();
   res = stoi(pow.substr(0, n-1));

   return res;
}

string cookingTime(const string &needPow, int min, int sec, const string &givPow)
{
   int nPow = powStr(needPow);
   int gPow = powStr(givPow);

   int ogTime = min*60 + sec;
   double factor = nPow/(gPow*1.0);

   int newTime = ceil(factor*ogTime);

   int nMin = newTime / 60;
   newTime -= nMin * 60;

   string res = "";
   res += to_string(nMin);
   res += " minutes ";
   res += to_string(newTime);
   res += " seconds";

   return res;
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
   


   return 0;
}

/*

find out calculatation from a watts to b watts
600W -> 260 [4 min 20 sec]
800W -> 195 [3 min 15 sec]

600/800 = 6/8 = 3/4
3/4 * 260 = 195


check for negative bit
check for exponents
check for mantissa

*/