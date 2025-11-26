#include <iostream>
#include <vector>
using namespace std;

string baby_shark_lyrics(){string r="",d=", doo doo doo doo doo doo\n",s=" shark",l="Let's go hunt";vector<string>p={"Baby","Mommy","Daddy","Grandma","Grandpa"};for(auto i:p){for(int j=0;j<3;j++){r+=i+s+d;}r+=i+s+"!\n";}for(int i=0;i<3;i++){r+=l+d;}r+=l+"!\n"+"Run away,…";return r;}

int main()
{
   cout << baby_shark_lyrics() << endl;

   // vector<string> p = {"a","b"};
   // for(string num : p)
   // {
   //    cout << num << endl;
   // }

   return 0;
}

/*
*/