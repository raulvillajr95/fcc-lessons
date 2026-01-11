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
string revStr(string str)
{
   string res = "";
   int n = str.size();
   for(int i = n-1; i >= 0; i--)
   {
      res += str[i];
   }

   return res;
}

string shorter_reverse_longer(const string& a, const string& b)
{
   int nA = a.size();
   int nB = b.size();

   string message = "";

   if (nA < nB)
   {
      message += a;
      message += revStr(b);
      message += a;
   } else
   {
      message += b;
      message += revStr(a);
      message += b;
   }

   return message;
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