#include <iostream>
#include <vector>
using namespace std;

vector<int> latinRow(int num, int start)
{
   vector<int> res;

   for(int i = start; i < (start+num); i++)
   {
      res[i] = i + 1;
   }

   return res;
}

void displayArrInt(vector<int> arr)
{
   int n = arr.size();

   for(int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }

   cout << endl;
}

int triSum(int num)
{
   num++;
   int count = 0;
   int start = 1;
   // int temp = num;
   while (num > 0)
   {
      cout << "num: " << num << endl;
      for(int i = start; i < start+num; i++)
      {
         cout << i << endl;
         count += i;
      }

      start += num;
      
      num--;
   }

   return count;
}

int main()
{
   // vector<int> test1 = latinRow(4, 0);
   // displayArrInt(test1);

   cout << triSum(2) << endl;

   return 0;
}
