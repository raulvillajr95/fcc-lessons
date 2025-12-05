#include <iostream>
#include <vector>
using namespace std;

void displayStr(vector<string> arr)
{
   int n = arr.size();
   for(int i = 0; i < n; i++)
   {
      cout << "|" << arr[i] << "| ";
   }
   cout << endl;
}

vector<string> stripNames(vector<string> arr)
{
   vector<string> res;

   // Begin one
   res.push_back(arr[0].substr(9));

   int n = arr.size();
   for(int i = 1; i < n; i++)
   {
      string name = "";
      if (arr[i][0] == 'R')
      {
         name = arr[i].substr(9);
      } else if(arr[i][0] == 'L')
      {
         name = arr[i].substr(8);
      }

      res.push_back(name);
   }

   return res;
}

vector<string> revArrStr(vector<string> arr)
{
   vector<string> res;

   int n = arr.size();
   for (int i = n-1; i >= 0; i--)
   {
      res.push_back(arr[i]);
   }

   return res;
}

vector<string> stripDir(vector<string> arr)
{
   vector<string> res;

   int n = arr.size();
   for(int i = 1; i < n; i++)
   {
      string direction = "";
      if (arr[i][0] == 'R')
      {
         direction = arr[i].substr(0,5);
      } else if(arr[i][0] == 'L')
      {
         direction = arr[i].substr(0,4);
      }

      res.push_back(direction);
   }

   return res;
}

vector<string> oppDir(vector<string> dir)
{
   vector<string> res;

   int n = dir.size();
   for(int i = 0; i < n; i++)
   {
      string opp = "";
      if(dir[i][0] == 'R')
      {
         opp = "Left";
      } else
      {
         opp = "Right";
      }

      res.push_back(opp);
   }

   return res;
}

vector<string> solve(vector<string> test1)
{
   vector<string> t1Stripped = stripNames(test1);

   // Reverse names
   vector<string> t1StrippedRev = revArrStr(t1Stripped);

   // Add "Begin on " to first name
   t1StrippedRev[0] = "Begin on " + t1StrippedRev[0];

   // Strip directions
   vector<string> directions = stripDir(test1);

   // Rev direc.
   vector<string> dirRev = revArrStr(directions);

   // Opp direc.
   vector<string> oppDirec = oppDir(dirRev);

   // Add direc. to names
   int n = t1StrippedRev.size();
   for(int i = 1; i < n; i++)
   {
      t1StrippedRev[i] = oppDirec[i-1] + " on " + t1StrippedRev[i];
   }

   return t1StrippedRev;
}

int main()
{
   vector<string> test1 = {"Begin on Road A","Right on Road B","Right on Road C","Left on Road D"};

   // Names
   vector<string> t1Stripped = stripNames(test1);
   displayStr(t1Stripped);

   // Reverse names
   vector<string> t1StrippedRev = revArrStr(t1Stripped);
   displayStr(t1StrippedRev);

   // Add "Begin on " to first name
   t1StrippedRev[0] = "Begin on " + t1StrippedRev[0];
   displayStr(t1StrippedRev);

   // Strip directions
   vector<string> directions = stripDir(test1);
   displayStr(directions);

   // Rev direc.
   vector<string> dirRev = revArrStr(directions);
   displayStr(dirRev);

   // Opp direc.
   vector<string> oppDirec = oppDir(dirRev);
   displayStr(oppDirec);

   // Add direc. to names
   int n = t1StrippedRev.size();
   for(int i = 1; i < n; i++)
   {
      t1StrippedRev[i] = oppDirec[i-1] + " on " + t1StrippedRev[i];
   }
   displayStr(t1StrippedRev);

   return 0;
}

/*
["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]
['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']

What all of after "on"
   reverse it
Add "Begin on " to first one
append opposite of last
   og: begin, right, right, left
   new: begin, right, left, left



In practice:
strip names✅
reverse✅
add begin to first✅
   "Begin on " + name

strip directions✅
reverse✅
get opposites✅
add new direction to names
   direction + " on " + name

*/