#include <iostream>
#include <algorithm>
#include <vector>
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

string solve_rock_off(const vector<int> &alice, const vector<int> &bob)
{
   int aPoints = 0;
   int bPoints = 0;

   for (int i = 0; i < 3; i++)
   {
      if(alice[i] > bob[i])
      {
         aPoints++;
      } else if (alice[i] < bob[i])
      {
         bPoints++;
      }
   }

   string message = "";
   message += to_string(aPoints);
   message += ", ";
   message += to_string(bPoints);
   message += ": ";

   if(aPoints > bPoints)
   {
      message += "Alice made \"Kurt\" proud!";
   } else if (aPoints < bPoints)
   {
      message += "Bob made \"Jeff\" proud!";
   } else
   {
      message += "that looks like a \"draw\"! Rock on!";
   }

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


   return 0;
}

/*



check for negative bit
check for exponents
check for mantissa

*/