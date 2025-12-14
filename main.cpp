#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

void dispChar(vector<char> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

bool isAll0(string num)
{
   bool res = true;
   int n = num.size();

   for(int i = 0; i < n; i++)
   {
      if(num[i] != '0')
      {
         res = false;
         break;
      }
   }

   return res;
}

string addLargeNumbers(string num1, string num2)
{
   int i = num1.size() - 1;
   int j = num2.size() - 1;
   int carry = 0;
   vector<char> result;

   while(i >= 0 || j >= 0 || carry)
   {
      int n1 = (i >= 0) ? num1[i] - '0' : 0;
      int n2 = (j >= 0) ? num1[j] - '0' : 0;
      int current = n1 + n2 + carry;
      carry = current / 10;
      current = current % 10;
      result.push_back('0' + current);
      i--;
      j--;
   }

   reverse(result.begin(), result.end());
   return string(result.begin(), result.end());
}

string solution(const string &num1, const string &num2)
{
   int n1 = num1.size();
   int n2 = num2.size();

   vector<vector<char>> nums;

   for(int i = n2-1; i >= 0; i--)
   {
      int n2D = num2[i] - '0';
      int carry = 0;
      vector<char> line;
      for(int j = n1-1; j >= 0; j--)
      {
         // Debug
         // cout << "RUN: j" << j << "; i" << i << endl;

         int n1D = num1[j] - '0';

         int sinMul = n2D * n1D + carry;
         string sMStr = to_string(sinMul);

         // Debug
         cout << n2D << "*" << n1D << "+" << carry << endl;
         cout << "sMStr: " << sMStr << endl;

         /*
         add zeros to the line
            every next line increment the amount
         */
         if(j == n1 - 1)
         {
            // cout << "upwards? " << (-i + n2-1) << endl;
            for(int k = 0; k < -i + n2 - 1; k++)
            {
               line.push_back('0');
            }
         }

         if(sMStr.size() == 2 && j > 0)
         {
            carry = sMStr[0] - '0';
            line.push_back(sMStr[1]);
         }
         else if (sMStr.size() == 2 && j == 0)
         {
            // Debug
            cout << "last num: " << sMStr << endl;

            line.push_back(sMStr[1]);
            line.push_back(sMStr[0]);
         }
         else
         {
            line.push_back(sMStr[0]);
            carry = 0;
         }

      }

      reverse(line.begin(), line.end());
      nums.push_back(line);
      dispChar(line);
   }


   // Add lines
   int nN = nums.size();
   string res = string(nums[nN-1].begin(), nums[nN-1].end());
   if(isAll0(res))
   {
      res = "";
   }

   cout << "res: " << res << endl;

   for(int i = nN-2; i >= 0; i--)
   {
      string temp = string(nums[i].begin(), nums[i].end());
      if(isAll0(temp))
      {
         temp = "";
      }
      cout << "temp: " << temp << endl;
      res = addLargeNumbers(res, temp);
   }

   return res;
}

//////////////////


string diagonal(const vector<vector<int>> &matrix)
{
   int n = matrix.size();
   int priD = 0;
   int secD = 0;
   for(int i = 0; i < n; i++)
   {
      priD += matrix[i][i];
      secD += matrix[i][n-1-i];
      // for(int j = 0; j < n; j++)
      // {

      // }
   }

   string mess = "";
   if(priD > secD)
   {
      mess = "Principal Diagonal win!";
   } else if (priD < secD)
   {
      mess = "Secondary Diagonal win!";
   } else
   {
      mess = "Draw!";
   }

   return mess;
}

int main()
{
   // cout << solution("95", "2") << endl;
   // solution("13", "5");
   // cout << solution("95", "22") << endl;
   // cout << solution("319", "204") << endl;

   // cout << addLargeNumbers("63800","") << endl;
   // // cout << addLargeNumbers("","") << endl;

   ////////////
   



   return 0;
}

/*


15555
  123

/////////////


*/