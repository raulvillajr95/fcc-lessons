#include <iostream>
#include <vector>
using namespace std;

vector<string> splitPacket(string packet)
{
   string header = packet.substr(0, 4);
   string instr = packet.substr(4, 4);
   string dat1 = packet.substr(8, 4);
   string dat2 = packet.substr(12, 4);
   string foot = packet.substr(16, 4);

   return {header, instr, dat1, dat2, foot};
}

string datStr(int num)
{
   string res = "";

   if (num < 0)
   {
      res = "0000";
   } else if (num > 9999)
   {
      res = "9999";
   } else if (num < 10)
   {
      res += "000";
      res += to_string(num);
   } else if (num < 100)
   {
      res += "00";
      res += to_string(num);
   } else if (num < 1000)
   {
      res += "0";
      res += to_string(num);
   } else
   {
      res += to_string(num);
   }

   return res;
}

string value(string data1, string data2, string instr)
{
   int dat1 = stoi(data1);
   int dat2 = stoi(data2);

   int res = 0;

   if(instr == "0F12")
   {
      res = dat1 + dat2;
   } else if(instr == "B7A2")
   {
      res = dat1 - dat2;
   } else if(instr == "C3D9")
   {
      res = dat1 * dat2;
   }

   return datStr(res);
}

string communicationModule(string packet)
{
   vector<string> spPack = splitPacket(packet);
   spPack[2] = value(spPack[2], spPack[3], spPack[1]);
   spPack[1] = "FFFF";
   spPack[3] = "0000";

   return spPack[0] + spPack[1] + spPack[2] + spPack[3] + spPack[4];
}

// string addLargeNumbers(string num1, string num2)
// {
//    int 
// }

int main()
{

   return 0;
}

/*
split int 5 data string (len 4 each)
function that performs calc
   takes 3 data strings
function that turns int to 4 digit string

check for negative bit
check for exponents
check for mantissa

*/