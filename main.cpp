#include <iostream>
#include <vector>
#include <utility>
using namespace std;

void dispInt(vector<int> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

vector<int> solution(const vector<int>& arrayA, const vector<int>& arrayB)
{

   bool ran = false;
   int pos = 0;
   vector<int> res;
   // for(int i = 0; i < 5; i++)
   while(pos != 0 || ran != true)
   {
      cout << "added: " << arrayA[pos] << endl;
      res.push_back(arrayA[pos]);

      ran = true;

      pos = arrayA[pos];
      cout << "first: " << pos << endl;

      pos = arrayB[pos-1] - 1;
      cout << "second: " << pos << endl;

      cout << "----------" << endl;
   }

   return res;
}


//////////////////

pair<bool, vector<char>> caseSensitive(const string& str)
{
   bool isLow = true;
   vector<char> highs;
   int n = str.size();
   for(int i = 0; i < n; i++)
   {
      if (str[i] == ' ')
      {
         continue;
      } else if(str[i] == toupper(str[i]))
      {
         isLow = false;
         highs.push_back(str[i]);
      }
   }

   return {isLow, highs};
}

int main()
{
   // vector<int> arrA = {1,3,2,5,4};
   // vector<int> arrB = {5,4,3,2,1};
   // dispInt(solution(arrA, arrB));

   ////////////




   return 0;
}

/*



/////////////


*/