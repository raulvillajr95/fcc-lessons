#include <iostream>
#include <vector>
using namespace std;

int sumNums(vector<int> arr, int a, int b)
{
   int sum = 0;
   
   if (a == (b-1))
   {
      return sum;
   }
   else
   {
      for(int i = a+1; i < b; i++)
      {
         sum += arr[i];
      }
   }

   return sum;
}

vector<int> posNeg(vector<int> arr)
{
   vector<int> negatives;
   int nA = arr.size();

   for(int i = 0; i < nA; i++)
   {
      if(arr[i] < 0)
      {
         negatives.push_back(i);
      }
   }

   return negatives;
}

int MaxSumBetweenTwoNegatives(vector<int> arr)
{
   // Get positions of negatives.
   vector<int> negatives = posNeg(arr);
   int nN = negatives.size();
   
   if (nN == 1 || nN == 0)
   {
      return -1;
   }

   int maxCount = 0;
   for(int i = 0; i < nN-1; i++)
   {
      int a = negatives[i];
      int b = negatives[i+1];
      int sum = sumNums(arr, a, b);
      if(sum > maxCount)
      {
         maxCount = sum;
      }
   }

   return maxCount;
}

void dispInt(vector<int> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

int main()
{
   vector<int> test1 = {4, -1, 6, -2, 3, 5, -7, 7};
   // cout << sumNums(test1, 1, 2) << endl;
   cout << MaxSumBetweenTwoNegatives(test1) << endl;

   return 0;
}

/*

find position of negatives
get sum of nums

*/