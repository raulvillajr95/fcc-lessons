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

unsigned long long get_sum(unsigned int num)
{
   unsigned long long int count = 0;
   
   for(unsigned int i = 1; i <= (num + 1); i++)
   {
      if (i % 2 == 0)
      {
         unsigned int temp = i;
         for (unsigned int j = 0; j < i; j++)
         {
            count += temp;
            temp += 2;
         }
      } else
      {
         unsigned int temp = i;
         for (unsigned int j = 0; j < i; j++)
         {
            count += temp;
            temp += 2;
         }
      }
   }

   return count;
}

int main()
{
   // vector<int> test1 = latinRow(4, 0);
   // displayArrInt(test1);

   cout << get_sum(0) << endl; // 
   cout << get_sum(1) << endl; // 7 + 15
   cout << get_sum(2) << endl; // 22 + 28
   cout << get_sum(3) << endl; // 50 + 45
   cout << get_sum(4) << endl; // 95 + 64
   cout << get_sum(5) << endl; // 161

   return 0;
}
