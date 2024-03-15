#include <vector>
#include <string>
#include <cstdio>
using namespace std;

// Seperates sentence by space; returning array/vector
vector<string> SeperateBySpace(string sentence)
{
   vector<string> words;

   int counter = 0;
   for (int i = 0; i < sentence.size(); i++) 
   {
      if (sentence.at(i) == ' ')
      {
         string word = sentence.substr(counter, i - (counter));
         words.push_back(word);
         counter = i + 1;
      }
   }

   return words;
}

// Removes duplicate characters in a string
string removeDuplicates(string starter)
{
   string result = "";
   
   for (int i = 0; i < starter.length(); i++)
   {
      char currentLetter = starter[i];
      bool in_result = false;
      
      for(int j = 0; j < result.length(); j++)
      {
         if (currentLetter == result[j])
         {
            in_result = true;
         }
      }
      
      if (in_result == false)
      {
         result += currentLetter;
      }
   }
   
   return result;
}

// Reverses and returns a string
string reverseString(string word)
{
    string result = "";

    for (int i = word.length() - 1; i >= 0; i--)
    {
        result += word[i];
    }
    
    return result;
}

// Read/write to file named 's'
// use 'cin' to read and 'cout' to write
void setIO(string s)
{
   freopen(( s + ".in").c_str(), "r", stdin);
   freopen((s + ".out").c_str(), "w", stdout);
}