#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

// string solution(const string &num1, const string &num2)
// {
//    int n1 = num1.size();
//    int n2 = num2.size();

//    for(int i = n2-1; i >= 0; i--)
//    {
//       int n2D = num2[i];
//       int carry = 0;
//       vector<char> line;
//       for(int j = n1-1; j >= 0; j--)
//       {
//          int n1D = num1[i];

//          int sinMul = n2D * n1D + carry;
//          string sMStr = to_string(sinMul);

//          /*
//          add zeros to the line
//             every next line increment the amount
//          */

//          if(sMStr.size() == 2)
//          {
//             carry = sMStr[0] - '0';
//             line.push_back(sMStr[1]);
//          }
//          else
//          {
//             line.push_back(sMStr[0]);
//             carry = 0;
//          }

//       }
//    }


//    return "";
// }

//////////////////

string solve(int num)
{
   vector<string> parts = {"0", "01"};

   // Special cases
   if (num == 0)
   {
      return "0";
   } else if (num == 1)
   {
      return "01";
   }

   // Build sequence
   for(int i = 2; i <= num; i++)
   {
      cout << "BUILD" << endl;
      string last = parts[i-1];
      string lastLast = parts[i-2];
      string build = last + lastLast;
      cout << "build: " << build << endl;
      parts.push_back(last + lastLast);
   }

   // Join parts
   // int n = parts.size();
   // string res = parts[n-1];

   return parts[parts.size() - 1];
}

int main()
{



   ////////////
   // cout << solve(0) << endl;
   // cout << solve(1) << endl;
   // cout << solve(2) << endl;
   // cout << solve(3) << endl;
   cout << solve(5) << endl;



   return 0;
}

/*


15555
  123

/////////////


*/