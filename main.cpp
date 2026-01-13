#include <iostream>
#include <vector>
#include <climits>
#include <cmath>
using namespace std;

// void dispInt(const vector<int> arr)
// {
//    int n = arr.size();
//    for (int i = 0; i < n; i++)
//    {
//       cout << arr[i] << " ";
//    }
//    cout << endl;
// }

vector<int> solution(const vector<int>& roadA, const vector<int>& roadB)
{
   int nA = roadA.size();
   int nB = roadB.size();
   vector<int> counts;
   for(int i = 0; i < nA; i++)
   {
      int count = 0;
      vector<bool> visitA(nA);
      vector<bool> visitB(nB);
      int pos = i;
      while(true)
      {
         if(visitA[pos])
         {
            break;
         } else {
            visitA[pos] = true;
         }
         pos = roadA[pos];
         count++;

         if(visitB[pos])
         {
            break;
         } else {
            visitB[pos] = true;
         }
         pos = roadB[pos];
         count++;
      }

      counts.push_back(count);
   }

   return counts;
}



//////////////////
string firstCap(string word)
{
   string res = "";
   int n = word.size();
   for(int i = 0; i < n; i++)
   {
      if(i = 0)
      {
         res += toupper(word[i]);
      } else
      {
         res += tolower(word[i]);
      }
   }

   return res;
}

vector<string> capMe(const vector<string>& strings)
{
   vector<string> res;

   int n = strings.size();
   for(int i = 0; i < n; i++)
   {
      res.push_back(firstCap(strings[i]));
   }

   return res;
}


int main()
{




   ////////////

   return 0;
}

/*

get maxes
check repetition

/////////////



*/