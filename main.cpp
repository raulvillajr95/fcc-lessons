#include <iostream>
#include <vector>
using namespace std;

string baby_shark_lyrics(){string r="",d=", doo doo doo doo doo doo\n",s=" shark",l="Let's go hunt";vector<string>p={"Baby","Mommy","Daddy","Grandma","Grandpa"};for(auto i:p){for(int j=0;j<3;j++){r+=i+s+d;}r+=i+s+"!\n";}for(int i=0;i<3;i++){r+=l+d;}r+=l+"!\n"+"Run away,…";return r;}

void displayStr(vector<string> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << endl;
   }
}

int solve(string word)
{
   int n = word.size();

   vector<string> prefixes;
   for(int i = 0; i < n-1; i++)
   {
      string pre = word.substr(0,i+1);
      prefixes.push_back(pre);
   }
   // displayStr(prefixes);

   vector<string> suffixes;
   for (int i = n-1; i >= 1; i--)
   {
      string suff = word.substr(i);
      suffixes.push_back(suff);
   }
   // displayStr(suffixes);

   int fix = suffixes.size();
   int longest = 0;
   for(int i = 0; i < fix/2; i++)
   {
      if(prefixes[i] == suffixes[i])
      {
         if(prefixes[i].size() > longest)
         {
            longest = prefixes[i].size();
         }
      }
   }

   return longest;
}

int main()
{
   // cout << baby_shark_lyrics() << endl;

   string word = "abcabc";
   int n = word.size();

   vector<string> prefixes;
   for(int i = 0; i < n-1; i++)
   {
      string pre = word.substr(0,i+1);
      prefixes.push_back(pre);
   }
   // displayStr(prefixes);

   vector<string> suffixes;
   for (int i = n-1; i >= 1; i--)
   {
      string suff = word.substr(i);
      suffixes.push_back(suff);
   }
   // displayStr(suffixes);

   int fix = suffixes.size();
   int longest = 0;
   for(int i = 0; i <= fix/2; i++)
   {
      if(prefixes[i] == suffixes[i])
      {
         if(prefixes[i].size() > longest)
         {
            longest = prefixes[i].size();
         }
      }
   }

   cout << longest << endl;

   return 0;
}

/*
*/