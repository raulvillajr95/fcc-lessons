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

string solve(string expression)
{
   // Split by operator
   vector<string> vals;
   vector<char> oper;

   int n = expression.size();
   string tempVal = "";
   for(int i = 0; i < n; i++)
   {
      char x = expression[i];
      if(x == '*' || x == '+' || x == '-' || x == '/')
      {
         vals.push_back(tempVal);
         tempVal = "";
         oper.push_back(x);
      } else if (i == n-1)
      {
         tempVal += x;
         vals.push_back(tempVal);
      } else
      {
         tempVal += x;
      }
   }

   // Join back up
   string res = "";
   int nV = vals.size();
   for (int i = nV-1; i >= 0; i--)
   {
      if(i > 0)
      {
         res += vals[i];
         res += oper[i-1];
      } else
      {
         res += vals[i];
      }
   }

   return res;
}

int main()
{



   ////////////

   cout << solve("100*b/y") << endl;
   cout << solve("a+b-c/d*30") << endl;



   return 0;
}

/*


15555
  123

/////////////


*/