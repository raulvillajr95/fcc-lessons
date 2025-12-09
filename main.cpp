#include <iostream>
#include <vector>
using namespace std;

long elementsSum(const vector<vector<int>>& arr, int d = 0)
{
   int n = arr.size();
   long count = 0;
   for(int i = 0; i < n; i++)
   {
      unsigned long pos = n - i - 1;

      // if(arr[i].size() == 0)
      // {

      // }

      if (arr[i].size() == 0 || pos > arr[i].size()-1)
      {
         count += d;
      }
      else
      {
         count += arr[i][pos];
      }
   }

   return count;
}

int main()
{
   vector<vector<int>> test1 = {{3, 2, 1, 0}, {4, 6, 5, 3, 2}, {9, 8, 7, 4}};
   cout << elementsSum(test1) << endl;

   vector<vector<int>> test2 = {{}, {4, 6, 5, 3, 2}, {9, 8, 7, 4}};
   cout << elementsSum(test2) << endl;

   vector<vector<int>> test3 = {{3, 2, 1, 0}, {4, 6, 5, 3, 2}, {}};
   cout << elementsSum(test3) << endl;


   return 0;
}

/*
n = size of main array
grab number n-1 from 1st sub
grab number n-2 from 2nd sub
...
if n-num is too big for sub
   get number d
sum all number

check for negative bit
check for exponents
check for mantissa

*/