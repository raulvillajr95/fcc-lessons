#include <iostream>
#include <vector>
using namespace std;

vector<short> splitSort(unsigned short num)
{
   vector<short> res;
   string strNum = to_string(num);

   int n = strNum.size();
   for (int i = 0; i < n;i++)
   {
      res.push_back(strNum[i] - '0');
   }
   
   sort(res.begin(), res.end());

   return res;
}

string compare(unsigned short a, unsigned short b)
{
   // vector<short> arrA = splitSort(a);
   // vector<short> arrB = splitSort(b);

   string strNumA = to_string(a);
   string strNumB = to_string(b);

   if ((strNumA[0] == strNumB[1]) && (strNumA[1] == strNumB[0]))
   {
      cout << strNumA[0] << " = " << strNumB[1] << endl;
      cout << strNumA[1] << " = " << strNumB[0] << endl;
      // shouldn't run for 66, 16
      cout << "F" << endl;
      return "100%";
   } else if ((strNumA[0] == strNumB[1]) && (strNumA[1] != strNumB[0]))
   {
      return "50%";
   } else if ((strNumA[0] == strNumB[0]) && (strNumA[1] != strNumB[1]))
   {
      return "50%";
   }


   // if ((strNumA[0] == strNumB[1]) && (strNumA[1] == strNumB[0]))
   // {
   //    return "100%";
   // }

   // 66 , 61

   int count = 0;
   if(strNumA[0] == strNumB[0])
   {
      count++;
   }
   else if (strNumA[0] == strNumB[1])
   {
      count++;
   }

   if(strNumA[1] == strNumB[1])
   {
      count++;
   }
   else if (strNumA[1] == strNumB[0])
   {
      count++;
   }


   string message = "0%";
   if(count == 2)
   {
      message = "100%";
   }
   else if (count == 1)
   {
      message = "50%";
   }

   return message;
}

int main()
{
   cout << compare(66,16) << endl;

   return 0;
}
