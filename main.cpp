#include <iostream>
#include <vector>
#include <climits>
using namespace std;

void dispInt(const vector<int> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

int solution(const vector<int> &arrayA, const vector<int> &arrayB, const vector<int> &arrayC)
{
   int pos = 0;
   int initPos = 0;
   int maxB = INT_MIN;
   int maxC = INT_MIN;

   int nA = arrayA.size();
   int nB = arrayB.size();
   int nC = arrayC.size();

   for (int i = 0; i < 3; i++)
   {
      if (pos >= nA)
      {break;}
      cout << arrayA[pos] << endl;
      pos = arrayA[pos];

      if (pos >= nB)
      {break;}
      if (arrayB[pos] > maxB)
      {maxB = arrayB[pos];}
      cout << arrayB[pos] << endl;
      pos = arrayB[pos];

      if (pos >= nA)
      {break;}
      cout << arrayA[pos] << endl;
      pos = arrayA[pos]; 

      if (pos >= nC)
      {break;}
      if (arrayB[pos] > maxC)
      {maxC = arrayB[pos];}
      cout << arrayC[pos] << endl;
      pos = arrayC[pos];

      if (pos == initPos)
      {
         break;
      } else
      {
         initPos = pos;
      }
   }

   return maxB + maxC;
}


//////////////////

bool isPalindrome(string word)
{
   int n = word.size();
   bool pal = true;
   for(size_t i = 0; i < n; i++)
   {
      char back = word[n-1-i];
      char front = word[i];

      if (back != front)
      {
         pal = false;
         break;
      }
   }

   return pal;
}

bool solve(string s)
{


   string rev = "";
   size_t n = s.size();
   int count = 0;
   for(size_t i = 0; i < n; i++)
   {
      rev += s[n-1-i];
      if(s[i] != s[n-1-i])
      {
         count++;
      }
   }

   bool res = false;
   // cout << count << endl;
   if(count == 2)
   {
      res = true;
   } else if (isPalindrome(s) && n % 2 == 1)
   {
      res = true
   }

   return res;
}

int main()
{
   // vector<int> arrA = {2,1,3,0};
   // vector<int> arrB = {1,3,2,4};
   // vector<int> arrC = {4,2,5,1};

   vector<int> arrA = {2,1,3,0};
   vector<int> arrB = {1,3,2,4};
   vector<int> arrC = {4,2,5,3};

   // cout << solution(arrA, arrB, arrC) << endl;



   ////////////
   // cout << isPalindrome("abba") << endl;
   // cout << isPalindrome("abcba") << endl;
   // cout << isPalindrome("abbx") << endl;

   cout << solve("abba") << endl;
   cout << solve("abbaa") << endl;
   cout << solve("abbx") << endl;
   cout << solve("aa") << endl;
   cout << solve("ab") << endl;
   cout << solve("abcba") << endl;


   return 0;
}

/*

get maxes
check repetition

/////////////
if regular palindrome: false
if regular palindrome, but off by 1: true
else: false

*/