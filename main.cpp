#include <iostream>
using namespace std;

class Cube
{
public:
    void SetSide(int num);
    int GetSide();
private:
    int Side = 0;
};

int Cube::GetSide(void)
{
    return Side;
}

void Cube::SetSide(int num)
{
    Side = num;
}

int main()
{
    return 0;
}
