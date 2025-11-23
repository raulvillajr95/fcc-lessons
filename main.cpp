#include <iostream>
using namespace std;

long pentagonal(long num)
{
   if (num <= 0)
   {
      return -1;
   }

   long count = 1 + (5*((num - 1)*(num))/2);

   // for (long i = 0; i < num; i++)
   // {
   //    if (i == 0)
   //    {
   //       count++;
   //    }
   //    else
   //    {
   //       count += (i * 5);
   //    }
   // } 

   return count;
}

int main()
{

   // int num = 8;
   // int count = 0;
   // for (int i = 0; i < num; i++)
   // {
   //    if (i == 0)
   //    {
   //       count++;
   //    }
   //    else
   //    {
   //       count += (i * 5);
   //    }
   // }

   // cout << count << endl;

   cout << pentagonal(1) << endl;
   cout << pentagonal(2) << endl;
   cout << pentagonal(3) << endl;
   return 0;
}

/*
need to make it faster

possibly find a k + k+1 type pattern to get final result

*/