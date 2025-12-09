#include <iostream>
#include <vector>
#include <utility>
using namespace std;

// int totMinFreeL(vector<pair<int,int>> freeLanc)
// {
//    int count = 0;
//    int n = freeLanc.size();
//    for (int i = 0; i < n; i++)
//    {
//       count += freeLanc[i].first * 60;
//       count += freeLanc[i].second;
//    }

//    return count;
// }

// pair<int,int> hrsMins(int mins)
// {
//    // convert mins to [hrs, mins]
// }

// string workNeeded(int projMin, vector<pair<int,int>> freeL)
// {
//    int freeLMins = totMinFreeL(freeL);
//    int myMin = projMin - freeLMins;
//    if(myMin < 0)
//       myMin = 0;

   


// }


//////// Code Signal
void dispInt(vector<int> nums)
{
   int n = nums.size();
   for (int i = 0; i < n; i++)
   {
      cout << nums[i] << " ";
   }
   cout << endl;
}

vector<int> solution(const vector<int> &numbers, int obstacle)
{
   vector<int> res;

   int n = numbers.size();
   for (int i = 0; i < n; i++)
   {
      int pos = i;
      int steps = 0;

      // Debug
      // cout << i << endl;

      // -1 Exit
      if(numbers[i] == obstacle)
      {
         // cout << "-1 Exit" << endl;
         res.push_back(-1);
         continue;
      }

      while(pos < n)
      {
         // cout << pos << endl;
         if(numbers[pos] == obstacle)
         {
            res.push_back(-1);
            steps++;
            break;
         }

         pos += numbers[pos];
         steps++;
      }

      // if(numbers[pos] == obstacle)
      // {
      //    res.push_back(-1);
      //    continue;
      // } else
      // {

      //    res.push_back(steps);
      // }

      if(numbers[pos] != obstacle)
      {
         res.push_back(steps);
      }
   }
   
   return res;
}

int main()
{
   vector<int> test1 = solution({5, 3, 2, 6, 2, 1, 7}, 3);
   dispInt(test1); // 3, -1, 3, 1, 2, 2, 1

   vector<int> test2 = solution({2, 4, 2, 1, 3, 2, 8, 4, 7}, 4);
   dispInt(test2); 
   // -1, -1, -1, -1, -1, -1, 1, -1, 1
   // -1 -1 -1 -1 -1 -1 1 -1 1
   // -1, -1, -1, -1, -1, -1, 1, -1, 1
   // -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 1 -1 1

   return 0;
}

/*


check for negative bit
check for exponents
check for mantissa

*/