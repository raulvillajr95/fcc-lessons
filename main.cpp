#include <iostream>
#include <vector>
using namespace std;

string baby_shark_lyrics(){string r="",d=", doo doo doo doo doo doo\n",s=" shark",l="Let's go hunt";vector<string>p={"Baby","Mommy","Daddy","Grandma","Grandpa"};for(int i=0;i<5;i++){for(int j=0;j<3;j++){r+=p[i]+s+d;}r+=p[i]+s+"!\n";}for(int i=0;i<3;i++){r+=l+d;}r+=l+"!\n"+"Run away,…";return r;}

int main()
{
   cout << baby_shark_lyrics() << endl;
   return 0;
}

/*
*/