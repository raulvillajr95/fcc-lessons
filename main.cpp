#include <iostream>
#include <vector>
#include <utility>
using namespace std;

void dispIntP(pair<int, int> par)
{
   cout << par.first << " " << par.second << endl;
}

pair<int, int> evaluatePath(const vector<int>& numbers)
{

   int lives = 2;
   int pos = 0;
   int moves = 0;
   int n = numbers.size();

   while (numbers[pos] != 0 && lives > 0)
   {
      cout << "round pos: " << pos << endl;
      if(lives == 2)
      {
         cout << "value: " << numbers[pos] << endl;

         // Try
         if ((pos + numbers[pos]) < 0 || (pos + numbers[pos]) >= n)
         {
            lives--;
            continue;
         }

         pos += numbers[pos];
         cout << "Life2 pos: " << pos << endl;
         moves++;
      } else if (lives == 1)
      {
         cout << "value: " << -numbers[pos] << endl;
         
         // Try
         if ((pos - numbers[pos]) < 0 || (pos - numbers[pos]) >= n)
         {
            break;
         }

         pos -= numbers[pos];
         cout << "Life1 pos: " << pos << endl;
         moves++;
      }

      // if(pos < 0)
      // {
      //    lives--;
      //    // if(lives == 0)
      //    // {
      //    //    break;
      //    // }

      //    pos = -pos;
      //    cout << "too small pos: " << pos << endl;
      // } else if (pos >= n)
      // {
      //    lives--;
      //    // if(lives == 0)
      //    // {
      //    //    break;
      //    // }

      //    pos = (n-1)-(pos-(n-1));
      //    cout << "too big pos: " << pos << endl;
      // }
      
      cout << "total moves: " << moves << endl;
      cout << "----------------" << endl;
   }

   return {pos, moves};
}

int main()
{
   vector<int> test1 = {3, 4, 1, 1, -3, 1};
   pair<int, int> par1 = evaluatePath(test1);
   dispIntP(par1); // 4,5

   // vector<int> test2 = {2, 1, -3, 4};
   // pair<int, int> par2 = evaluatePath(test2);
   // dispIntP(par2); // 2,1

   return 0;
}

/*
if char: 
   could be same char or X
if newline:
   must be a newline

must be same length


check for negative bit
check for exponents
check for mantissa

*/