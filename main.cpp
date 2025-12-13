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

void dispStr(vector<string> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

vector<vector<string>> matrixSquareUp(int b)
{
   vector<vector<string>> res;

   for (int i = 1; i <= b; i++)
   {
      vector<string> temp;
      for (int j = b; j >= 1; j--)
      {
         if(j > i)
         {
            temp.push_back("x");
         } else
         {
            temp.push_back(to_string(j));
         }
      }
      res.push_back(temp);
      dispStr(temp);
   }

   return res;
}


int main()
{



   ////////////
   matrixSquareUp(3);



   return 0;
}

/*


15555
  123

/////////////


*/