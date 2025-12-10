#include <iostream>
#include <vector>
#include <utility>
using namespace std;

int totMinFreeL(vector<pair<int,int>> freeLanc)
{
   int count = 0;
   int n = freeLanc.size();
   for (int i = 0; i < n; i++)
   {
      count += freeLanc[i].first * 60;
      count += freeLanc[i].second;
   }

   return count;
}

pair<int,int> hrsMins(int mins)
{
   // convert mins to [hrs, mins]
   int hours = 0;

   hours = mins / 60;
   mins -= hours*60;

   return {hours, mins};
}

string workNeeded(int projMin, vector<pair<int,int>> freeL)
{
   int freeLMins = totMinFreeL(freeL);
   int myMin = projMin - freeLMins;
   string message = "";
   if(myMin < 0)
   {
      myMin = 0;
      message = "Easy Money!";
   } else
   {

      pair<int, int> hM = hrsMins(myMin);
      if (hM.first == 0 && hM.second == 0)
      {
         message = "Easy Money!";
      } else
      {
         message += "I need to work ";
         message += to_string(hM.first);
         message += " hour(s) and ";
         message += to_string(hM.second);
         message += " minute(s)";
      }
   }

   return message;
}

// string addLargeNumbers(string num1, string num2)
// {
//    int 
// }

int main()
{

   return 0;
}

/*


check for negative bit
check for exponents
check for mantissa

*/