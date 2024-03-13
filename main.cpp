#include <iostream>
#include <string>
using namespace std;

class Person {
public:
    Person(string name);
    void befriend(Person p);
    void unfriend(Person p);
    string get_friend_names();


private:
    string firstName;
    string friends;
};

Person::Person(string name)
{
    firstName = name;
    friends = "";
}

void Person::befriend(Person p)
{
    if (friends.length() == 0)
    {
        friends.append(p.firstName);
    }
    else
    {
        friends.append(" " + p.firstName);
    }
}

void Person::unfriend(Person p)
{

}

string Person::get_friend_names()
{
    return friends;
}

int main()
{


    return 0;
}

/* Ideas:
- 
*/
