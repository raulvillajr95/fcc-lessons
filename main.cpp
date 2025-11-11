#include <iostream>
#include <vector>
using namespace std;

void displayInt(vector<int> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

long getJumps(const vector<int>& cycle, long long jump)
{
   int n = cycle.size();
   long long pos = jump;
   long long count = 1;

   while(pos % n != 0)
   {
      pos += jump;
      count++;
   }

   return count;
}

int main()
{
   vector<int> test1 = {1,5,7,8,9};
   int jump = 2;
   int n = test1.size();
   int pos = jump;
   int count = 1;

   while(pos % n != 0)
   {
      pos += jump;
      count++;
   }

   cout << count << endl;


   return 0;
}
